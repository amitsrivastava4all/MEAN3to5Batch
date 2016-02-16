/*
app2.controller("myctrl",function($scope,MyService){
    $scope.msg = MyService.show();
});*/

app2.controller('myctrl', ['$scope', 'MyService', function(scp, serv){
    scp.data = serv;
}])
