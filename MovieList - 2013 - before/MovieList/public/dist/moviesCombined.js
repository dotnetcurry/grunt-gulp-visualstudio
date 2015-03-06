(function () {
    angular.module('moviesApp', []);
}());;(function (app) {
    app.factory('moviesCRUD', function ($http, $q) {
        function getAllMovies() {
            var deferred = $q.defer();

            $http.get('/api/movies').then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function addMovie(newMovie) {
            var deferred = $q.defer();

            $http.post('/api/movies', newMovie).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function modifyMovie(updatedMovie) {
            var deferred = $q.defer();

            $http.put('/api/movies/' + updatedMovie.id, updatedMovie).then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        return {
            getAllMovies: getAllMovies,
            addMovie: addMovie,
            modifyMovie: modifyMovie
        };
    });
}(angular.module('moviesApp')));;(function (app) {
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