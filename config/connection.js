// Set up MySQL connection.
var mysql = require("mysql");
var importedPassword = require("./key.js");


var connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: "localhost",
  user: "root",
  password: "kalowanebli",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL){
  connectInfo=process.env.JAWSDB_URL;
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
