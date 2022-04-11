const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const checklogin = require('../middleware/logintokencheck')
const multer = require("multer");
const { resolve } = require('path');
const vary = require('vary');
const { rejects } = require('assert');


router.get("/announce_activity"
,checklogin.checklogin
, async (req,res) => {
    var namevnt = await new Promise ((resolve,rejects)=>{
    dbConnectionn.query(`SELECT Name_event as name, Detail_event as detail, Posted_Event as posted, thamnail as img FROM event`
    ,function(error,results,fields){
        if(error) throw error;
        resolve(results)
        });  
    }) 
    console.log(namevnt)
    //
    res.render("announce_activity", { 
       namevnt:namevnt
    });
});

module.exports = router;