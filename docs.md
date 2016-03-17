# util-logging#

  * This is a Node.js module that mimics the design of java.util.logging
  
Usage:

```javascript
//load the module
var log = require("util-logging");

//create a logger, and set its logging level
var logger =  new log.ConsoleLogger().setLevel(log.Level.INFO);

//log some a simple message 
logger.info("Message at info level");

//log an error by itself
logger.info(new Error("Cannot compute!"));

//log and error accompanied by a message
logger.info("An error has occurred!", new Error("Cannot compute!"));

//log an object
logger.info({"key1": "value1"});

//log a formatted message
logger.info("Today is %s", new Date());

//log a formatted message with multiple replacements
logger.info("Hello %s, and %s", "foo", "bar");
```


Note that although in the examples, above all the messages are logged at {@link Level.INFO} level, there same combination of parameters is supported at all logging levels.