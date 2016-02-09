
window.addEventListener("load",init);
function init(){
    alert("Window Load");
var btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click",displayGreet);
}

function displayGreet(){
    var txtName = document.getElementById("txtName").value;
    var parentDiv = document.getElementsByTagName("div")[1];
    parentDiv.children[0].children[0].children[0].innerHTML=txtName;
}