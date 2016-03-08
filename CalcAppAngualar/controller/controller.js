// Step -1 Create Module


moduleApp.controller("calccontroller",function($scope,calcFactory,calcFactory2){
    //alert("Call...");
    $scope.result = 0;
//$scope.result = "Controller Done";
    calcFactory["add"]();
    $scope.add=function(){
        $scope.result = calcFactory.add($scope.firstno,$scope.secondno);
    }
    $scope.multiply=function(){
        $scope.result = calcFactory2.multiply($scope.firstno,$scope.secondno);
    }
})