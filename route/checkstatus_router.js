const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const checklogin = require('../middleware/logintokencheck');
const res = require('express/lib/response');


router.get("/status_page",checklogin.checkforstudentonly, (req, res) => {
  dbConnectionn.query('SELECT request.idRequest,request.date_req,type_req.Detail_Type_R,status.Detail_Status FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN user ON request.Username=user.Username INNER JOIN type_req ON request.idType_req=type_req.idType_Req INNER JOIN status ON request.Status_req=status.idStatus WHERE user.Username = ?',[req.cookies.sslg.username],function (error, results, fields) {
    var datax = results;
      res.render("status_page", {
        data : datax
      });
  }); 
}); 


module.exports = router;