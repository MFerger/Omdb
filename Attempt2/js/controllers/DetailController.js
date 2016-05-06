angular.module('app')
  .controller('DetailController', function(MovieService, $state){
    var vm = this;
      MovieService.getMovie($state.params.id)
        .then(function(movie){
          vm.movie = movie.data;
        })
    })
