
angular.module('myApp').controller('HomeController', ['$scope', '$http', function ($scope, $http) {


        $scope.baseurl = "http://localhost:8084/RESTExerciseDay1Del2/api/person";
        $scope.edit = false;
        $scope.editId = 1;

        $scope.setEdit = function (id) {
            console.log(edit);
            $scope.getById(id);
        };

        $scope.getAll = function () {
            $http.get($scope.baseurl)
                    .then(function (response) {
                        $scope.persons = response.data;
                    }, function (response) {
                    });
        };
        $scope.getAll();

        $scope.getById = function (id) {
            $http.get($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.newperson = response.data;
                        $scope.edit = true;
                        $scope.editId = id;
                    }, function (response) {
                        console.log(response);
                    });
        };

        $scope.editPerson = function (id) {
            $scope.newperson.id = id;
            $http.put($scope.baseurl, JSON.stringify($scope.newperson))
                    .then(function (response) {
                        $scope.edit = false;
                        $scope.newperson = {};
                        $scope.getAll();
                    }, function (response) {
                        console.log(response);
                    });
        };

        $scope.addPerson = function () {
            $http.post($scope.baseurl, JSON.stringify($scope.newperson))
                    .then(function (response) {
                        $scope.newperson = {};
                        $scope.getAll();
                    }, function (response) {
                    });
        };

        $scope.deletePerson = function (id) {
            $http.delete($scope.baseurl + "/" + id)
                    .then(function (response) {
                        $scope.getAll();
                    }, function (response) {
                    });
        };
    }]);
