"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createConsoleLog;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/* eslint-disable no-console */

/**
  * @readonly
  * @enum {String} A console.log type
  */
var messageTypes = {
  error: 'error',
  info: 'info',
  warn: 'warn'
};
Object.freeze(messageTypes);
/**
 *  Logs a custom message to console
 * @param {PrettyError} PrettyError
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 */

function logMessage(PrettyError, messageType, message) {
  var capitalize = function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
  };

  var pe = new PrettyError(); // Create a new empty error

  var newLog = new Error(); // Set the new error message

  newLog.message = message;

  if (Object.values(messageTypes).includes(messageType)) {
    newLog.name = capitalize(messageTypes[messageType]);
    console[messageType](pe.render(newLog));
  } else {
    newLog.name = capitalize(messageTypes.info);
    console.info(pe.render(newLog));
  }
}
/**
 * Create a console log with specified log type, a message and options
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 * @param {Object} options
 */


function createConsoleLog(messageType, message) {
  var _this$config = this.config,
      errorStackTraceLimit = _this$config.errorStackTraceLimit,
      strictMode = _this$config.strictMode;
  var prevStackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = errorStackTraceLimit;
  var util;
  var PrettyError;
  var pe;

  if (!strictMode) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    util = require('util');
    PrettyError = require('pretty-error');
    pe = new PrettyError();
  } else {
    return;
  }
  /* Temporarily set the stacktrace to 0 or errorStackTraceLimit,
     in order to only display a message */


  Error.errorStackTraceLimit = errorStackTraceLimit; // Make room for new message

  console.log(); // Make sure the message is a string

  if (typeof message !== 'string') {
    var metaError = new Error();
    metaError.name = 'Meta';
    metaError.message = "Param message needs to be of type: string. Instead, '".concat((0, _typeof2.default)(message), "' was provided.\n\n------------------------------------------------\n\n\u200B\n        The provided ").concat((0, _typeof2.default)(message), ":\n\n\u200B\n          ").concat(util.inspect(message, true, 8, true), "\n\u200B\n------------------------------------------------\n\n    ");
    console.error(pe.render(metaError));
    return;
  } // Log the message to console


  logMessage(PrettyError, messageType, message); // Reset stack limit

  Error.stackTraceLimit = prevStackLimit;
}

module.exports = exports.default;
module.exports.default = exports.default;