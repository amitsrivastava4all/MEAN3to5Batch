'use strict';

/**
 * @ngdoc service
 * @name lmsappApp.userfactory
 * @description
 * # userfactory
 * Factory in the lmsappApp.
 */
app
  .factory('userfactory', function () {
    var authenticateUser=function(userid,pwd){
      if(userid===pwd){
        return true;
      }
      else
      {
        return false;
      }

    }
    return  {"authenticateUser":authenticateUser};
  });
