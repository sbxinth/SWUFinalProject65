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
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd ;
  
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './public/img/act')
  },
  filename: (req, file, cb) => {
      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({ storage:storage })

router.get("/main_admin",usercheck.checkloginforalluser,mwupdatereq.updatereq ,async(req,res) => {
    
        var bungkublenget = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN type_req on request.idType_req=type_req.idType_Req
                inner join event on event.ID_event=request.ID_event
                inner join type_event on type_event.idType_Event=event.idType_Event
                where Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='บันทึกกิจกรรม'`,
                function (error, results, fields) {
                    if (error) throw error; 
                    resolve(results.length)
            });
         })
        var bungkublengetpassed = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN type_req on request.idType_req=type_req.idType_Req
            inner join event on event.ID_event=request.ID_event
            inner join type_event on type_event.idType_Event=event.idType_Event
            where Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='ตกหล่น'`,
            function (error, results, fields) {
                resolve(results.length)
        });
            })

        var leuakLeng = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN type_req on request.idType_req=type_req.idType_Req
                inner join event on event.ID_event=request.ID_event
                inner join type_event on type_event.idType_Event=event.idType_Event
                where Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='บันทึกกิจกรรม'`,
                function (error, results, fields) {
                    resolve(results.length)
            });
        })


        var leuakLengpasss = await new Promise((resolve,reject) => {
                    dbConnectionn.query(`SELECT * FROM request 
                    INNER JOIN type_req on request.idType_req=type_req.idType_Req
                    inner join event on event.ID_event=request.ID_event
                    inner join type_event on type_event.idType_Event=event.idType_Event
                    where Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='ตกหล่น'`,
                    function (error, results, fields) {
                        resolve(results.length)
                });
        })


        var bampen = await new Promise((resolve,reject) => {
                        dbConnectionn.query(`SELECT * FROM request 
                        INNER JOIN type_req on request.idType_req=type_req.idType_Req
                        inner join event on event.ID_event=request.ID_event
                        inner join type_event on type_event.idType_Event=event.idType_Event
                        where Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='บันทึกกิจกรรม'`,
                        function (error, results, fields) {
                            resolve(results.length)
                    });
        })


        var bampenpass = await new Promise((resolve,reject) => {
                            dbConnectionn.query(`SELECT * FROM request 
                            INNER JOIN type_req on request.idType_req=type_req.idType_Req
                            inner join event on event.ID_event=request.ID_event
                            inner join type_event on type_event.idType_Event=event.idType_Event
                            where Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='ตกหล่น'`,
                            function (error, results, fields) {
                                resolve(results.length)
                        });
        })


        var eventnow = await new Promise((resolve,reject) => {
                            dbConnectionn.query(`SELECT * FROM event;`,
                            function (error, results, fields) {
                                resolve(results.length)
                        });
        })

    var allrequest = bungkublenget+leuakLeng+bampen
    var tokloan = bungkublengetpassed+leuakLengpasss+bampenpass
    var dataset = {bungkublenget,bungkublengetpassed,leuakLeng,leuakLengpasss,bampen,bampenpass,allrequest,tokloan,eventnow}
    const savecookie = await res.cookie('amrq', dataset, { httpOnly: true, domain : '' , maxAge: 365*24*60*60})
    res.render("main_admin",{
        datax : dataset
        });  
});
router.get("/activity_admin",usercheck.checkloginforalluser,mwupdatereq.updatereq ,async(req,res) => {

    res.render("activity_admin");  

});
// db test//
// dbConnectionn.query(`SELECT Name_Event,Detail_Event FROM event;`,
//             function (error, results, fields) {
//                 console.log(results)
//         });
// end db test
router.get("/control_announcement",usercheck.checkloginforalluser,async(req,res) => {
    var datax = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT ID_event,Name_Event,Detail_Event,Detail_Img FROM event;`,
            function (error, results, fields) {
                resolve(results)
        });
    });
    console.log(datax.length)
    res.render("control_announcement",{
        datax : datax
    });  

});
router.get("/sub_request_general",usercheck.checkloginforalluser,(req,res) => {

    res.render("sub_request_general");  

});
router.get("/sub_request_omit",usercheck.checkloginforalluser,(req,res) => {

    res.render("sub_request_omit");  

});
router.get("/add_announcement",usercheck.checkloginforalluser,(req,res) => {

    res.render("add_announcement");  

});
router.post("/edit_announcement",usercheck.checkloginforalluser,(req,res) => {
    console.log(req.body)
    res.render("edit_announcement",{

    });
});

// console.log(today);

router.post("/add_announcement",usercheck.checkloginforalluser,upload.single('image'),async(req,res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = '../img/act/' + req.file.filename
        console.log("hit submit",req.body)
        // var
        var sqlx = 'INSERT INTO event (ID_event, Name_Event, Detail_Event, start_Event, end_Event, Posted_Event, idType_Event, thamnail, Detail_Img, school_year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

            await new Promise((resolve,rejects)=>{
            dbConnectionn.query(sqlx,[getuidf(), req.body.event_name , req.body.detailFull , req.body.start_date , req.body.end_date, today , req.body.eventtype , imgsrc , imgsrc , yyyy+543],
                    function (error, results, fields) {
                        if (error) throw error
                        resolve(results)
                });
        res.redirect("/control_announcement")
        }) 
        
    }
});
router.get("/review_announcement",usercheck.checkloginforalluser,(req,res) => {

    res.render("review_announcement");  

});
router.get("/edit_announcement/:eventID",usercheck.checkloginforalluser,(req,res) => {
    console.log(req.params.eventID)
    // res.render("edit_announcement");  

});
// app.get('/p/:tagId', function(req, res) {
//   res.send("tagId is set to " + req.params.tagId);
// });


module.exports = router;