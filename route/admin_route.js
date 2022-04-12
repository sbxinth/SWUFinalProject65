const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const usercheck = require('../middleware/logintokencheck')
const multer = require("multer");

router.get("/admin_main",usercheck.checkloginforalluser, async(req,res) => {
    
        var bungkublenget = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN event on event.ID_event=request.ID_event
                INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                where Status_req != "4" and Detail_type_E='กิจกรรมบังคับ'`,
                function (error, results, fields) {
                    if (error) throw error; 
                    resolve(results.length)
            });
         })
        var bungkublengetpassed = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN event on event.ID_event=request.ID_event
            INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
            where Status_req = "4" and Detail_type_E='กิจกรรมบังคับ'`,
            function (error, results, fields) {
                resolve(results.length)
        });
            })

            var leuakLeng = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN event on event.ID_event=request.ID_event
                INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                where Status_req != "4" and Detail_type_E='กิจกรรมเลือก'`,
                function (error, results, fields) {
                    resolve(results.length)
            });
                })


                var leuakLengpasss = await new Promise((resolve,reject) => {
                    dbConnectionn.query(`SELECT * FROM request 
                    INNER JOIN event on event.ID_event=request.ID_event
                    INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                    where Status_req = "4" and Detail_type_E='กิจกรรมเลือก'`,
                    function (error, results, fields) {
                        resolve(results.length)
                });
                    })


                    var bampen = await new Promise((resolve,reject) => {
                        dbConnectionn.query(`SELECT * FROM request 
                        INNER JOIN event on event.ID_event=request.ID_event
                        INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                        where Status_req != "4" and Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์'`,
                        function (error, results, fields) {
                            resolve(results.length)
                    });
                        })


                        var bampenpass = await new Promise((resolve,reject) => {
                            dbConnectionn.query(`SELECT * FROM request 
                            INNER JOIN event on event.ID_event=request.ID_event
                            INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                            where Status_req = "4" and Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์'`,
                            function (error, results, fields) {
                                resolve(results.length)
                        });
                            })
    var allrequest = bungkublenget+leuakLeng+bampen
    var dataset = {bungkublenget,bungkublengetpassed,leuakLeng,leuakLengpasss,bampen,bampenpass,allrequest}
    res.render("main_admin",{
        datax : dataset
        });  
});

module.exports = router;