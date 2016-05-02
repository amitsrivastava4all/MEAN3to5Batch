var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://localhost:27017/userdb");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({});
var User = mongoose.model("users",userSchema);  // User Object Represent users Collection/*
module.exports=User;
