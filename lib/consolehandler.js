define(function (require, exports, module) {"use strict";

var Level = require("./level");
var Handler = require("./handler");
var Formatter = require("./formatter");

var util = require("util");

/**
 * This class is equivalent to java.util.logging.ConsoleHandler. <br />
 * <br />
 * The published {@link LogRecord} objects are printed using Node.js [console.log]{@link http://nodejs.org/api/stdio.html#stdio_console_log_data} function.
 * <br />
 * Internally, the {@link ConsoleHandler} uses the {@link Formatter} class to generate the string.
 *
 * @name ConsoleHandler
 * @returns {ConsoleHandler}
 * @constructor
 * @extends Handler
 */
var ConsoleHandler =  function() {
  var self = this;
  (self.super_ = ConsoleHandler.super_).call(self);
  this._defaultFormatter = new Formatter();
  return this;
};

util.inherits(ConsoleHandler, Handler);


ConsoleHandler.prototype.getDefaultFormatter = function() {
  return this._defaultFormatter;
};

/**
 * Prints a formatted log record to the console using console.log.
 *
 * @param {LogRecord} logRecord {@link LogRecord} to be published
 */
ConsoleHandler.prototype.publish = function(logRecord) {
  if (!this.isLoggable(logRecord)) {
    return;
  }

  var formatter = this.getFormatter();
  if (!formatter || !(formatter instanceof Formatter)) {
    formatter = this.getDefaultFormatter();
  }

  var message = formatter.formatMessage(logRecord);
  if (!message || typeof message !== "string") {
    return;
  }
  // TODO: make this configurable: console.warn | console.info | console.log\
  // However, console.warn is most useful, because it goes to stderr
  console.warn(message);
};


module.exports = ConsoleHandler;

});
