angular.module('flamingOctoBear', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/bearlist.html',
		controller: 'BearListController',
	})
  .otherwise({redirectTo: '/templates/bearlist.html'});
});