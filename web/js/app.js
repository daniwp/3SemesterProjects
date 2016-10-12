var myApp = angular.module('DemoApp', []);

myApp.controller('CarController', ['$scope', '$http', function ($scope, $http) {
        $scope.baseurl = "http://localhost:8084/AngularJS_Exercise_Day_3_Ex_3/api/car"
        $scope.edit = false;
        $scope.editId = 0;

        $scope.editCar = function () {
            $scope.edit = false;
            $scope.newcar.id = $scope.editId;
            $http.put($scope.baseurl, JSON.stringify($scope.newcar))
                    .then(function (response) {
                        $scope.getAll();
                    }, function (response) {
                    });

            $scope.newcar = {};
            $scope.getAll();
        };

        $scope.getAll = function () {
            $http.get($scope.baseurl)
                    .then(function (response) {
                        $scope.cars = response.data;
                    }, function (response) {
                    });
        };

        $scope.getAll();

        $scope.get = function (id) {
            $http.get($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.newcar = response.data;
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
            $http.post($scope.baseurl, JSON.stringify($scope.newcar))
                    .then(function (response) {
                        $scope.getAll();
                    }, function (response) {
                    });

            $scope.newcar = {};
            $scope.getAll();
        };

        $scope.removeCar = function (id) {
            $http.delete($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.getAll();
                    }, function (response) {
                    });
        };

    }]);

