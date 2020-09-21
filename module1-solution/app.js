(function () {
  'use strict';
      
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
    
  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope) {
    $scope.message="";
    
    $scope.sayMessage = function () {
      var ingredients;
    
      if ($scope.ingredients) {
        ingredients = $scope.ingredients.split(",").filter(function(ingredient) {
          return ingredient.length > 0;
        });
        if (ingredients.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    }
  }  
    
  })();
