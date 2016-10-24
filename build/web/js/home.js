
angular.module('myApp').controller('HomeController', ['$scope', '$http', function ($scope, $http) {

        $scope.baseurl = "http://localhost:8084/RESTExerciseDay1/api/quote";

        $scope.getRandom = function () {
            $http.get($scope.baseurl + '/random')
                    .then(function (response) {
                        $scope.quote = response.data.quote;
                    }, function (response) {
                        alert("oops");
                    });
        };

        $scope.getRandom();

        $scope.getById = function (id) {
            $http.get($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.quote = response.data;
                    }, function (response) {
                    });
        };

        $scope.updateQuote = function (id, quote) {
            $http.put($scope.baseurl + "/" + id, JSON.stringify({"quote": quote}))
                    .then(function (response) {
                        $scope.quote = response.data.quote;
                    }, function (response) {
                        console.log(response);
                    });
        };

        $scope.addQuote = function (quote) {
            $http.post($scope.baseurl + "/add", quote)
                    .then(function (response) {
                        $scope.quote = response.data.quote;
                    }, function (response) {
                    });
        };

        $scope.deleteQuote = function (id) {
            $http.delete($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.quote = response.data.quote;
                    }, function (response) {
                    });
        };

    }]);