export const localeSubpathOptions = {
  ALL: 'all',
  FOREIGN: 'foreign',
  NONE: 'none'
};
const DEFAULT_LANGUAGE = 'en';
const OTHER_LANGUAGES = [];
const DEFAULT_NAMESPACE = 'common';
const LOCALE_PATH = 'static/locales';
const LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
const LOCALE_SUBPATHS = localeSubpathOptions.NONE;
export default {
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
    format: (value, format) => format === 'uppercase' ? value.toUpperCase() : value
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
    loadPath: `/${LOCALE_PATH}/${LOCALE_STRUCTURE}.json`,
    addPath: `/${LOCALE_PATH}/${LOCALE_STRUCTURE}.missing.json`
  },
  react: {
    wait: true
  },
  strictMode: true,
  errorStackTraceLimit: 0
};