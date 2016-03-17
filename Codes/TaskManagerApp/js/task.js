var taskApp = angular.module("taskApp",["utils"]);
taskApp.controller("taskController",function($scope,Task){
$scope.taskObject={
    taskList:[],
    searchOn:false,

    addNewTask:function(){
        var newTask = new Task($scope.taskName,$scope.taskDesc);
        this.taskList.push(newTask);
    },
    countCompletedTask:function(){

        return this.taskList.filter(function(task){
            return task.isCompleted;
        }).length;
    },
    removeCompletedTask:function(){
        this.taskList=this.taskList.filter(function(task){
            return !task.isCompleted;
        });
    },
    saveCompletedTask:function(){

    },
    countPending:function(){
        return this.taskList.filter(function(task){
            return !task.isCompleted;
        }).length;
    }
}
});