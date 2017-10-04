const logger = require('./index')({
  port: "10518",
  host: "localhost"
});

console.log("class...",logger);
// Write some json
logger.write({foo:"bar"});
