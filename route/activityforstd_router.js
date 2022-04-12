const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const usercheck = require('../middleware/logintokencheck')
const multer = require("multer");

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



router.get("/add_activity",
usercheck.checkforstudentonly,
async (req, res) => {
  console.log(req.cookies.sslg,"in get /add ac")
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

console.log(req.cookies.sslg,"in before render")
res.render("add_activity", { 
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
     var uidg=getuidf();
     console.log(uidg,req.cookies.sslg.studentID,reqtype,eventtype,img,pdf,"1",durationEventTime,firstdate,lastdate,"uidg,req.cookies.sslg.studentID,reqtype,eventtype,img,pdf,1,durationEventTime,firstdate,lastdate");
      dbConnectionn.query('INSERT INTO request (idRequest, Username, idType_req, ID_event,file_img,file_pdf,Status_req,hour,start_date,end_date  ) VALUE (?,?,?,?,?,?,?,?,?,?)' ,[uidg,req.cookies.sslg.username,reqtype,eventtype,img,pdf,"1",durationEventTime,firstdate,lastdate]
    ,function (error, results, fields) {
       if (error) throw error; 
       resolve(results)  //
       });
     })

     if(statereq){
       console.log(statereq)
       res.redirect("/status_page")
     }

  } catch (error) {
    console.log(error) 
  }
});

module.exports = router;

