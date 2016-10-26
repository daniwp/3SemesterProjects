'use strict';

var app = angular.module('myApp', []);

app.controller('CaseController', ['$scope', 'CaseFactory', function ($scope, CaseFactory) {

    $scope.titleCase = CaseFactory.titleCase("my example factory");
    $scope.camelCase = CaseFactory.camelCase("my example factory");
    $scope.dashCase = CaseFactory.dashCase("my example factory");

}]);

app.filter('checkmark', function () {
    return function (input) {
        return input.firstName + ", " + input.lastName;
    };
});

app.directive('loginForm', [function () {

    return {
        restrict: 'EA',
        templateUrl: 'login-form.html',
        scope: {
            title: '=title'
        },
        link: function (scope, element, attrs) {
            scope.loginTitle = attrs.title;
        }
    }
}]);

app.factory('CaseFactory', [function () {

    var titleCase = function (text) {
        var words = text.split(" ");
        var wordsReturn = [];

        for (var i = 0; i < words.length; i++) {

            words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1, words[i].length - 1);
            wordsReturn.push(words[i]);
        }

        return wordsReturn.join(" ");
    };

    var camelCase = function (text) {
        var words = text.split(" ");
        var wordsReturn = [];

        for (var i = 0; i < words.length; i++) {

            words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1, words[i].length - 1);
            wordsReturn.push(words[i]);
        }

        return wordsReturn.join("");
    };

    var dashCase = function (text) {
        var words = text.split(" ");
        return words.join("-");
    };

    return {
        titleCase: titleCase,
        camelCase: camelCase,
        dashCase: dashCase
    };

}]);