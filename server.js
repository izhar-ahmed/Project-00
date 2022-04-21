
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const multer = require("multer");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/data/uploaded')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.post("/save", upload.single('avatar'), function(req, res) {
    let fullName = req.body.name;
    let gender = req.body.gender;
    let education = req.body.educations;
    let skill = req.body.skill;
    let avatar = req.body.avatar;
    let description = req.body.description;

    mysqlConnection.query("INSERT INTO student (fullname, gender, education, skill, picture, description) VALUES (?, ?, ?, ?, ?, ?)", 
    [fullName, gender, education, skill, avatar, description],
    function(err, result){
        if(err){
            console.log(err);
        } else{
            res.send("Value Inserted.");

        }
    }
    )
})


app.listen(3000, function(){
    console.log("Server start at port 3000");
})