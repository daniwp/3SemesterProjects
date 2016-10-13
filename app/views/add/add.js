angular.module('myApp').controller('AddController', ['$scope', '$state', 'CarFactory', 'toastr', function ($scope, $state, CarFactory, toastr) {

    $scope.addCar = function (newcar) {
        CarFactory.addEditCar(newcar);
        $state.go("home");
        toastr.success('The car was successfully added to the fake db', 'Car added!');
    };

}]);