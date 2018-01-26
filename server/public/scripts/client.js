var app = angular.module('App', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html'
    })
    .when('/upcoming', {
      templateUrl: '/views/templates/upcoming.html'
    })
    .when('/poisoners-pour', {
      templateUrl: '/views/templates/pp.html'
    })
    .when('/take-a-penny', {
      templateUrl: '/views/templates/tap.html'
    })
    .when('/micro-miners', {
      templateUrl: '/views/templates/mm.html'
    })
    .when('/print-and-play', {
      templateUrl: '/views/templates/pnp.html'
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html'
    })
    .otherwise({
      redirectTo:'/home'
    });
});

app.run(function($rootScope,$location) {
  $rootScope.$on('$locationChangeStart',function(event,next,current){
    window.dataLayer.push({
      event: 'pageView',
      action: $locaton.path()
    });
  });
});