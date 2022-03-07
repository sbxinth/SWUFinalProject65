var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
const PORT = process.env.PORT || 8082



  app.listen(PORT);
  console.log("running on port " + PORT);  