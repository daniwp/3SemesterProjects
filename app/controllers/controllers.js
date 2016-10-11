"use strict";

/**
 * This is the main controller, which acts as a global controller throughout the application.
 */

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {
    $scope.navbarCollapsed = true;
}]);