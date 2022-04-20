// var usercheck = require("./middleware/logintokencheck");
const express = require('express');
const router = express.Router();
const dbConnectionn = require("../database");
const multer = require("multer");
const res = require("express/lib/response");
const { resolve } = require("path");
const { rejects } = require("assert");
const { required } = require("nodemon/lib/config");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './public/img')
  },
  filename: (req, file, cb) => {
      cb(null, 'file-' + Date.now() + '.' +
      file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({ storage:storage })

router.post("/profile", upload.single('image'), (req, res) => {
  if (!req.file) {
      console.log("No file upload");
      res.render("No file upload");
  } else {
      var imgsrc = '../img/' + req.file.filename
      var insertData = ("UPDATE `User` SET `img_user`= (?) WHERE ID_Student = (?)");
      dbConnectionn.query(insertData, [imgsrc,req.cookies.sslg.studentID], (err, result) => {
          if (err) throw err
          res.redirect("/profile")
      })
  }
});

router.post("/info_admin",upload.single('image'),(req,res)=> {
  if (!req.file) {
    console.log("No file upload");
    res.render("No file upload");
} else {
    var imgsrc = '../img/' + req.file.filename
    var insertData = ("UPDATE `User` SET `img_user`= (?) WHERE ID_Student = (?)");
    dbConnectionn.query(insertData, [imgsrc,req.cookies.sslg.studentID], (err, result) => {
        if (err) throw err
        res.redirect("/info_admin")
    })
}
});

module.exports = router;