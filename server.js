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
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

 session.isLoggedIn = false;

//
app.get("/home", (request, response,) => {
  response.render("swu");
 });

 app.get("/profile", (request, response,) => {
  if (!session.isLoggedIn){
    response.render("cosci_login");
  }else{
    response.render("userprofile", { 
      firstname : session.firstname, 
      lastname : session.lastname,
      studentID : session.studentID
    });
  }
 });

 app.get("/login", (request, response) => {
  console.log(session.isLoggedIn,"in /login");
  if (!session.isLoggedIn){
    response.render("cosci_login");
  }else{
    response.render("userprofile", { 
      firstname : session.firstname, 
      lastname : session.lastname,
      studentID : session.studentID
    });
  }
 });

 app.get("/logout",function(req,res){
  req.session.destroy(function (err) {
    session.isLoggedIn = false;
    res.redirect("/login");
    res.end();
});
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
  res.redirect("/profile");
});


// dbConnectionn.query('SELECT * FROM user WHERE Username = ? AND Password = ?',["co611010035", "co611010035"], 
// function (error, results, fields) {
//   if (results.length > 0) { // check qurey has value
//     // in case has value
//     if (error) throw error;
    
//     session.isLoggedIn = true;
//     session.firstname = results[0].Firstname;
//     session.lastname = results[0].Lastname;
//     session.studentID = results[0].Username;
//     console.log('data is : ', results);
//     console.log('username is : ', results[0].Username);
//     console.log('password is : ', results[0].Password);
//     console.log('real name is : ', session.firstname,"",session.lastname);
//     console.log("session.isLoggedIn = ",session.isLoggedIn  )
//     // res.render("login_success");
    
//   } else {
//     // in case no account
//     console.log("HAS NO ACCOUNT")
//   }
// });


app.post('/cosciAuth', function (req, res) {
dbConnectionn.query('SELECT * FROM user WHERE Username = ? AND Password = ?',[req.body.swuID, req.body.password], 
function (error, results, fields) {
  if (results.length > 0) { // check qurey has value
    // in case has value
    if (error) throw error;
    
    session.isLoggedIn = true;
    session.firstname = results[0].Firstname;
    session.lastname = results[0].Lastname;
    session.studentID = results[0].Username;
    console.log('username is : ', results[0].Username);
    console.log('password is : ', results[0].Password);
    console.log('real name is : ', session.firstname,"",session.lastname);
    console.log("session.isLoggedIn = ",session.isLoggedIn  )
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