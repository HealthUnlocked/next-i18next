"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lngFromReq = _interopRequireDefault(require("./lng-from-req"));

var _redirectWithoutCache = _interopRequireDefault(require("./redirect-without-cache"));

var _defaultConfig = require("../config/default-config");

var _default = function _default(req, res) {
  if (req.i18n) {
    var language = (0, _lngFromReq.default)(req);
    var _req$i18n$options = req.i18n.options,
        allLanguages = _req$i18n$options.allLanguages,
        defaultLanguage = _req$i18n$options.defaultLanguage,
        localeSubpaths = _req$i18n$options.localeSubpaths;
    var languageChanged = false;
    /*
      If a user has hit a subpath which does not
      match their language, give preference to
      the path, and change user language.
    */

    allLanguages.forEach(function (lng) {
      if (req.url.startsWith("/".concat(lng, "/")) && language !== lng) {
        req.i18n.changeLanguage(lng);
        languageChanged = true;
      }
    });
    /*
      If a user has hit the root path and their
      language is not set to default, give
      preference to the language and redirect
      their path.
    */

    var languageNeedsSubpath = localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && language !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL;

    if (!languageChanged && languageNeedsSubpath && !req.url.startsWith("/".concat(language, "/"))) {
      allLanguages.forEach(function (lng) {
        if (req.url.startsWith("/".concat(lng, "/"))) {
          req.url = req.url.replace("/".concat(lng, "/"), '/');
        }
      });
      (0, _redirectWithoutCache.default)(res, req.url.replace('/', "/".concat(language, "/")));
    }
    /*
      If a user has a default language prefix
      in their URL, strip it.
    */


    if (language === defaultLanguage && req.url.startsWith("/".concat(defaultLanguage, "/")) && localeSubpaths !== _defaultConfig.localeSubpathOptions.ALL) {
      (0, _redirectWithoutCache.default)(res, req.url.replace("/".concat(defaultLanguage, "/"), '/'));
    }
  }
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;