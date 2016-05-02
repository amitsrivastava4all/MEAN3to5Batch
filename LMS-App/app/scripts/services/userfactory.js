'use strict';

/**
 * @ngdoc service
 * @name lmsappApp.userfactory
 * @description
 * # userfactory
 * Factory in the lmsappApp.
 */
app
  .factory('userfactory', function ($http,$q) {
    var authenticateUser=function(userid,pwd){
      var defered = $q.defer();
      var mydata = {
        userid: userid,
        pwd: pwd
      };
      $http.post("login",mydata).success(function(data){
        defered.resolve(data);
        alert("Login DONE----> "+data);
      }) .error(function(er){
        alert("Login ERROR----> "+er);
      console.log("Error is ",er);
      //scope.offers = er;
      defered.reject(er);

    });
      /*if(userid===pwd){
        return true;
      }
      else
      {
        return false;
      }*/
      return  defered.promise;
    }
  return {"authenticateUser":authenticateUser};
  });
