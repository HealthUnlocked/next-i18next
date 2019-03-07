"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectNode = _interopRequireDefault(require("detect-node"));

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextXhrBackend = _interopRequireDefault(require("i18next-xhr-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var i18n = _i18next.default.default ? _i18next.default.default : _i18next.default;
i18n.nsFromReactTree = [];

var _default = function _default(config) {
  if (!i18n.isInitialized) {
    if (_detectNode.default) {
      var i18nextNodeBackend = eval("require('i18next-node-fs-backend')");
      var i18nextMiddleware = eval("require('i18next-express-middleware')");
      i18n.use(i18nextNodeBackend);

      if (config.serverLanguageDetection) {
        var serverDetectors = new i18nextMiddleware.LanguageDetector();
        config.customDetectors.forEach(function (detector) {
          return serverDetectors.addDetector(detector);
        });
        i18n.use(serverDetectors);
      }
    } else {
      i18n.use(_i18nextXhrBackend.default);

      if (config.browserLanguageDetection) {
        var browserDetectors = new _i18nextBrowserLanguagedetector.default();
        config.customDetectors.forEach(function (detector) {
          return browserDetectors.addDetector(detector);
        });
        i18n.use(browserDetectors);
      }
    }

    config.use.forEach(function (x) {
      return i18n.use(x);
    });
    i18n.init(config);
  }

  return i18n;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;