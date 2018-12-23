"use strict";
module.exports = function(app) {
  var fn = require("../controllers/hello.controller");

  app.route("/hello").get(fn.list);
  app.route("/hello/:id").get(fn.get);
  app.route("/hello/create").post(fn.create);
};
