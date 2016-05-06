angular.module('app')
  .controller('ListController', function(MovieService, $state) {
    var vm = this;
    MovieService.getAllMovies($state.params.search)
      .then(function(movies) {
        vm.movies = movies.data.Search;
        vm.searchInput = null;
      })
  })
