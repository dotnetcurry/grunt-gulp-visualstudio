(function (app) {
    app.controller('MoviesCtrl', function ($scope, moviesCRUD) {
        $scope.released = { isReleased: true };
        $scope.notReleased = { isReleased: false };

        function init() {
            moviesCRUD.getAllMovies().then(function (movies) {
                $scope.movies = movies;
            }, function (error) {
                console.log(error);
            });
        }

        $scope.movieReleased = function (movie) {
            
            moviesCRUD.modifyMovie({ id: movie.id, name: movie.name, isReleased: true, isWatched: movie.isWatched })
                      .then(function (result) {
                          if (result.status === 200) {
                              movie.isReleased = true;
                          }
                      }, function (error) {
                          console.log(error);
                      });
        };

        $scope.movieWatched = function (movie) {
            moviesCRUD.modifyMovie(movie)
                      .then(function (result) {
                          if (result.status === 200) {
                              console.log("Movie updated");
                          }
                      }, function (error) {
                          movie.isWatched = !movie.isWatched;
                      });
        };

        $scope.addMovie = function () {
            moviesCRUD.addMovie({ name: $scope.newMovieText }).then(function (newMovie) {
                $scope.movies.push(newMovie);
                $scope.newMovieText = "";
            }, function (error) {
                console.log(error);
            });
        };

        init();
    });
}(angular.module('moviesApp')));