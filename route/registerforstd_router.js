var express = require('express')
const dbConnectionn = require('../database')
const usercheck = require('../middleware/logintokencheck')
const router = express.Router();


router.get('/register',usercheck.newonly,(req, res) => {
  console.log(req.body)

    res.render("register")
});
router.post('/register',(req, res) => {
  console.log(req.body)
        
      //   try {
      //     dbConnectionn.query(` INSERT INTO user (Username, Password, ID_Student, user_phone, Firstname, Lastname, gender_id, Major, Year, Permission) 
      //     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      //   `,[req.body.username,req.body.password,req.body.studentID,req.body.phone,req.body.firstname,req.body.lastname,req.body.gender,req.body.major,req.body.year,1],
      //       function (error, results, fields) {
      //         if (error) throw error
      //   });
      // } catch (err) {
      //    if (err.code === 'ER_DUP_ENTRY') {
      //        //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
      //        res.send("มีบัญชีผู้ใช้นี้อยู่แล้ว กรุณาตรวจสอบ username อีกครั้ง")
      //    } else {
      //        //handleHttpErrors(err.message);
      //        res.send("error")
      //     }
      //   // res.send("xxxx")
      // }
      
      // res.redirect("/login")


        dbConnectionn.query(` INSERT INTO user (Username, Password, ID_Student, user_phone, Firstname, Lastname, gender_id, Major, Year, Permission) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,[req.body.username,req.body.password,req.body.studentID,req.body.phone,req.body.firstname,req.body.lastname,req.body.gender,req.body.major,req.body.year,1],
            function (error, results, fields) {
              if (error){
                if (error.code == 'ER_DUP_ENTRY'){
                  res.send("มีบัญชีผู้ใช้นี้อยู่แล้ว กรุณาตรวจสอบ username อีกครั้ง")
                }else{
                  res.send("เกิดข้อผิดพลาด")
                }
              }else{
                console.log(results)
              }
              
        });
   
});

  module.exports = router;