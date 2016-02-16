window.addEventListener("load",init);
function init(){
    document.getElementById("userid").addEventListener("change",userValidation);
    document.getElementById("pwd").addEventListener("keyup",passwordValidation);
    document.getElementById("pwd").addEventListener("change",passwordValidation);
   // document.getElementById("form1").addEventListener("submit",doValidation);
}
function doValidation(event){
    if(userValidation()) {
        if (passwordValidation()) {

        }
        else{
            event.preventDefault();
        }
    }
    else
    {
        event.preventDefault();
    }

}
function userValidation(){
    var result = true;
    var userIdValue = document.getElementById("userid").value;
    if(isBlank("userid")){
        document.getElementById("usererror").innerHTML="Userid Is Blank";
        result = false;
    }
    else{
        for(var i= 0 ; i<userIdValue.length;i++){
            var singleChar = userIdValue.charAt(i);
            if(!(singleChar>='A' && singleChar<='Z' || singleChar>='a' && singleChar<='z')){
                result = false;
                document.getElementById("usererror").innerHTML="Userid Only A-Z";
                break;
            }
        }
    }
    return result;
}
function passwordValidation(){
    var result = true;
    var pwdValue = document.getElementById("pwd").value;
    if(isBlank("pwd")){
        document.getElementById("pwderror").innerHTML="Password Is Blank";
        result = false;
    }
    else{
        if(pwdValue.length<8){
            document.getElementById("pwderror").innerHTML="Password Must be Greater than 8 characters";
            result = false;
        }
        else
        {
            document.getElementById("pwderror").innerHTML="";
            result = true;
        }
    }
    return result;
}
function isBlank(id){
    var value = document.getElementById(id).value;
    console.log("Value is "+ value+" "+value.length);
    if(value===""){
        return true;
    }
    return false;

}
