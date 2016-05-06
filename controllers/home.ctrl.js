angular.module("OmdbClone")
  .controller('HomeController', ["$scope", "$http", "movieService", "$location", function($scope, $http, movieService, $location) {

  $scope.view = {};
  $scope.view.targetMovie = function(id) {
    $http.get('https://omdbapi.com/?i='+id+'&plot=short&r=json').then(function(res){
      $scope.view.single = res.data;
    });
  };

  $scope.getMovie = function(movieName) {
    $location.path('/')
    var movie = movieName.split(' ').join('+');
    $http.get('https://g-omdbapi.herokuapp.com/?s='+movieName+'&r=json').then(function(res){
      $scope.view.allMovies = res.data.Search;
      console.log(res.data.Search);
    });
  };

}]);
