const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const usercheck = require('../middleware/logintokencheck')
const mwupdatereq = require('../middleware/update_rq')
const multer = require("multer");
const { resolve } = require('path');
const { rejects, throws } = require('assert');
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
        // dbConnectionn.query(`SELECT request.idRequest,type_req.Detail_Type_R,user.ID_Student,major.name_maj,user.Firstname,user.Lastname,user.user_phone,event.Name_Event,request.start_date,request.end_date,request.hour,request.Status_req,status.Detail_Status FROM request
        // inner join user on request.Username=user.Username
        // inner join major on user.Major=major.idMajor
        // inner join event on request.ID_event=event.ID_event
        // inner join type_req on request.idType_req=type_req.idType_Req
        // inner join status on status.idStatus=request.Status_req where request.idRequest='154202233349609'`,
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
        where type_event.Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='บันทึกกิจกรรม' and request.Status_req != '4'`,
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
        where type_event.Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='ตกหล่น' and request.Status_req != '4'`,
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
        where type_event.Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='บันทึกกิจกรรม' and request.Status_req != '4'`,
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
        where type_event.Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='ตกหล่น' and request.Status_req != '4'`,
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
        where type_event.Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='บันทึกกิจกรรม' and request.Status_req != '4'`,
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
        where type_event.Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='ตกหล่น' and request.Status_req != '4'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
        
    res.render("activity_admin03",{
        dataxsave : dataxsave,
        daatxsave2 : daatxsave2
    });
});
router.get("/activity_admin04",usercheck.checkloginforalluser,mwupdatereq.updatereq ,async(req,res) => {

    var dataxsave = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT * FROM thesisz.request
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        inner join type_req on type_req.idType_Req=request.idType_req 
        inner join user on request.Username=user.Username
        where request.Status_req = '4' and Detail_Type_R='บันทึกกิจกรรม'`,
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
        where  request.Status_req = '4' and Detail_Type_R='ตกหล่น'`,
        function (error, results, fields) {
            resolve(results)
    });
    })
        
    res.render("activity_admin04",{
        dataxsave : dataxsave,
        daatxsave2 : daatxsave2
    });
});
router.get("/sub_request_general/:requestID",usercheck.checkloginforalluser,async(req,res) => {
    // console.log(req.params.requestID)

   

        var datax = await new Promise((resolve,rejects)=>{
            dbConnectionn.query(`SELECT request.idRequest,type_req.Detail_Type_R,user.ID_Student,major.name_maj,user.Firstname,user.Lastname,user.user_phone,event.Name_Event,request.start_date,request.end_date,request.hour,request.Status_req,status.Detail_Status FROM request
            inner join user on request.Username=user.Username
            inner join major on user.Major=major.idMajor
            inner join event on request.ID_event=event.ID_event
            inner join type_req on request.idType_req=type_req.idType_Req
            inner join status on status.idStatus=request.Status_req where request.idRequest=?`,[req.params.requestID],
             function (error, results, fields) {
                results[0].start_date = formatDateToString(results[0].start_date)
                results[0].end_date = formatDateToString(results[0].end_date)
                resolve(results)
            });
        })


            res.render("sub_request_general",{
                datax : datax
            });  

});
// router.post("/sub_request_general",usercheck.checkloginforalluser,(req,res) => {
//     console.log(req.body)
//     console.log("in post sub_request_general")
   

        
//             // dbConnectionn.query(` `,
//             //  function (error, results, fields) {
                 
//             //  });
//             res.send(req.body)

//             // res.redirect("/sub_request_general");  

// });
router.post("/sub_request_general/status_update",usercheck.checkloginforalluser, async (req,res) => {
    // console.log(req.body)
    // console.log("in post sub_request_general")
      await dbConnectionn.query(`UPDATE thesisz.request SET Status_req = ? WHERE (idRequest = ?);
        `,[req.body.Status_req,req.body.idRequest],
            function (error, results, fields) {
                if (error) throw error
                // console.log(results)
        });
            res.redirect("/sub_request_general/"+req.body.idRequest)

});
router.get("/sub_request_omit/:idRequest",usercheck.checkloginforalluser,async(req,res) => {
    console.log(req.params.idRequest)
    var datax = await new Promise((resolve,rejects)=>{
        dbConnectionn.query(`SELECT request.idRequest,type_req.Detail_Type_R,user.ID_Student,major.name_maj,user.Firstname,user.Lastname,user.user_phone,event.Name_Event,request.start_date,request.end_date,request.hour,request.Status_req,status.Detail_Status FROM request
        inner join user on request.Username=user.Username
        inner join major on user.Major=major.idMajor
        inner join event on request.ID_event=event.ID_event
        inner join type_req on request.idType_req=type_req.idType_Req
        inner join status on status.idStatus=request.Status_req where request.idRequest= ? `,[req.params.idRequest],
         function (error, results, fields) {
             if (error) throw error
            //  console.log(results,"resukt xx")
            //  console.log(results[0].start_date,"results[0].start_date")
            results[0].start_date = formatDateToString(results[0].start_date)
            results[0].end_date = formatDateToString(results[0].end_date)
            resolve(results)
        });
    })


        res.render("sub_request_omit",{
            datax : datax
        });  

});
router.post("/print_page",usercheck.checkloginforalluser,(req,res)=>{
    // console.log(req.body,"xxxx")

})
router.post("/update_tl",usercheck.checkloginforalluser,async(req,res)=>{
    // console.log(req.body)
    await dbConnectionn.query(`UPDATE thesisz.request SET Status_req = ? WHERE (idRequest = ?); `,
    [req.body.Status_req,req.body.idRequest],
        function (error, results, fields) {
            if (error) throw error
            // console.log(results)
    });
       res.redirect("/sub_request_omit/"+req.body.idRequest)
    //  

})
// router


module.exports = router;