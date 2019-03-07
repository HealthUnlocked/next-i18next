"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _detectNode = _interopRequireDefault(require("detect-node"));

var _defaultConfig = _interopRequireDefault(require("./default-config"));

var deepMergeObjects = ['detection'];

var _default = function _default(userConfig) {
  if (typeof userConfig.localeSubpaths === 'boolean') {
    throw new Error('The localeSubpaths option has been changed to a string: "none", "foreign", or "all"');
  }

  var combinedConfig = (0, _objectSpread2.default)({}, _defaultConfig.default, userConfig);
  deepMergeObjects.forEach(function (obj) {
    combinedConfig[obj] = (0, _objectSpread2.default)({}, _defaultConfig.default[obj], userConfig[obj]);
  });

  if (!userConfig.fallbackLng) {
    combinedConfig.fallbackLng = process.env.NODE_ENV === 'production' ? combinedConfig.defaultLanguage : false;
  }

  combinedConfig.allLanguages = combinedConfig.otherLanguages.concat([combinedConfig.defaultLanguage]);
  combinedConfig.ns = [combinedConfig.defaultNS];
  combinedConfig.whitelist = combinedConfig.allLanguages;

  if (_detectNode.default && !process.browser) {
    var fs = eval("require('fs')");

    var path = require('path');

    var getAllNamespaces = function getAllNamespaces(p) {
      return fs.readdirSync(p).map(function (file) {
        return file.replace('.json', '');
      });
    };

    var _combinedConfig = combinedConfig,
        allLanguages = _combinedConfig.allLanguages,
        defaultLanguage = _combinedConfig.defaultLanguage,
        localePath = _combinedConfig.localePath,
        localeStructure = _combinedConfig.localeStructure;
    combinedConfig = (0, _objectSpread2.default)({}, combinedConfig, {
      preload: allLanguages,
      ns: getAllNamespaces(path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage))),
      backend: {
        loadPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".json")),
        addPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.json"))
      }
    });
  }

  return combinedConfig;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;