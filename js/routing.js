var app = angular.module('flamingOctoBear',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/bearlist',
            {
                controller:'BearListController',
                templateUrl: '/templates/bearlist.html',
            })
        .when('/view2',
            {
                controller:'BearListController',
                templateUrl : '/templates/view2.html'
            })
        .otherwise({redirectTo:'/bearlist'});

});