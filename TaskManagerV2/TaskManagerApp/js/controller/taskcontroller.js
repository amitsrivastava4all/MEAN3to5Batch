window.addEventListener("load",init);
var taskId = 1;
function init(){
    document.getElementById("taskSearch").addEventListener("keyup",searchTask);
    var buttonHTMLCollection = document.getElementsByTagName("button");
    Array.prototype.forEach.call(buttonHTMLCollection,function(e){
        var operations = {"addTask":addTask,"saveTask":saveTask,"deleteTask":deleteTask,"loadTask":loadTask};
        e.addEventListener("click",operations[e.id]);
        //console.log("Loop It "+e.id );
        //console.dir(e);
    });
   // document.getElementsByTagName("button");
    /*document.getElementById("addTask").addEventListener("click",addTask);
    document.getElementById("search").addEventListener("click",showSearchTask);

    document.getElementById("searchTask").addEventListener("keyup",searchTask);
    document.getElementById("deleteTask").addEventListener("click",deleteTask);
    document.getElementById("saveTask").addEventListener("click",saveTask);
    document.getElementById("loadTask").addEventListener("click",loadTask);*/




}
function searchTask(){
    var taskNameToSearch = document.getElementById("taskSearch").value;
    var taskSearchList = taskOperations.searchTask(taskNameToSearch);
    printList(taskSearchList)


}
function loadTask(){
    taskOperations.taskList=JSON.parse(window.localStorage.tasks);
    printList(taskOperations.taskList);
    alert("Data Loaded...");

}
function saveTask(){
    window.localStorage.tasks=JSON.stringify(taskOperations.taskList);
    alert("Data Store");
}
function deleteTask(){

    taskOperations.taskList = taskOperations.deleteTask();
    printList(taskOperations.taskList);
}
function printList(taskList){
    var ul = document.getElementById("taskList");
    ul.innerHTML="";
    taskList.forEach(function(taskObject){
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
   var liInnerHtml =  event.srcElement.innerHTML;
    var array=liInnerHtml.split(" ");
    var taskId = array[0];
     taskOperations.toggleTask(taskId,"taskId");



}
