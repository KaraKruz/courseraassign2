(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
  $scope.boughtItem = function(index) {
    ShoppingListCheckOffService.boughtItem(index);
  };
  $scope.itemsToBuy = function() {
    return ShoppingListCheckOffService.getItemsToBuy();
  };
  $scope.empty = function() {
    return ShoppingListCheckOffService.listToBuyEmpty();
  };
}

// LIST 2: Already Bought Controller
AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
  $scope.itemsBought = function() {
    return ShoppingListCheckOffService.getItemsBought(); };
  $scope.empty = function() {
    return ShoppingListCheckOffService.listBoughtEmpty(); };
  }

function ShoppingListCheckOffService() {
  var buy = [
  {name: "Milk", quantity: "2 Bottles"},
  {name: "Eggs", quantity: "1 Dozen"}, 
  {name: "Cookie", quantity: "3 Bags"}, 
  {name: "Chocolate", quantity: "5 Bars"},
  {name: "Bread", quantity: "2 Loafs"}
  ];
  var bought = [];

  return {
    boughtItem: function(itemIndex) {
      var item = buy[itemIndex];

      buy.splice(itemIndex, 1);
      bought.push(item);
    },

    getItemsToBuy: function() { return buy; },
    listToBuyEmpty: function (){ return buy[0] === undefined; },
    getItemsBought: function () { return bought; },
    listBoughtEmpty: function() { return bought[0] === undefined; }
    };
  }
})();
