angular.module('myApp').controller('AddController', ['$scope', '$state', 'CarFactory', function ($scope, $state, CarFactory) {

        $scope.addCar = function (newcar) {
            CarFactory.addCar(newcar)
                    .then(function () {
                        $scope.newcar;
                    }, function () {

                    });
            $state.go("home");
        };

    }]);