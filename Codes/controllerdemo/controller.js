var app = angular.module("myapp",[]);
app.controller("ctrl",function($scope,$rootScope){
    $rootScope.firstValue = "<i>Hello</i>";
    $scope.data=[{name:'John', phone:'555-1276',salary:9000.896},
        {name:'Mary', phone:'800-BIG-MARY',salary:19000.34432},
        {name:'Mike', phone:'555-4321',salary:29000.32322},
        {name:'Adam', phone:'555-5678',salary:1000.23232},
        {name:'Julie', phone:'555-8765',salary:11000.44444433},
        {name:'Juliette', phone:'555-5678',salary:12000}];
});

app.controller("ctrl2",function($scope){
    $scope.secondValue = $scope.firstValue+" Ok";
});
