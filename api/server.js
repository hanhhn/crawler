const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").load();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const Task = require("./src/models/task.model"); //created model loading here

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/crawler");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./src/routing"); //importing route
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("RESTful API server started on: " + port);
