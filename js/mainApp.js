// creando un modulo
var app = angular.module('aplication', ['ngRoute'])
.config(
    function($routeProvider)
    {
        $routeProvider
        .when('/filters',
        {
            templateUrl:'filters.html',
            controller : 'homeController'
        })
        .when('/form',
        {
            templateUrl:'formValidate.html',
            controller : 'homeController'
        })
        .when('/ajax',
        {
            templateUrl:'ajax.html',
            controller : 'homeController'
        })
        .when('/home',
        {
            templateUrl:'home.html',
            controller : 'homeController'
        })
        .when('/factories',
        {
            templateUrl:'factory.html',
            controller : 'homeController'
        })
        .otherwise( {redirectTo: ''});
    }
);


app.factory('');