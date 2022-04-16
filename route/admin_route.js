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
        // dbConnectionn.query(`SELECT * FROM thesisz.request
        // inner join event on event.ID_event=request.ID_event
        // inner join type_event on type_event.idType_Event=event.idType_Event
        // inner join type_req on type_req.idType_Req=request.idType_req 
        // inner join user on request.Username=user.Username
        // where type_event.Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='บันทึกกิจกรรม'`,
        //     function (error, results, fields) {
        //         console.log(results)
        // });
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
    var dataxsave = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='บันทึกกิจกรรม'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
    var dataxtokloan = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='ตกหล่น'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
        
    res.render("activity_admin",{
        dataxsave : dataxsave,
        dataxtokloan : dataxtokloan
    });  

});
router.get("/activity_admin02",usercheck.checkloginforalluser,mwupdatereq.updatereq ,async(req,res) => {

    var dataxsave = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='บันทึกกิจกรรม'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
    var daatxsave2 = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='ตกหล่น'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
        
    res.render("activity_admin02",{
        dataxsave : dataxsave,
        daatxsave2 : daatxsave2
    });

});
router.get("/activity_admin03",usercheck.checkloginforalluser,mwupdatereq.updatereq ,async(req,res) => {

    var dataxsave = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='บันทึกกิจกรรม'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
    var daatxsave2 = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where type_event.Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='ตกหล่น'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
        
    res.render("activity_admin03",{
        dataxsave : dataxsave,
        daatxsave2 : daatxsave2
    });
});
router.get("/sub_request_general/:idEvent",usercheck.checkloginforalluser,(req,res) => {
    console.log(req.params.idEvent)
    res.render("sub_request_general");  

});
router.get("/sub_request_omit",usercheck.checkloginforalluser,(req,res) => {

    res.render("sub_request_omit");  

});


module.exports = router;