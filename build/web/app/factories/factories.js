
/**
 * This is file where we define our factories used throughout the application.
 */

angular.module('myApp').factory('CarFactory', ['$http', '$q', function ($http, $q) {

        var baseurl = "http://localhost:8084/AngularJS_Exercise_Day_3_Ex_3/api/car";

        var getCar = function (id) {
            var q = $q.defer();
            $http.get(baseurl + "/" + id).then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
            return q.promise;
        };


        var getCars = function () {
            var q = $q.defer();
            $http.get(baseurl).then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
            return q.promise;
        };

        var deleteCar = function (id) {
            var q = $q.defer();
            $http.delete(baseurl + "/" + id).then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
            return q.promise;
        };

        var addCar = function (newcar) {
            var q = $q.defer();
            $http.post(baseurl, newcar).then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
            return q.promise;
        };

        var editCar = function (newcar) {
            var q = $q.defer();
            $http.put(baseurl, newcar).then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
            return q.promise;
        };

        return {
            getCar: getCar,
            getCars: getCars,
            deleteCar: deleteCar,
            addCar: addCar,
            editCar: editCar
        };

    }]);

