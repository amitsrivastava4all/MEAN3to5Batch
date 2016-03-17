var utilModule = angular.module("utils",[]);
utilModule.factory("Task",function(){
    function Task(name,desc){
        this.name = name;
        this.desc = desc;
        this.isCompleted=false;

    }
    Task.prototype.toggle=function(){
        this.isCompleted = !this.isCompleted;
    }
    return Task;
})