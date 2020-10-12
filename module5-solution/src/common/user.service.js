(function () {
"use strict";
    
angular.module('common')
.service('UserService', UserService);
     
function UserService() {
  var service = this;
    
  service.signedUp = false;
  service.registeredUser = {};
  service.registeredUserFavDish = {};
    
}
    
})();
