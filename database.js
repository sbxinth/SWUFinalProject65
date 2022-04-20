var mysql = require("mysql");
var dbConnectionn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "realrealdb"
  });

module.exports = dbConnectionn