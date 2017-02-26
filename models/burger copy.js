// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables column and value are arrays.
  insertOne: function(column, value, cb) {
    orm.insertOne("burgers", column, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColvalue, condition, cb) {
    orm.updateOne("burgers", objColvalue, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
