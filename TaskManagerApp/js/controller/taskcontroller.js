window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addTask);
}
function addTask(){
    var taskName =document.getElementById("taskName").value;
    var taskDesc =document.getElementById("taskDesc").value;
    taskOperations.addTask(taskName,taskDesc);
    var ul = document.getElementById("taskList");
    var liTag = document.createElement("li");
    liTag.innerHTML=taskName+" "+taskDesc;
    ul.appendChild(liTag);
}
