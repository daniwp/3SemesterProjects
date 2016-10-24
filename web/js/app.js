var myApp = angular.module('DemoApp', []);

myApp.controller('CarController', ['CarFactory', function (CarFactory) {
    $scope.edit = false;
    $scope.editId = 0;

    $scope.editCar = function () {
        $scope.edit = false;
        $scope.newcar.id = $scope.editId;
        CarFactory.editCar($scope.newcar)
            .then(function (response) {
                $scope.getAll();
            }, function (response) {
            });

        $scope.newcar = {};
        $scope.getAll();
    };

    $scope.getAll = function () {
        CarFactory.getAll()
            .then(function (response) {
                $scope.cars = response;
            }, function (response) {
            });
    };

    $scope.getAll();

    $scope.get = function (id) {
        CarFactory.get(id)
            .then(function (response) {
                $scope.newcar = response;
            }, function (response) {
            });
    };

    $scope.setEditTrue = function (id) {
        $scope.edit = true;
        $scope.editId = id;

        $scope.newcar = $scope.get(id);
    };

    $scope.predicate = "year";
    $scope.reverse = false;

    $scope.addCar = function () {
        CarFactory.addCar($scope.newcar)
            .then(function (response) {
                $scope.getAll();
            }, function (response) {
            });

        $scope.newcar = {};
        $scope.getAll();
    };

    $scope.removeCar = function (id) {
        CarFactory.delete(id)
            .then(function (response) {
                $scope.getAll();
            }, function (response) {
            });
    };

}]);

myApp.factory("CarFactory", ['$http', '$q', function ($http, $q) {

    var baseurl = "http://localhost:8084/AngularJS_Exercise_Day_3_Ex_3/api/car"

    var editCar = function (newcar) {
        var q = $q.defer();
        $http.put(baseurl, JSON.stringify(newcar))
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var getAll = function () {
        var q = $q.defer();
        $http.get(baseurl)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var get = function (id) {
        var q = $q.defer();
        $http.get(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var addCar = function (newcar) {
        var q = $q.defer();
        $http.post(baseurl, JSON.stringify(newcar))
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var removeCar = function (id) {
        var q = $q.defer();
        $http.delete(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    return {
        editCar: editCar,
        getAll: getAll,
        get: get,
        addCar: addCar,
        removeCar: removeCar
    }
}]);

