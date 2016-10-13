angular.module('myApp').controller('EditController', ['$state', '$stateParams', '$scope', 'toastr', 'CarFactory', function ($state, $stateParams, $scope, toastr, CarFactory) {

    $scope.newcar = CarFactory.getCar($stateParams.id);

    $scope.editCar = function (newcar) {
        $scope.newcar.id = $stateParams.id;
        CarFactory.addEditCar(newcar);
        $state.go("home");
        toastr.success('The car was successfully updated to the fake db', 'Car updated!');
    }

}]);
