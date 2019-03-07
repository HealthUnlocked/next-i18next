"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultConfig = require("../config/default-config");

var _default = function _default(nextI18NextConfig, lng) {
  var _nextI18NextConfig$co = nextI18NextConfig.config,
      defaultLanguage = _nextI18NextConfig$co.defaultLanguage,
      localeSubpaths = _nextI18NextConfig$co.localeSubpaths;

  if (lng) {
    if (localeSubpaths === _defaultConfig.localeSubpathOptions.NONE) {
      return false;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.FOREIGN && lng !== defaultLanguage) {
      return true;
    }

    if (localeSubpaths === _defaultConfig.localeSubpathOptions.ALL) {
      return true;
    }
  }

  return false;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;