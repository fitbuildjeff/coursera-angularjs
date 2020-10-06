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
        { name: "bag of honeycrisp", quantity: 1 }, 
        { name: "red grapes", quantity: 2 }, 
        { name: "bok choy", quantity: 1 }, 
        { name: "eggplant", quantity: 1 },  
        { name: "cacao or cocoa powder", quantity: 1 }, 
        { name: "sausage packages", quantity: 2 }, 
        { name: "frozen blueberries", quantity: 1 }
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
