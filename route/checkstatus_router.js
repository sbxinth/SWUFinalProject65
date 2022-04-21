const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
const checklogin = require('../middleware/logintokencheck');

router.get("/status_page",checklogin.checkforstudentonly, (req, res) => {
  dbConnectionn.query('SELECT request.idRequest,request.date_req,type_req.Detail_Type_R,status.Detail_Status FROM request INNER JOIN event ON request.ID_event=event.ID_event INNER JOIN user ON request.Username=user.Username INNER JOIN type_req ON request.idType_req=type_req.idType_Req INNER JOIN status ON request.Status_req=status.idStatus WHERE user.Username = ?',[req.cookies.sslg.username],function (error, results, fields) {
    var datax = results;
      res.render("status_page", {
        data : datax
      });
  }); 
}); 


router.get('/details_submit/:reqiD',checklogin.checkforstudentonly, (req, res) => {
  dbConnectionn.query(`SELECT request.idRequest,user.ID_Student,user.Firstname,user.Lastname,Major.name_maj,user.user_phone,event.Name_Event,type_req.Detail_Type_R,event.start_Event,event.end_Event,request.file_pdf,request.file_img 
  FROM request INNER JOIN event ON request.ID_event=event.ID_event 
  INNER JOIN type_event ON event.idType_Event=type_event.idType_Event 
  INNER JOIN user ON request.Username=user.Username 
  inner join type_req on request.idType_req=type_req.idType_Req
  INNER JOIN major ON user.Major=major.idMajor  WHERE user.Username = ? AND request.idRequest = ?`,[req.cookies.sslg.username,req.params.reqiD]
  ,async function (error, results, fields) {
    var datax = results;
    // console.log(datax,"details_submit/:reqiD")

    datax[0].file_img = await datax[0].file_img.split(',')
    // console.log(datax)

      res.render("details_submit", { 
        data :datax
      });
  }); 
});
router.get('/details_submit/transtotl/:reqiD',checklogin.checkforstudentonly, (req, res) => {
  dbConnectionn.query(`UPDATE request SET idType_req = '2' WHERE (idRequest = ?);
  `,[req.params.reqiD]
  ,function (error, results, fields) {
    if (error) throw error
    // console.log(results)
    if (results){
      res.redirect("/details_submit/"+req.params.reqiD)
    }
  }); 
// console.log(req.params)
});



module.exports = router;