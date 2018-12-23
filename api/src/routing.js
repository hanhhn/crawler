"use strict";
module.exports = function(app) {
  let hello = require("./routes/hello.routing");
  hello(app);

  let crawler = require("./routes/crawler.routing");
  crawler(app);
};
