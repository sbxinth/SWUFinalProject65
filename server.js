var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
const PORT = process.env.PORT || 3000
app.use(express.static('public'));
const dbConnectionn = require("./database");
const { render } = require("express/lib/response");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 
app.set("views",path.join(__dirname, '/public/views'))
app.set( "view engine", "ejs" );
//"SELECT * FROM Account WHERE username = ? AND password = ?",[username, password],
//
app.get("/home", function(request, response) {
  response.render("swu");
 });
 app.get("/login", function(request, response) {
  response.render("cosci_login");
 });

 app.post('/getBranch', function (req, res) {
  console.log(req.body.demoFormSelected);
  if (req.body.demoFormSelected == "COSCI"){
    res.redirect("/login");
  }else if (req.body.demoFormSelected == "ENGINEER"){
    res.send("ENGINEER");
  }
});

app.get("/getEJS", function(req,res){
  res.render("hometest")
});

app.post('/cosciAuth', function (req, res) {
dbConnectionn.query('SELECT * FROM account WHERE uusername = ? AND upassword = ?',[req.body.swuID, req.body.password], 
function (error, results, fields) {
  if (results.length > 0) { // check qurey has value
    // in case has value
    if (error) throw error;
    console.log('username is : ', results[0].uusername);
    console.log('password is : ', results[0].upassword);
    console.log('real name is : ', results[0].uname,"",results[0].ulastname);
    res.render("login_success");
  } else {
    // in case no account
    console.log("HAS NO ACCOUNT")
    res.render("login_fail");
  }
});
});


  app.listen(PORT);
  console.log("running on port " + PORT);  