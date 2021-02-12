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

// Converting object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // looping through the keys and pushing the key/value as a string into an array
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // Converting the array of strings into a single string separated by commas
    return arr.toString();
  }