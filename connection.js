const mysql = require("mysql");
let mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1280",
    database: "project_00",
    multipleStatements: true
})

mysqlConnection.connect(function(err){
    if(!err){
        console.log("Connected Successfully");
    }
    else {
        console.log("Connection Failed");
    }
})

module.exports = mysqlConnection;