'use strict';

/**
 * @ngdoc function
 * @name lmsappApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the lmsappApp
 */
app
  .controller('UserCtrl', function ($scope,userfactory,$location) {
    $scope.checkUser=function(){
    var userid = $scope.userid;
    var pwd = $scope.pwd;

    if(userfactory.authenticateUser(userid,pwd)){
      console.log("ABS ",$location.absUrl());
     // $location.url('http://localhost:9000/views/dashboard.html');
      location.href="http://localhost:9000/views/dashboard.html";
      //$location.path("http://localhost:9000/views/dashboard.html");
    }
    else{
      $scope.invalid = "Userid or Password is Invalid";
    }
    }
  });
