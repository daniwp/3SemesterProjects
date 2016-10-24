angular.module('myApp').controller('HomeController', ['PersonFactory', function (PersonFactory) {


    $scope.edit = false;
    $scope.editId = 1;

    $scope.setEdit = function (id) {
        console.log(edit);
        $scope.getById(id);
    };

    $scope.getAll = function () {
        PersonFactory.getAll()
            .then(function (response) {
                $scope.persons = response;
            }, function (response) {
            });
    };
    $scope.getAll();

    $scope.getById = function (id) {
        PersonFactory.getById(id)
            .then(function (response) {
                $scope.newperson = response;
                $scope.edit = true;
                $scope.editId = id;
            }, function (response) {
                console.log(response);
            });
    };

    $scope.editPerson = function (id) {
        $scope.newperson.id = id;
        PersonFactory.editPerson(id, $scope.newperson)
            .then(function (response) {
                $scope.edit = false;
                $scope.newperson = {};
                $scope.getAll();
            }, function (response) {
                console.log(response);
            });
    };

    $scope.addPerson = function () {
        PersonFactory.addPerson($scope.newperson)
            .then(function (response) {
                $scope.newperson = {};
                $scope.getAll();
            }, function (response) {
            });
    };

    $scope.deletePerson = function (id) {
        PersonFactory.deletePerson(id)
            .then(function (response) {
                $scope.getAll();
            }, function (response) {
            });
    };
}]);


angular.module('myApp').factory('PersonFactory', ['$http', '$q', function ($http, $q) {

    var baseurl = "http://localhost:8084/RESTExerciseDay1Del2/api/person";

    var getAll = function () {
        var q = $q.defer();
        $http.get(baseurl)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
    };

    var getById = function (id) {
        var q = $q.defer();
        $http.get(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
    };

    var editPerson = function (id, newperson) {
        var q = $q.defer();
        $http.put(baseurl, JSON.stringify(newperson))
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
    };

    var addPerson = function (newperson) {
        var q = $q.defer();
        $http.post(baseurl, JSON.stringify(newperson))
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
    };

    var deletePerson = function (id) {
        var q = $q.defer();
        $http.delete(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
    };

    return {
        getAll: getAll,
        getById: getById,
        editPerson: editPerson,
        addPerson: addPerson,
        deletePerson: deletePerson
    }
}]);