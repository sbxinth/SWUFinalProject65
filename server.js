var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");
const PORT = process.env.PORT || 3000
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "swufinal"
});
//"SELECT * FROM Account WHERE username = ? AND password = ?",[username, password],
//
app.get("/home", function(request, response) {
  response.sendFile(path.join(__dirname, '/public/html/swu.html'));
 // start connect database 
connection.connect();
connection.query('SELECT * FROM account WHERE username = ? AND password = ?',["co611010035", "co611010035"], 
function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();
// end connect database
 });
 app.get("/login", function(request, response) {
  response.sendFile(path.join(__dirname, '/public/html/cosci_login.html'));
 });

 app.post('/getBranch', function (req, res) {
  console.log(req.body.demoFormSelected);
  if (req.body.demoFormSelected == "COSCI"){
    res.redirect("/login");
  }else if (req.body.demoFormSelected == "ENGINEER"){
    res.send("ENGINEER")
  }
});


  app.listen(PORT);
  console.log("running on port " + PORT);  