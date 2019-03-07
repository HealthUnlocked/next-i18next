"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.localeSubpathOptions = void 0;
var localeSubpathOptions = {
  ALL: 'all',
  FOREIGN: 'foreign',
  NONE: 'none'
};
exports.localeSubpathOptions = localeSubpathOptions;
var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_SUBPATHS = localeSubpathOptions.NONE;
var _default = {
  defaultLanguage: DEFAULT_LANGUAGE,
  otherLanguages: OTHER_LANGUAGES,
  load: 'currentOnly',
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  localeSubpaths: LOCALE_SUBPATHS,
  ns: [DEFAULT_NAMESPACE],
  use: [],
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format) {
      return _format === 'uppercase' ? value.toUpperCase() : value;
    }
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  ignoreRoutes: ['/_next', '/static'],
  customDetectors: [],
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie']
  },
  backend: {
    loadPath: "/".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".json"),
    addPath: "/".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".missing.json")
  },
  react: {
    wait: true
  },
  strictMode: true,
  errorStackTraceLimit: 0
};
exports.default = _default;