const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const usercheck = require('../middleware/logintokencheck')
const mwupdatereq = require('../middleware/update_rq')
const multer = require("multer");
const { resolve } = require('path');
const { rejects } = require('assert');
const req = require("express/lib/request");
const { DATE } = require('mysql/lib/protocol/constants/types');

function getuidf() {
    var date = new Date();
    var components = [
       date.getDate(),
       date.getMonth()+1,
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
    var id = components.join("");
    return id.toString(16);
  }

  var today = new Date();
  var now = new Date();
  
//   console.log(today)
//   console.log(today.toUTCString())
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd ;
  function formatDateToString(date){
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    return ( yyyy + "-" + MM + "-" + dd);
 }

// db test//
// dbConnectionn.query('SELECT event.*,type_event.Detail_type_E FROM event inner join type_event on type_event.idType_Event=event.idType_Event  where ID_event=?',["1342022211640"],function(error,results,fields){
//     if (error) throw error // resolve(res.send(results))
//      results[0].start_Event = formatDateToString(results[0].start_Event).toString()
//      results[0].end_Event = formatDateToString(results[0].end_Event).toString()
//      console.log(results)
//     //  resolve(results)
//  })
// end db test
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './public/img/act')
  },
  filename: (req, file, cb) => {
      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({ storage:storage })



router.get("/control_announcement",usercheck.checkloginforalluser,async(req,res) => {
    var datax = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT ID_event,Name_Event,Detail_Event,Detail_Img FROM event;`,
            function (error, results, fields) {
                resolve(results)
        });
    });
    // console.log(datax.length)
    res.render("control_announcement",{
        datax : datax
    });  

});


router.get("/add_announcement",usercheck.checkloginforalluser,(req,res) => {

    res.render("add_announcement");  

});
router.post("/edit_announcement",usercheck.checkloginforalluser,upload.single("image"),(req,res) => {
    if(!req.file){
        console.log(req.body)
        console.log(req.body)
        // UPDATE `thesisz`.`event` SET `ID_event` = '12', `Name_Event` = '12', `Detail_Event` = '12', `start_Event` = '2', `end_Event` = '2', `Posted_Event` = '2', `idType_Event` = '2', `thamnail` = '2', `Detail_Img` = '2', `school_year` = '2' WHERE (`ID_event` = '1');
        dbConnectionn.query("UPDATE event SET  Name_Event = ?, Detail_Event = ?, start_Event = ?, end_Event = ?, idType_Event = ?, school_year = ? WHERE (ID_event = ?)",
        [req.body.eventName,req.body.event_detail,req.body.startEventdate,req.body.endEventdate,req.body.eventtype,now.getFullYear()+543,req.body.eventID],
                function (error, results, fields) {  
                    res.redirect("/control_announcement")  
            });
    }else{
        console.log(req.body)
        var imgsrc = '../img/act/' + req.file.filename
        console.log(imgsrc)
        console.log(req.body)
        // UPDATE `thesisz`.`event` SET `ID_event` = '12', `Name_Event` = '12', `Detail_Event` = '12', `start_Event` = '2', `end_Event` = '2', `Posted_Event` = '2', `idType_Event` = '2', `thamnail` = '2', `Detail_Img` = '2', `school_year` = '2' WHERE (`ID_event` = '1');
        dbConnectionn.query("UPDATE event SET  Name_Event = ?, Detail_Event = ?, start_Event = ?, end_Event = ?, idType_Event = ?, thamnail = ?, Detail_Img = ?, school_year = ? WHERE (ID_event = ?)",
        [req.body.eventName,req.body.event_detail,req.body.startEventdate,req.body.endEventdate,req.body.eventtype,imgsrc,imgsrc,now.getFullYear()+543,req.body.eventID],
                function (error, results, fields) {  
                    res.redirect("/control_announcement")  
            });
    }
});
// console.log(today);
router.get("/edit_announcement/:eventID",usercheck.checkloginforalluser,async(req,res) => {
    console.log(req.params.eventID)
    var datax = await new Promise((resolve,rejects)=>{
        dbConnectionn.query('SELECT event.*,type_event.Detail_type_E FROM event inner join type_event on type_event.idType_Event=event.idType_Event  where ID_event=?',[req.params.eventID],function(error,results,fields){
           if (error) throw error // resolve(res.send(results))
            results[0].start_Event = formatDateToString(results[0].start_Event).toString()
            results[0].end_Event = formatDateToString(results[0].end_Event).toString()
            console.log(results)
            resolve(results)
        })
    })
    res.render("edit_announcement",{
        datax : datax
    })

});

router.post("/add_announcement",usercheck.checkloginforalluser,upload.single('image'),async(req,res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = '../img/act/' + req.file.filename
        console.log("hit submit",req.body)
        // var
        var sqlx = 'INSERT INTO event (ID_event, Name_Event, Detail_Event, start_Event, end_Event, Posted_Event, idType_Event, thamnail, Detail_Img, school_year,main_detail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)'

            await new Promise((resolve,rejects)=>{
            dbConnectionn.query(sqlx,[getuidf(), req.body.event_name , req.body.detailFull , req.body.start_date , req.body.end_date, today , req.body.eventtype , imgsrc , imgsrc , yyyy+543,req.body.detail],
                    function (error, results, fields) {
                        if (error) throw error
                        resolve(results)
                });
                res.redirect("/control_announcement")
        
        }) 
        
    }
});
router.get("/review_announcement/:eventID",usercheck.checkloginforalluser,async(req,res) => {
    var datax = await new Promise((resolve,rejects)=>{
        dbConnectionn.query('SELECT event.*,type_event.Detail_type_E FROM event inner join type_event on type_event.idType_Event=event.idType_Event  where ID_event=?',[req.params.eventID],function(error,results,fields){
           if (error) throw error // resolve(res.send(results))
            results[0].start_Event = formatDateToString(results[0].start_Event).toString()
            results[0].end_Event = formatDateToString(results[0].end_Event).toString()
            console.log(results)
            resolve(results)
        })
    })
    res.render("review_announcement",{
        datax : datax
    })

});
router.post("/delete_event/:eventID",usercheck.checkloginforalluser,(req,res) => {
    console.log(req.params.eventID)
    
    // DELETE FROM event WHERE (ID_event = '1342022223911');
    dbConnectionn.query(`DELETE FROM event WHERE (ID_event = ?)`,[req.params.eventID],
            function (error, results, fields) {
                console.log(results)
                 res.redirect("/control_announcement")
               });
});

module.exports = router;