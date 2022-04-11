const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const checklogin = require('../middleware/logintokencheck')
const multer = require("multer");
const { resolve } = require('path');

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

var storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/imgedi')
  },
  filename: (req, file, cb) => {
      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload2 = multer({ storage:storage2})

router.use(function(req,res,next){
  try{
    res.locals.isloggedin = session.isLoggedIn 
    res.locals.firstname = session.firstname 
    res.locals.lastname = session.lastname 
    res.locals.studentID = session.studentID 
    res.locals.major = session.Major 
    res.locals.Year = session.Year 
    res.locals.status = session.status
    res.locals.imgpath = session.img 
    res.locals.gender = session.gender
  next()
  }
  catch{ next() }
})

router.get("/add_activity",
checklogin.checklogin,
async (request, response,) => {
  
var dataAc =  await new Promise((resolve,rejects)=>{
 dbConnectionn.query('SELECT ID_event as id , Name_Event as name FROM event' ,function (error, results, fields) {
  if (error) throw error; 
  resolve(results) 
  });
})

var reqtype =  await new Promise((resolve,rejects)=>{
  dbConnectionn.query('SELECT `idType_Req` as id , `Detail_Type_R`as name FROM `type_req` ' ,function (error, results, fields) {
    if (error) throw error; 
    resolve(results) 
    });
}) 
console.log(dataAc)
console.log(reqtype)
// session.dataACtiv = results;
response.render("add_activity", { 
dataAC : dataAc,
reqtype : reqtype
});

});

router.post('/add_activity',upload2.any(), async (req, res) => {
  try {
    if(!req.files.length){
      throw "กรุณาลองใหม่อีกครั้ง"
    }
    var img = req.files.map(function(file) {
      return '../imgedi/' + file.filename; // or file.originalname
    }) 
   
    let pdf = img.pop();  // pop last file from img to collected in pdf 
    img = img.join(',')   // connected array to string

    console.log(req.body,"req.body");
    console.log(img.length,"lenght");
    console.log(img,"img")
    console.log(pdf,"pdf")


    console.log(req.files,"req.file");

    var statereq =  await new Promise((resolve,rejects)=>{
     var {reqtype,eventtype,durationEventTime,firstdate,lastdate} = req.body
      dbConnectionn.query('INSERT INTO request (idRequest, Username, idType_req, ID_event,file_img,file_pdf,Status_req,hour,start_date,end_date  ) VALUE (?,?,?,?,?,?,?,?,?,?)' ,[getuidf(),session.studentID,reqtype,eventtype,img,pdf,"1",durationEventTime,firstdate,lastdate]
    ,function (error, results, fields) {
       if (error) throw error; 
       resolve(results)  //
       });
     })

     if(statereq){
       console.log(statereq)
     }

  } catch (error) {
    console.log(error) 
  }
});

module.exports = router;

