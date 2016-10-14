angular.module('myApp').controller('EditController', ['$state', '$stateParams', '$scope', 'CarFactory', function ($state, $stateParams, $scope, CarFactory) {

        CarFactory.getCar($stateParams.id).then(function (response) {
            $scope.newcar = response;
        }, function () {

        });

        $scope.editCar = function (newcar) {
            $scope.newcar.id = $stateParams.id;
            CarFactory.addEditCar(newcar).then(function () {
                $state.go("home");
            });
        };

    }]);
