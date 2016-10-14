"use strict";

/**
 * This is the HomeController, which handles the functionality on the root view.
 */

angular.module('myApp').controller('ListController', ['$scope', 'CarFactory', function ($scope, CarFactory) {

        $scope.getCars = function () {
            CarFactory.getCars()
                    .then(function (response) {
                        $scope.cars = response;
                    }, function (response) {

                    });
        };

        $scope.getCars();

        $scope.removeCar = function (id) {
            CarFactory.deleteCar(id).then(function () {
                $scope.getCars();
            });
        };

    }]);