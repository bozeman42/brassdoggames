var app = angular.module('App', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as hc',
    })
    .otherwise({
      redirectTo:'/home'
    });
});