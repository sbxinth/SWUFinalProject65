const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
var session = require("express-session");
const checklogin = require('../middleware/logintokencheck');
const res = require('express/lib/response');
const { resolve } = require('path');
const { rejects } = require('assert');

// router.post('/details_submit',checklogin.checkforstudentonly, (req, res) => {
//   dbConnectionn.query('SELECT request.idRequest,user.ID_Student,user.Firstname,user.Lastname,Major.name_maj,user.user_phone,event.Name_Event,event.start_Event,event.end_Event FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN type_event ON event.idType_Event=type_event.idType_Event INNER JOIN user ON request.Username=user.Username INNER JOIN major ON user.Major=major.idMajor WHERE user.Username = ? AND request.idRequest = ?',[req.cookies.sslg.username,req.body.reqiD],function (error, results, fields) {
//     var datax = results;
//       res.render("details_submit", { 
//         data :datax
//       });
//   }); 
// });

module.exports = router;