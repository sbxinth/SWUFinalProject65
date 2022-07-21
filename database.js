var mysql = require("mysql");
var dbConnectionn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "realrealdb",
    port: "3306"
    
  });

module.exports = dbConnectionn