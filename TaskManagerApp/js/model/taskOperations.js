var taskOperations={
    taskList:[],
    addTask:function(taskName,taskDesc){
        var taskObject = new Task(taskName,taskDesc);
        this.taskList.push(taskObject);
    }
}