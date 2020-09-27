(function() {
  'use strict';
  
  angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
      var buyList = this;
      buyList.items = ShoppingListCheckOffService.stillToPurchaseItems();
      buyList.purchaseTreat = function(itemIndex) {
        ShoppingListCheckOffService.purchaseTreat(itemIndex);
      }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.alreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
      var service = this;

      var toBuy = [
        { name: "jars of honey", quantity: 3 }, 
        { name: "dark chocolate bars", quantity: 4 }, 
        { name: "bags of marshmellows", quantity: 2 }, 
        { name: "graham cracker packages", quantity: 3 },  
        { name: "licorice root tea", quantity: 2 }, 
        { name: "figs", quantity: 6 }, 
        { name: "bag of choc covered almonds", quantity: 1 }, 
        { name: "containers of blueberries", quantity: 3 },
        { name: "cashew milk ice cream", quantity: 1}
      ];

      var bought = [];

      service.stillToPurchaseItems = function() {
          return toBuy;
      };

      service.alreadyBoughtItems = function() {
          return bought;
      };

      service.purchaseTreat = function(itemIndex) {
          bought.push(toBuy[itemIndex]);
          toBuy.splice(itemIndex, 1);
      };  
  }

})();
