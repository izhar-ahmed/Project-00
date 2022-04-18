
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})



app.listen(3000, function(){
    console.log("Server start at port 3000");
})