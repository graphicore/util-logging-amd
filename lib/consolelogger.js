define(function (require, exports, module) {"use strict";


var Logger = require("./logger.js");
var ConsoleHandler = require("./consolehandler.js");
var Level = require("./level.js");
var util = require("util");

/**
 * This is a sample class that makes use of both {@link ConsoleHandler} and {@link Logger}
 * to create a logger that prints messages to the console.
 *
 * @name ConsoleLogger
 * @param  {object} [options] Optional arguments to build the logger. See the parent class [constructor]{@link Logger} for more details.
 * @returns {ConsoleLogger}
 * @constructor
 * @extends Logger
 */
var ConsoleLogger = function(options) {
  var self = this;
  (self.super_ = ConsoleLogger.super_).call(self, options);

  var handler = new ConsoleHandler();
  handler.setLevel(Level.FINEST);
  self.addHandler(handler);
  self.setLevel(Level.SEVERE);
  return this;
};

util.inherits(ConsoleLogger, Logger);


module.exports = ConsoleLogger;
});
