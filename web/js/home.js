angular.module('myApp').controller('HomeController', ['QuoteFactory', function (QuoteFactory) {

    $scope.getRandom = function () {
        QuoteFactory.getRandom()
            .then(function (response) {
                $scope.quote = response.quote;
            }, function (response) {
                alert(response);
            });
    };

    $scope.getById = function (id) {
        QuoteFactory.getById(id)
            .then(function (response) {
                $scope.quote = response;
            }, function (response) {
                alert(response);
            });
    };

    $scope.updateQuote = function (id, quote) {
        QuoteFactory.updateQuote(id, quote)
            .then(function (response) {
                $scope.quote = response.quote;
            }, function (response) {
                alert(response);
            });
    };

    $scope.addQuote = function (quote) {
        QuoteFactory.addQuote(quote)
            .then(function (response) {
                $scope.quote = response.quote;
            }, function (response) {
                alert(response);
            });
    };

    $scope.deleteQuote = function (id) {
        QuoteFactory.deleteQuote(id)
            .then(function (response) {
                $scope.quote = response.quote;
            }, function (response) {
                alert(response);
            });
    };

}]);

angular.module("myApp").factory("QuoteFactory", ['$http', '$q', function ($http, $q) {

    var baseurl = "http://localhost:8084/RESTExerciseDay1/api/quote";

    var getRandom = function () {
        var q = $q.defer();
        $http.get(baseurl + '/random')
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };


    var getById = function (id) {
        var q = $q.defer();
        $http.get(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var updateQuote = function (id, quote) {
        var q = $q.defer();
        $http.put(baseurl + "/" + id, JSON.stringify({"quote": quote}))
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var addQuote = function (quote) {
        var q = $q.defer();
        $http.post(baseurl + "/add", quote)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    var deleteQuote = function (id) {
        var q = $q.defer();
        $http.delete(baseurl + "/" + id)
            .then(function (response) {
                q.resolve(response.data);
            }, function (response) {
                q.reject(response.data);
            });
        return q.promise;
    };

    return {
        getRandom: getRandom,
        getById: getById,
        updateQuote: updateQuote,
        addQuote: addQuote,
        deleteQuote: deleteQuote
    }
}]);