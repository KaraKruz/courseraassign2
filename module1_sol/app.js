(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.foodNames = "";
	$scope.message = "";

	$scope.amountCheck = function() {
		var input = $scope.foodNames;
		input = input.trim();
		if (input == "") {
			$scope.message = "Please enter data first"; 
		} else {
			var inputis = input.split(",");

		for (var i = 0; i < inputis.length; i++) {
			if (inputis.length <= 3){
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	}

}};

})();
