window.addEventListener("load",init);
var taskId = 1;
function init(){
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("search").addEventListener("click",showSearchTask);

    document.getElementById("taskSearch").addEventListener("keyup",searchTask);
}
function searchTask(){
    var taskNameToSearch = document.getElementById("taskSearch").value;
    var taskSearchList = taskOperations.searchTask(taskNameToSearch);
    var ul = document.getElementById("taskList");
    ul.innerHTML="";
    taskSearchList.forEach(function(taskObject){
        var liTag = document.createElement("li");
        liTag.innerHTML=taskObject.taskId +" " +taskObject.taskName+" "+taskObject.taskDesc;

        liTag.addEventListener("click",toggleTask);
        ul.appendChild(liTag);
    });

}
function showSearchTask(){

    if(document.getElementById("search").checked){
        document.getElementById("searchDiv").className="";
    }
    else
    {
        document.getElementById("searchDiv").className="hide";
    }

}
function addTask(){
    var taskName =document.getElementById("taskName").value;
    var taskDesc =document.getElementById("taskDesc").value;
    taskOperations.addTask(taskId,taskName,taskDesc);
    var ul = document.getElementById("taskList");
    var liTag = document.createElement("li");
    liTag.innerHTML=taskId +" " +taskName+" "+taskDesc;
    taskId++;
    liTag.addEventListener("click",toggleTask);
    ul.appendChild(liTag);
}
function toggleTask(event){
    console.log(event.srcElement.innerHTML);
    event.srcElement.classList.toggle("completed");
}
