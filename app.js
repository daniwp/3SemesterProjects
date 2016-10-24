angular.module("myApp", []);

angular.module("myApp").controller("MyController", ['$scope', function ($scope) {

    $scope.persons = [
        {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
        {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
        {name: 'Karen', gender: 'female', age: 31}];
}]);

angular.module("myApp").controller("ChessCtrl", ['$scope', function ($scope) {

    $scope.board = ["wr", "wkn", "wb", "wq", "wk", "wb", "wkn", "wr"];
}]);

angular.module("myApp").filter('youngster', [function () {

    return function (input) {

        var out = [];

        angular.forEach(input, function (person) {

            if (person.age < 16) {
                out.push(person);
            }
        });

        return out;
    }

}]);

angular.module("myApp").filter('Chess', ['$sce', function ($sce) {

    return function (input) {

        var out;

        if (input == "wr") {
            out = "&#x2656;";
        } else if (input === "wkn") {
            out = "&#9816;";
        } else if (input === "wb") {
            out = "&#9815;";
        } else if (input === "wq") {
            out = "&#9813;"
        } else if (input === "wk") {
            out = "&#9812;";
        }

        console.log(out);

        return $sce.trustAsHtml(out);
    }
}]);