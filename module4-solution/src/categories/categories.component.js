(function() {
'use strict';
  
angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categories/categorylist.html',
  bindings: {
    items: '<'
  }
});
  
})();
