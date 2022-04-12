var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var usercheck = require("./middleware/logintokencheck");
var router = express.Router();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000
app.use(express.static('public'));
const dbConnectionn = require("./database");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.set("views",path.join(__dirname, '/public/views'))
app.set( "view engine", "ejs" );
app.use(
  session({
    secret: "secret",
    resave: true,
    cookie: {maxAge:60000},
    saveUninitialized: true
  })
);
 session.isLoggedIn = false;

// console.log(365*24*60*60)
 app.use(function(req,res,next){
  try{
    // console.log(req.cookies.sslg)
    if (req.cookies?.sslg) {
    res.locals.isloggedin = req.cookies.sslg.isLoggedIn 
    res.locals.firstname = req.cookies.sslg.firstname 
    res.locals.lastname = req.cookies.sslg.lastname 
    res.locals.studentID = req.cookies.sslg.studentID 
    res.locals.major = req.cookies.sslg.Major 
    res.locals.Year = req.cookies.sslg.Year 
    res.locals.status = req.cookies.sslg.status
    res.locals.imgpath = req.cookies.sslg.img 
    res.locals.gender = req.cookies.sslg.gender
    // console.log(res.locals)
    }
  next()
  }
  catch{ next() }
})

// routers
 app.use("/", require('./route/activityforstd_router'))
 app.use("/", require('./route/announce_router'))
 app.use("/", require('./route/admin_route'))


app.get("/home", (req, res) => {
  resrender("swu");
 });
// db test//
// dbConnectionn.query(`SELECT * FROM request where Status_req != "4"`,
//             function (error, results, fields) {
//                 console.log(results.length)
//         });
// end db test
 app.get("/info_activity01",usercheck.checkforstudentonly, (req, res) => {
   
          // console.log(req.cookies.sslg,"data sslg in log xxx")
          dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมบังคับ"',
          [req.cookies.sslg.username],
          function (error, results, fields) {
            // console.log(req.cookies.sslg.username,"username in log")
            var datax = results;
              res.render("info_activity01", {
                data : datax
              });
          }); 
 }); 

 app.get("/info_activity02",usercheck.checkforstudentonly, (req, res) => {
   
  dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมเลือก"',
  [req.cookies.sslg.username],
  function (error, results, fields) {
    var datax = results;
      res.render("info_activity02", {
        data : datax
      });
  }); 
}); 

app.get("/info_activity03",usercheck.checkforstudentonly, (req, res) => {
   
  dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมบำเพ็ญสาธารณประโยชน์"',
  [req.cookies.sslg.username],
  function (error, results, fields) {
    var datax = results;
      res.render("info_activity03", {
        data : datax
      });
  }); 
}); 


 app.get("/details_activity",usercheck.checkforstudentonly,(req, res) => {
    res.render("details_activity")
 });
 
 app.get("/sub_activity", usercheck.checkforstudentonly, (req, res) => {
    res.render("sub_activity")
 });
 

 app.get("/status_page",usercheck.checkforstudentonly, (req, res) => {
      dbConnectionn.query('SELECT request.idRequest,request.date_req,type_req.Detail_Type_R,status.Detail_Status FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN user ON request.Username=user.Username INNER JOIN type_req ON request.idType_req=type_req.idType_Req INNER JOIN status ON request.Status_req=status.idStatus WHERE user.Username = ?',[req.cookies.sslg.username],function (error, results, fields) {
        var datax = results;
          res.render("status_page", {
            data : datax
          });
      }); 
 }); 

 app.post('/details_submit',usercheck.checkforstudentonly, (req, res) => {
          dbConnectionn.query('SELECT request.idRequest,user.ID_Student,user.Firstname,user.Lastname,Major.name_maj,user.user_phone,event.Name_Event,event.start_Event,event.end_Event FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username INNER JOIN major ON user.Major=major.idMajor WHERE user.Username = ? AND request.idRequest = ?',[req.cookies.sslg.username,req.body.reqiD],function (error, results, fields) {
            var datax = results;
              res.render("details_submit", { 
                data :datax
              });
          }); 

});
app.get("/confirmed_activity",usercheck.checkforstudentonly,(req, res) => {
          dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมบังคับ"',
          [req.cookies.sslg.username],function (error, results, fields) {
            var datax = results;
              res.render("confirmed_activity", {
                data : datax
              });
          }); 
 }); 

 app.get("/profile", 
 usercheck.checkloginforalluser
  ,(req, res) => {
    // console.log(req.cookies.sslg)
    if (req.cookies.sslg.status == "admin"){
        console.log("go to admin profile");
        res.redirect("/admin_main")
    } else {
        res.render("userprofile")
    }   
  });
 
//     }
//   }
//  });

 app.get("/login", (req, res) => {
  if (req.cookies?.sslg){
    res.redirect("/profile");
  }else{
    res.render("cosci_login");
  }
 });

 app.get("/logout", (req,res) => {
    res.cookie('sslg', '', { maxAge: 1 });
    res.redirect("/login");
    res.end();

 });

 app.post('/getBranch', (req, res) => {
  console.log(req.body.demoFormSelected);
  if (req.body.demoFormSelected == "COSCI"){
    res.redirect("/login");
  }else if (req.body.demoFormSelected == "ENGINEER"){
    res.send("ENGINEER");
  }
});

app.get("/main",usercheck.checkforstudentonly ,(req,res) => {
     res.render("main_student");
});



app.post('/cosciAuth',  (req, res) => {
  // console.log(req.body)
dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE Username = ? AND Password = ?',[req.body.swuID, req.body.password], 
async function (error, results, fields) {
  if (results.length > 0) { 
    if (error) throw error;
    var isLoggedIn = true;
    var username = req.body.swuID;
    var firstname = results[0].Firstname;
    var lastname = results[0].Lastname;
    var studentID = results[0].ID_Student;
    var Major = results[0].name_maj;
    var subMajor = results[0].name_submaj;
    var Year = results[0].Year;
    var status = results[0].Detail_per;
    var img = results[0].img_user;
    var gender = results[0].detail_gen;
    var responsefromservice = {
      isLoggedIn,username,firstname,lastname,studentID,Major,subMajor,Year,status,img,gender
    }
    const savecookie = await res.cookie('sslg', responsefromservice, { httpOnly: true, domain : '' , maxAge: "60000"})
    res.render("login_success");
  } else {
    console.log("HAS NO ACCOUNT xxxx")
    res.render("login_fail");
  }
});
});
// console.log(getuidf());
//declare func gen uid//
function getuidf() {
  var date = new Date();
  var components = [
     date.getDate(),
     date.getMonth()+1,
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
  ];
  var id = components.join("");
  return id.toString(16);
}

//upload pic

const multer = require("multer");
const req = require("express/lib/request");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './public/img')
  },
  filename: (req, file, cb) => {
      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({ storage:storage })

app.post("/profile", upload.single('image'), (req, res) => {
  if (!req.file) {
      console.log("No file upload");
      res.render("No file upload");
  } else {
      var imgsrc = '../img/' + req.file.filename
      var insertData = ("UPDATE `User` SET `img_user`= (?) WHERE ID_Student = (?)");
      dbConnectionn.query(insertData, [imgsrc,req.cookies.sslg.studentID], (err, result) => {
          if (err) throw err
          res.redirect("/profile")
      })
  }
});
  app.listen(PORT);
  console.log("running on port " + PORT);  