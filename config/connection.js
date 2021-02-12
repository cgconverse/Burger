require("dotenv").config()
    
// Setting up connection for MySql
var mysql = require("mysql");
var connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.LOCAL_MYSQL_PW,
        database: "burgers_db"
    });
}