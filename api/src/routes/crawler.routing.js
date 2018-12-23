"use strict";
module.exports = function(app) {
  var fn = require("../controllers/crawler.controller");

  app.route("/search/:keyword").get(fn.search);
};
