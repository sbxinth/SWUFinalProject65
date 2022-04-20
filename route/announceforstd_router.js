const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const usercheck = require('../middleware/logintokencheck')
const multer = require("multer");
const { resolve } = require('path');
const vary = require('vary');
const { rejects } = require('assert');


router.get("/announce_activity",usercheck.checkforstudentonly, async (req,res) => {
    var namevnt = await new Promise ((resolve,rejects)=>{
    dbConnectionn.query(`SELECT ID_event as id , Name_event as name, main_detail as main, Detail_event as detail, Posted_Event as posted, thamnail as img FROM event`
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

router.get("/sub_activity/:id",usercheck.checkforstudentonly, async (req,res) => {
    var namevnt = await new Promise ((resolve,rejects)=>{
    dbConnectionn.query(`SELECT Name_event as name, main_detail as main , Detail_event as detail, Posted_Event as posted, thamnail as img, Detail_img as dimg FROM event where ID_event=?`,[req.params.id]
    ,function(error,results,fields){
        if(error) throw error;
        resolve(results)
        });  
    }) 
    console.log(namevnt)
    res.render("sub_activity", { 
       namevnt:namevnt
    });
});

module.exports = router;