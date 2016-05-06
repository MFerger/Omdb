angular.module('app')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('home', {
        url: '/',
        controllerAs: 'vm',
        controller: 'MainController',
        templateUrl: 'partials/home.html'
      })
      .state('home.list', {
        url: 'list/:search',
        controllerAs: 'vm',
        controller: 'ListController',
        templateUrl: 'partials/home.list.html'
      })
      .state('home.detail', {
        url: 'detail/:id',
        controllerAs: 'vm',
        controller: 'DetailController',
        templateUrl: 'partials/home.detail.html'
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  });
