var express = require('express')
const dbConnectionn = require('../database')
const usercheck = require('../middleware/logintokencheck')
const router = express.Router();


router.get('/register',(req, res) => {
    //   var regisdata =  await new Promise((resolve,rejects)=>{
    //    var {reqtype,eventtype,durationEventTime,firstdate,lastdate} = req.body
    //     dbConnectionn.query('INSERT INTO request (idRequest, Username, idType_req, ID_event,file_img,file_pdf,Status_req,hour,start_date,end_date  ) VALUE (?,?,?,?,?,?,?,?,?,?)' ,[getuidf(),req.cookies.sslg.username,reqtype,eventtype,img,pdf,"1",durationEventTime,firstdate,lastdate]
    //   ,function (error, results, fields) {
    //      if (error) throw error; 
    //      resolve(results)  //
    //      });
    //    })
  
    //    if(regisdata){
    //      console.log(regisdata)
    //      res.redirect("/login")
    //    }
    res.render("register")
});

  module.exports = router;