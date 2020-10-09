(function() {
'use strict';
  
angular.module('MenuApp')
.component('menuitems', {
  templateUrl: 'src/items/itemlist.html',
  bindings: {
    items: '<'
  }
});
  
})();
