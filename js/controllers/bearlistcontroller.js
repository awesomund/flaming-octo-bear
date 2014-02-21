angular.module('flamingOctoBear', [])

.controller('BearListController', function($rootScope, $scope){

	$scope.bearString = "Bear!";

	$scope.bearsArray = ['bamse', 'ole brum', 'superted', 'baloo'];
	console.log($scope.bearsArray);

	$scope.addBear = function(){
		$scope.bearsArray.push($scope.newBearName);
	};

});