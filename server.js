var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
const PORT = process.env.PORT || 3000
app.use(express.static('public'));
// 

//
app.get("/home", function(request, response) {
  response.sendFile(path.join(__dirname, '/public/html/swu.html'));
 });
 app.get("/login", function(request, response) {
  response.sendFile(path.join(__dirname, '/public/html/cosci_login.html'));
 });

 app.post('/getBranch', function (req, res) {
  console.log(req.body.demoForm);
});


  app.listen(PORT);
  console.log("running on port " + PORT);  