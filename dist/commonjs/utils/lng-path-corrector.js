"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _url = require("url");

var _defaultConfig = require("../config/default-config");

var parseAs = function parseAs(originalAs, href) {
  var asType = (0, _typeof2.default)(originalAs);
  var as;

  if (asType === 'undefined') {
    as = (0, _url.format)(href, {
      unicode: true
    });
  } else if (asType === 'string') {
    as = originalAs;
  } else {
    throw new Error("'as' type must be 'string', but it is ".concat(asType));
  }

  return as;
};

var parseHref = function parseHref(originalHref) {
  var hrefType = (0, _typeof2.default)(originalHref);
  var href;

  if (hrefType === 'string') {
    href = (0, _url.parse)(originalHref, true
    /* parseQueryString */
    );
  } else if (hrefType === 'object') {
    href = (0, _objectSpread2.default)({}, originalHref);
    href.query = originalHref.query ? (0, _objectSpread2.default)({}, originalHref.query) : {};
  } else {
    throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
  }

  return href;
};

var _default = function _default(config, currentRoute, currentLanguage) {
  var defaultLanguage = config.defaultLanguage,
      allLanguages = config.allLanguages,
      localeSubpaths = config.localeSubpaths;
  var originalAs = currentRoute.as,
      originalHref = currentRoute.href;

  if (!allLanguages.includes(currentLanguage)) {
    throw new Error('Invalid configuration: Current language is not included in all languages array');
  }

  var href = parseHref(originalHref);
  var as = parseAs(originalAs, href); // url.format prefers the 'url.search' string over the 'url.query' object,
  // so remove the search string to ensure the query object is used

  delete href.search;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allLanguages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lng = _step.value;

      if (as.startsWith("/".concat(lng, "/"))) {
        as = as.replace("/".concat(lng, "/"), '/');
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (currentLanguage !== defaultLanguage || localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
    as = "/".concat(currentLanguage).concat(as);
    href.query.lng = currentLanguage;
  }

  return {
    as: as,
    href: href
  };
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;