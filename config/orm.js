// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function QuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableName, cb) {
    var queryRequest = "SELECT * FROM " + tableName + ";";
    connection.query(queryRequest, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, column, value, cb) {
    var queryRequest = "INSERT INTO " + table;

    queryRequest += " (";
    queryRequest += column.toString();
    queryRequest += ") ";
    queryRequest += "VALUES (";
    queryRequest += QuestionMarks(value.length);
    queryRequest += ") ";

    console.log(queryRequest);

    connection.query(queryRequest, value, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColvalue would be {name: panther, sleepy: true}
  updateOne: function(table, objColvalue, condition, cb) {
    var queryRequest = "UPDATE " + table;

    queryRequest += " SET ";
    queryRequest += objToSql(objColvalue);
    queryRequest += " WHERE ";
    queryRequest += condition;

    console.log(queryRequest);
    connection.query(queryRequest, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;


