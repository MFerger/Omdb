angular.module("OmdbClone").config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
    })
    .when('/movie', {
      templateUrl: 'partials/movie.html',
    })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
})
