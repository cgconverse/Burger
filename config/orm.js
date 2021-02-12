// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];
//looping through the array of question marks
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
//turns array into a string
  return arr.toString();
}