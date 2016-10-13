"use strict";

/**
 * This is the HomeController, which handles the functionality on the root view.
 */

angular.module('myApp').controller('ListController', ['$scope', 'toastr', 'CarFactory', function ($scope, toastr, CarFactory) {

    $scope.cars = CarFactory.getCars();

    $scope.removeCar = function(id) {
        CarFactory.deleteCar(id);
    }
    
    $scope.editCar = function(id) {
        
    }

}]);