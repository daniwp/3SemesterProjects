var myApp = angular.module('DemoApp', []);

myApp.controller('CarController', ['$scope', function ($scope) {
    var cars = [
        {id: 1, year: 1997, registered: new Date(1999, 3, 15), make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
        , {id: 2, year: 1999, registered: new Date(1996, 3, 12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
        , {id: 3, year: 2000, registered: new Date(199, 12, 22), make: 'Chevy', model: 'Venture', description: '', price: 5000}
        , {id: 4, year: 1996, registered: new Date(2002, 3, 15), make: 'Jeep', model: 'Grand Cherokee', description: 'Air, moon roof, loaded', price: 4799}
    ];

    var self = this;

    self.edit = false;
    self.editIndex = 0;

    self.placeholder = {
        yearPH: "Enter the year",
        registeredPH: "",
        makePH: "Enter the maker",
        modelPH: "Enter the model",
        descriptionPH: "Enter the description",
        pricePH: "Enter the price"
    };

    self.editData = {};

    self.resetInput = function () {
        $scope.year = null;
        $scope.registered = null;
        $scope.make = "";
        $scope.model = "";
        $scope.description = "";
        $scope.price = null;
    };


    self.setEditTrue = function (index) {
        self.edit = true;
        self.editIndex = index;

        for (var i = 0, max = cars.length; i < max; i++) {
            if (i == index) {
                $scope.year = cars[i].year;
                $scope.registered = cars[i].registered;
                $scope.make = cars[i].make;
                $scope.model = cars[i].model;
                $scope.description = cars[i].description;
                $scope.price = cars[i].price;
            }
        }
    };

    self.editCar = function () {
        console.log(cars[self.editIndex]);
        cars[self.editIndex] = {
            id: cars[self.editIndex].id,
            year: $scope.year,
            registered: $scope.registered,
            make: $scope.make,
            model: $scope.model,
            description: $scope.description,
            price: $scope.price
        };

        self.edit = false;
        self.resetInput();
    };

    self.cars = cars;
    self.title = "Cars Demo App";
    self.predicate = "year";
    self.reverse = false;

    self.addCar = function () {
        self.cars.push({
            id: self.cars.length + 1,
            year: $scope.year,
            registered: $scope.registered,
            make: $scope.make,
            model: $scope.model,
            description: $scope.description,
            price: $scope.price
        });

        self.resetInput();
    };

    self.removeCar = function (index) {
        self.cars.splice(index, 1);
    };

    $scope.getCarIndex = function (car) {
        return cars.indexOf(car); //this will return the index from the array
    };
}]);

