var mysql = require("mysql");
var dbConnectionn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newthesis"
  });

module.exports = dbConnectionn