angular.module('app')
  .service('MovieService', function($http) {
    return {
      getAllMovies: function(title){
        return $http.get('https://www.omdbapi.com/?s=' + title + '&type=movie')
      },
      getMovie: function(id){
        return $http.get('https://www.omdbapi.com/?i=' + id + '&type=movie')
      }
    }
  });
