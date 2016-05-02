var express = require("express");
var bodyParser =require("body-parser");
var app = express();
app.use(express.static("app"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login",function(req,res){
  var userid = req.body.userid;
  var pwd = req.body.pwd;
  console.log("Userid "+userid+" Password "+pwd);
  var checkLogin = require("./server/db/userdao");
  checkLogin(userid,pwd,res);
  //response.send("Hello this is post request");
})


app.listen(1234,function(){
  console.log("Server Start...");
});

