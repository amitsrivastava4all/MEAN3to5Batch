function checkLogin(uid,pwd,response){
// Step - 1 require the mongoose module
var User = require("./commondb");
User.find({"userid":uid,"pwd":pwd},function(error,docs){
if(error){
  response.send("fail")
}
else
if(docs && docs.length>0){
  console.log("Found..... "+uid +" "+pwd+" "+docs);
  response.send("success");
}
  else
{
  console.log("Not Found.... ");
  response.send("invalid");
}

});
}
module.exports=checkLogin;
/*User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       console.log("Can't Add Error Occured ",error);
   }
    else{
       console.log("Record Added...");
   }
});*/
//}
//}
//module.exports=dbOperations;
