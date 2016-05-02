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
    $scope.checkUser = function () {
      var userid = $scope.userid;
      var pwd = $scope.pwd;
      var promise = userfactory.authenticateUser(userid, pwd);
      promise.then(function (data) {
          if (data == "success") {
            console.log("ABS ", $location.absUrl());
            // $location.url('http://localhost:9000/views/dashboard.html');
            alert("Login Done "+data);
            location.href = "http://localhost:1234/views/dashboard.html";
          }
          //$location.path("http://localhost:9000/views/dashboard.html");
          else if (data == "invalid") {
            alert("invalid userid or password");
          }
          else {
            alert("fail");
          }
        }, function (err) {
          alert("error", err);
        }
      );
    }
  });
