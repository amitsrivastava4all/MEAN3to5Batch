moduleApp.factory("calcFactory",function(){
    return {
        add:function(x,y){
            return parseInt(x) + parseInt(y);
        },
        subtract:function(x,y){
            return x - y;
        }


    }
});

moduleApp.factory("calcFactory2",function(){
    return {
        multiply:function(x,y){
            return parseInt(x) * parseInt(y);
        },
        divide:function(x,y){
            return x / y;
        }


    }
});
