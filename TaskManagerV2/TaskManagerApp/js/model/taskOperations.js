var taskOperations={
    taskList:[],
    addTask:function(taskId , taskName,taskDesc){
        var taskObject = new Task(taskId , taskName,taskDesc);
        this.taskList.push(taskObject);
    },
    searchTask:function(searchParam){
            return  this.taskList.filter(function(taskObject){

                return taskObject.taskName.indexOf(searchParam)>=0;
            });},
        toggleTask:function(searchParam,fieldtype){
            return  this.taskList.filter(function(taskObject){
                if(taskObject[fieldtype]==searchParam) {
                    taskObject.isCompleted = !taskObject.isCompleted;
                }
                return ;
            });
        //return finalList;

    },
    deleteTask:function(){
        return  this.taskList.filter(function(taskObject){

            return !taskObject.isCompleted ;
        });
        //return finalList;

    }
}