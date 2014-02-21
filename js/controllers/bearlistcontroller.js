var app = angular.module('flamingOctoBear', []);

app.controller('bearListController', function($rootScope, $scope){

	$scope.bearsArray = ['bamse', 'ole brum', 'superted', 'baloo'];

	$scope.addBear = function(){
		$scope.bearsArray.push($scope.newBearName);
	};

});