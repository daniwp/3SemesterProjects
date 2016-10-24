"use strict";

angular.module('myApp', [
    'ui.router',
    'ui.bootstrap'
]);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/');

    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController'
            });
});