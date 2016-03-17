# amd-util-logging

This is an AMD plus Bower version of the original util-logging from: https://bitbucket.org/micovery/util-logging.

It was created using `r.js -convert ./util-logging./ ./`.
`util-logging` is a git submodule of `git@bitbucket.org:micovery/util-logging.git`

Bower dependencies for the node standard modules have been declared in `bower.json`

To load this with e.g. Require.js you need to give it a proper configuratuion, so it finds all the modules.


## Original README

# util-logging#

  * This is a Node.js module that mimics the design of java.util.logging
  * Full documentation available at [http://micovery.bitbucket.org/util-logging](http://micovery.bitbucket.org/util-logging)
  
Usage:

```javascript
//load the module
var log = require("util-logging");

//create a logger, and set its logging level
var logger =  new log.ConsoleLogger().setLevel(log.Level.INFO);

//log a simple message 
logger.info("Message at info level");

//log an error by itself
logger.info(new Error("Cannot compute!"));

//log an error accompanied by a message
logger.info("An error has occurred!", new Error("Cannot compute!"));

//log an object
logger.info({"key1": "value1"});

//log a formatted message
logger.info("Today is %s", new Date());

//log a formatted message with multiple replacements
logger.info("Hello %s, and %s", "foo", "bar");
```
