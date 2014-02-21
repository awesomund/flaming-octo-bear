angular.module('flamingOctoBear', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/bearlist', {
		templateUrl: '../html/bearlist.html',
		controller: 'bearListController',
	})
	.otherwise({redirectTo: '/',});
});