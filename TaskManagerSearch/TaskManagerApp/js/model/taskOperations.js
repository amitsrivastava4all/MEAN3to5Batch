var taskOperations={
    taskList:[],
    addTask:function(taskId , taskName,taskDesc){
        var taskObject = new Task(taskId , taskName,taskDesc);
        this.taskList.push(taskObject);
    },
    searchTask:function(taskNameToSearch){
        return  this.taskList.filter(function(taskObject){
            return taskObject.taskName.indexOf(taskNameToSearch)>=0;
        });
        //return finalList;

    }
}