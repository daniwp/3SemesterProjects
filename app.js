angular.module("myApp", []);

angular.module("myApp").controller("RandomController", ['$scope', 'RandomFactory', function ($scope, RandomFactory) {

    $scope.randomNumber = RandomFactory.getRandomNumber(Math.random() * 1000000000);
    $scope.randomString = RandomFactory.getRandomString(Math.random() * 10);
}]);

angular.module("myApp").controller("CountryController", ['$scope', 'CountryFactory', function ($scope, CountryFactory) {

    $scope.showAll = false;
    $scope.showAfrica = false;
    $scope.showUK = false;

    $scope.setShowAfrica = function () {
        $scope.showAfrica = false;
    };

    $scope.setShowAll = function () {
        $scope.showAll = false;
    };

    $scope.setShowUK = function () {
        $scope.showUK = false;
    };

    $scope.getCountries = function () {
        CountryFactory.getAll().then(function (response) {
            $scope.countries = response;
        }, function (response) {
            return response;
        });

        $scope.showAll = true;
    };

    $scope.getAfrica = function () {
        CountryFactory.getFromRegion().then(function (response) {
            $scope.africa = response;
        }, function (response) {
            return response;
        });

        $scope.showAfrica = true;
    };

    $scope.getUK = function () {
        CountryFactory.getFromCode().then(function (response) {
            $scope.uk = response;
        }, function (response) {
            return response;
        });

        $scope.showUK = true;
    };
}]);

angular.module("myApp").factory("RandomFactory", [function () {

    var getRandomNumber = function (n) {
        return Math.floor(Math.random() * n) + 1;
    };

    var getRandomString = function (n) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = n;
        var randomstring = '';

        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }

        return randomstring;
    };

    return {
        getRandomNumber: getRandomNumber,
        getRandomString: getRandomString
    }
}]);

angular.module("myApp").factory("CountryFactory", ['$http', '$q', function ($http, $q) {

    var getAll = function () {
        var q = $q.defer();
        $http.get("https://restcountries.eu/rest/v1/all").then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    };

    var getFromRegion = function () {
        var q = $q.defer();
        $http.get("https://restcountries.eu/rest/v1/region/africa").then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    };

    var getFromCode = function () {
        var q = $q.defer();
        $http.get("https://restcountries.eu/rest/v1/alpha?codes=gb").then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    };

    return {
        getAll: getAll,
        getFromRegion: getFromRegion,
        getFromCode: getFromCode
    }
}]);