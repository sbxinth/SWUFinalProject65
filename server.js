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
const { render } = require("express/lib/response");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//  test get req 1
// var url = require('url');
// var fs = require('fs');
// var http = require('http');
// var adr = 'http://127.0.0.1:3000/details_submit/?rqt=request&code=2568';
// var q = url.parse(adr, true);

// // console.log(q,"detail");
// var datqeu=q.query;
// // console.log(datqeu.rqt,"query");
// if (datqeu.rqt == "request") {
//     // console.log("xxxxxxxxxxxxxxxxxxxxx");
// }

// app.get("/test",async(req, res) => {
// try{
//   console.log("0");
//   throw new Error("textok")
//   await new Promise((resolve,rejects)=>{
//         console.log("1");
//         resolve()
//      });

//   console.log("2")

//   await new Promise((resolve,rejects)=>{
//        console.log("3");
//        rejects("test");
//         });

//   console.log("4");

// }  catch (err){
//   console.log(err.name)
// }
// });

// test get req2
// const savecookie = await res.cookie('jwt', responsefromservice, { httpOnly: true, domain : '' , maxAge: process.env.COOKIES_SINGIN_EXPIRE})
//

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




// routers
 app.use("/", require('./route/activityforstd_router'))
 app.use("/", require('./route/announce_router'))

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
app.get("/home", (req, res) => {
  resrender("swu");
 });



// db Test //
// dbConnectionn.query('SELECT Name_Event FROM event' ,function (error, results, fields) {
//   // if (results.length > 0) { // check qurey has value
//     if (error) throw error;
//     console.log(results)
//   // } else {
//   //   console.log("HAS NO data")
//   // }
// });

 app.get("/info_activity01",usercheck.checkloginforalluser, (req, res) => {
   
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
 app.get("/info_activity02", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
            // db connect read request 
            session.img = results[0].img_user;
          dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมเลือก"',[session.username],function (error, results, fields) {
            session.datax = results;
            // console.log("datax = ",session.datax, "username = ",session.username )
              res.render("info_activity02", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img,
                data : session.datax
              });
          }); 
          // end read request
              
          } else {
             console.log("HAS NO data")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 }); 
 app.get("/info_activity03", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
            // db connect read request 
            session.img = results[0].img_user;
          dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมบำเพ็ญสาธารณประโยชน์"',[session.username],function (error, results, fields) {
            session.datax = results;
            // console.log("datax = ",session.datax, "username = ",session.username )
              res.render("info_activity03", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img,
                data : session.datax
              });
          }); 
          // end read request
              
          } else {
             console.log("HAS NO data")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 }); 

////////////// announnce_act
 
//  app.get("/announce_activity", (req, res) => {
//   if (!session.isLoggedIn){
//     res.render("cosci_login");
//   }else{
//     if (session.status == "student") {
//       dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
//         function (error, results, fields) {
//          if (results.length > 0) { 
//             if (error) throw error;
//               session.img = results[0].img_user;
//               res.render("announce_activity", { 
//                 isloggedin : session.isLoggedIn ,
//                 firstname : session.firstname ,
//                 lastname : session.lastname ,
//                 studentID : session.studentID ,
//                 major : session.Major ,
//                 Year : session.Year ,
//                 status : session.status,
//                 imgpath : session.img 
//               });
//           } else {
//              console.log("HAS NO ACCOUNT")
//           }
//         });
//     } else {
//       res.send("u r not student")
//     } // if perm student // admin
//   } // if session login
//  });

 app.get("/details_activity", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
              session.img = results[0].img_user;
              res.render("details_activity", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img 
              });
          } else {
             console.log("HAS NO ACCOUNT")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 });
 
 app.get("/sub_activity", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
              session.img = results[0].img_user;
              res.render("sub_activity", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img 
              });
          } else {
             console.log("HAS NO ACCOUNT")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 });
 

 app.get("/status_page", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
            // db connect read request 
            session.img = results[0].img_user;
          dbConnectionn.query('SELECT request.idRequest,request.date_req,type_req.Detail_Type_R,status.Detail_Status FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN user ON request.Username=user.Username INNER JOIN type_req ON request.idType_req=type_req.idType_Req INNER JOIN status ON request.Status_req=status.idStatus WHERE user.Username = ?',[session.username],function (error, results, fields) {
            session.datax = results;
            // console.log("datax = ",session.datax, "username = ",session.username )
              res.render("status_page", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img,
                data : session.datax
              });
          }); 
          // end read request
              
          } else {
             console.log("HAS NO data")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 }); 
//  app.get("/details_submit", (req, res) => {
//   if (!session.isLoggedIn){
//     res.render("cosci_login");
//   }else{
//     if (session.status == "student") {
//       dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
//         function (error, results, fields) {
//          if (results.length > 0) { 
//             if (error) throw error;
//               session.img = results[0].img_user;
//               res.render("details_submit", { 
//                 isloggedin : session.isLoggedIn ,
//                 firstname : session.firstname ,
//                 lastname : session.lastname ,
//                 studentID : session.studentID ,
//                 major : session.Major ,
//                 Year : session.Year ,
//                 status : session.status,
//                 imgpath : session.img 
//               });
//           } else {
//              console.log("HAS NO ACCOUNT")
//           }
//         });
//     } else {
//       res.send("u r not student")
//     } // if perm student // admin
//   } // if session login
//  });

 app.post('/details_submit', (req, res) => {
  console.log(req.body.reqiD,"reqID");
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
            // db connect read request 
            session.img = results[0].img_user;
          dbConnectionn.query('SELECT request.idRequest,user.ID_Student,user.Firstname,user.Lastname,Major.name_maj,user.user_phone,event.Name_Event,event.start_Event,event.end_Event FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username INNER JOIN major ON user.Major=major.idMajor WHERE user.Username = ? AND request.idRequest = ?',[session.username,req.body.reqiD],function (error, results, fields) {
            session.datax = results;
            console.log("datax = ",session.datax)
              res.render("details_submit", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img,
                data : session.datax,
                gender : session.gender
              });
          }); 
          // end read request
              
          } else {
             console.log("HAS NO data")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
  
});

app.get("/confirmed_activity", (req, res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
            // db connect read request 
            session.img = results[0].img_user;
          dbConnectionn.query('SELECT request.idRequest,user.Firstname,event.ID_event,event.school_year,event.Name_Event,event.start_Event,event.end_Event,type_event.Detail_type_E FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username WHERE user.Username = ? AND type_event.Detail_type_E = "กิจกรรมบังคับ"',[session.username],function (error, results, fields) {
            session.datax = results;
           
            // console.log("datax = ",session.datax, "username = ",session.username )
              res.render("confirmed_activity", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img,
                data : session.datax
              });
          }); 
          // end read request
              
          } else {
             console.log("HAS NO data")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
 }); 

 app.get("/profile", 
 usercheck.checkloginforalluser
  ,(req, res) => {
    // console.log(req.cookies.sslg)
    if (session.status == "admin"){
        console.log("go to admin profile");
        res.render("main_admin")
    } else {
        res.render("userprofile")
    }   
  });
 
//     }
//   }
//  });

 app.get("/login", (req, res) => {
  // console.log(session.isLoggedIn,"in /login");
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "admin"){
      console.log("go to admin profile");
      res.render("main_admin", { 
        isloggedin : session.isLoggedIn ,
        firstname : session.firstname ,
        lastname : session.lastname ,
        studentID : session.studentID ,
        major : session.Major ,
        Year : session.Year ,
        status : session.status,
        imgpath : session.img 
      });
    } else {
      console.log("go to student profile");
      resrender("userprofile", { 
        isloggedin : session.isLoggedIn ,
        firstname : session.firstname ,
        lastname : session.lastname ,
        studentID : session.studentID ,
        major : session.Major ,
        Year : session.Year ,
        status : session.status,
        imgpath : session.img 
      });
    }
    
  }
 });

 app.get("/logout", (req,res) => {
  req.session.destroy(function (err) {
    session.isLoggedIn = false;
    res.redirect("/login");
    res.end();
});
 });

 app.post('/getBranch', (req, res) => {
  console.log(req.body.demoFormSelected);
  if (req.body.demoFormSelected == "COSCI"){
    res.redirect("/login");
  }else if (req.body.demoFormSelected == "ENGINEER"){
    res.send("ENGINEER");
  }
});

app.get("/main", (req,res) => {
  if (!session.isLoggedIn){
    res.render("cosci_login");
  }else{
    if (session.status == "student") {
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ? ',[session.studentID], 
        function (error, results, fields) {
         if (results.length > 0) { 
            if (error) throw error;
              session.img = results[0].img_user;
              res.render("main_student", { 
                isloggedin : session.isLoggedIn ,
                firstname : session.firstname ,
                lastname : session.lastname ,
                studentID : session.studentID ,
                major : session.Major ,
                Year : session.Year ,
                status : session.status,
                imgpath : session.img 
              });
          } else {
             console.log("HAS NO ACCOUNT")
          }
        });
    } else {
      res.send("u r not student")
    } // if perm student // admin
  } // if session login
});



app.post('/cosciAuth',  (req, res) => {
dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE Username = ? AND Password = ?',[req.body.swuID, req.body.password], 
async function (error, results, fields) {
  
  // console.log(results[0]);
  if (results.length > 0) { // check qurey has value
    // in case has value
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
    // in case no account
    console.log("HAS NO ACCOUNT xxxx")
    res.render("login_fail");
  }
});
});

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
      // console.log(req.file.filename)
      var imgsrc = '../img/' + req.file.filename
      var insertData = ("UPDATE `User` SET `img_user`= (?) WHERE ID_Student = (?)");
      // console.log(session.studentID);
      dbConnectionn.query(insertData, [imgsrc,session.studentID], (err, result) => {
          if (err) throw err
          // console.log("file uploaded")
          // console.log(req.file)
          // console.log("upload successful")
          res.redirect("/profile")
          // console.log(session.imgpath)
      })
  }
});


// end gen func

  app.listen(PORT);
  console.log("running on port " + PORT);  