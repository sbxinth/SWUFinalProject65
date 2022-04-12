const dbConnectionn = require("../database");
var session = require("express-session");

module.exports.checklogin = async (req, res, next) => {    
  try{
      if (!req.cookies?.sslg.isLoggedIn){
          res.redirect("/login");
      }else if (req.cookies?.sslg.status != "student") {
          throw 'std'
          // return 'std'
      } 
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE ID_Student = ? '
      ,[req.cookies.sslg.studentID],
     async function (error, results, fields) {
        // console.log(results[0]);
        if (results.length > 0) { // check qurey has value
          // in case has value
          var isLoggedIn = true;
          var username = results[0].Username;
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
      const savecookie = await res.cookie('sslg', responsefromservice, { httpOnly: true, domain : '' , maxAge: "1h"})
          return next()
          
        } else {
          // incase no data 
          console.log("HAS no user data");
          res.redirect("/login");
        
        }
      });
  }
  catch (error) {
      // res.send(error)
      res.redirect('/logout')
      console.log(`Something went wrong with : logintokencheck ` ,error);
  }
  // res.status(response.status).send(response)

}

module.exports.checkloginforalluser = async (req, res, next) => {    
  try{
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE ID_Student = ? '
      ,[req.cookies.sslg.studentID],
     async function (error, results, fields) {
        if (results.length > 0) { // check qurey has value
          var isLoggedIn = true;
          var username = results[0].Username;
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
          const savecookie = await res.cookie('sslg', responsefromservice, { httpOnly: true, domain : '' , maxAge: 365*24*60*60})
          return next()
          
        } else {
          // incase no data 
          console.log("HAS no user data");
          res.redirect("/login");
        
        }
      });
  }
  catch (error) {
      // res.send(error)
      res.redirect('/login')
      console.log(`Something went wrong with : checkloginforalluser ` ,error);
  }

  // res.status(response.status).send(response)

}

module.exports.checkforstudentonly = async (req, res, next) => {    
  try{
    if (req.cookies.sslg.status != "student") { 
      return res.send("คุณไม่มีสิทธิ์เข้าถึงหน้าเว็ปนี้")
    }
    // console.log(req.cookies.sslg,"in checkforstudentonly");
      dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE ID_Student = ? '
      ,[req.cookies.sslg.studentID],
     async function (error, results, fields) {
        // console.log(results[0]);
        if (results.length > 0) { // check qurey has value
          // in case has value
          var isLoggedIn = true;
          var username = results[0].Username;
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
          return next()
          
        } else {
          // incase no data 
          console.log("HAS no user data");
          res.redirect("/login");
        
        }
      });
      
  }
  catch (error) {
      // res.send(error)
      res.redirect('/login')
      console.log(`Something went wrong with : checkforstudentonly ` ,error);
  }
  // res.status(response.status).send(response)

}
