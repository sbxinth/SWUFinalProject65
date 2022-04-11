const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const checklogin = require('../middleware/logintokencheck');
const res = require('express/lib/response');

router.get("/status_page",checklogin.checklogin,(request,response)=>{
try {
    if (session.status == "student") {
        dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission WHERE ID_Student = ?',[session.studentID],function (error, results, fields) {
           if (results.length > 0) { 
              if (error) throw error;
              // db connect read request 
              session.img = results[0].img_user;
            dbConnectionn.query('SELECT request.idRequest,request.date_req,type_req.Detail_Type_R,status.Detail_Status FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN user ON request.Username=user.Username INNER JOIN type_req ON request.idType_req=type_req.idType_Req INNER JOIN status ON request.Status_req=status.idStatus WHERE user.Username = ?',[session.username],function (error, results, fields) {
              session.datax = results;
              // console.log("datax = ",session.datax, "username = ",session.username )
                response.render("status_page", { 
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
        response.send("u r not student")
      } 
    } catch (error) {
        // res.redirect('/logout')
        console.log(`Something went wrong with : checkstatus ` ,error);
}
});


module.exports = router;