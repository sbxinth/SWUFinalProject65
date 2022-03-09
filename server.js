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


app.post('/cosciAuth', function (req, res) {
   // start connect database 
// connection.connect();
connection.query('SELECT * FROM account WHERE uusername = ? AND upassword = ?',[req.body.swuID, req.body.password], 
function (error, results, fields) {
  if (results.length > 0) { // check qurey has value
    // in case has value
    if (error) throw error;
    console.log('username is : ', results[0].uusername);
    console.log('password is : ', results[0].upassword);
    console.log('real name is : ', results[0].uname,"",results[0].ulastname);
    // connection.end();
    res.sendFile(path.join(__dirname, '/public/html/login_success.html'));
    // res.sendFile(path.join(__dirname + "/public/html/login_success.html"))

  } else {
    // in case no account
    console.log("HAS NO ACCOUNT")
    res.sendFile(path.join(__dirname, '/public/html/login_fail.html'));
  }

});

// end connect database
});


  app.listen(PORT);
  console.log("running on port " + PORT);  