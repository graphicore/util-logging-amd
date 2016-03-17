define(function (require, exports, module) {"use strict";

/**
 * This module exports all the classes that make up the util-logging package.
 * @module util-logging
 * @exports LogRecord
 * @exports Logger
 */
module.exports = {
  /**
   * {@link Logger} class
   */
  "Logger" :  require("./lib/logger.js"),
  /**
   * {@link Level} class
   */
  "Level" : require("./lib/level.js"),
  /**
   * {@link ConsoleHandler} class
   */
  "ConsoleHandler" : require("./lib/consolehandler.js"),
  /**
   * {@link ConsoleLogger} class
   */
  "ConsoleLogger" : require("./lib/consolelogger.js"),
  /**
   * {@link Handler} class
   */
  "Handler" :  require("./lib/handler.js"),
  /**
   * {@link LogRecord} class
   */
  "LogRecord" : require("./lib/logrecord.js"),
  /**
   * @{link Formatter} class
   */
  "Formatter": require("./lib/formatter.js")
}

});
