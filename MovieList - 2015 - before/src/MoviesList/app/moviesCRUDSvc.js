(function (app) {
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
}(angular.module('moviesApp')));