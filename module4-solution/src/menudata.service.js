(function() {
'use strict';
    
angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('apiBasePath', 'https://davids-restaurant.herokuapp.com');
    
MenuDataService.$inject = ['$http', 'apiBasePath']
function MenuDataService($http, apiBasePath) {
  var service = this;
    
  service.getAllCategories = function() {
    return $http.get(apiBasePath + '/categories.json');
  }

  service.getItemsForCategory = function(categoryShortName) {
    return $http.get(apiBasePath + "/menu_items.json?category" + categoryShortName);
  }

}
})();
