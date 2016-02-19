function add(){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        if(typeof arguments[i]==="function"){
            arguments[i]=arguments[i]();

        }

        if(arguments[i] instanceof Array){
            for(var j = 0 ; j<arguments[i].length; j++){
                if(typeof arguments[i][j]==="function"){
                    arguments[i][j]= arguments[i][j]();
                }
                sum = sum + (isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]));
            }
        }
        else{
            sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
        }
    }
    return sum;
}