'use strict';

angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'toastr'
]);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/');

    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home/home.html',
            controller: 'HomeController'
        })
        .state('pageA', {
            url: '/page-a',
            templateUrl: 'app/views/page-a/page-a.html'
        })
        .state('pageB', {
            url: '/page-b',
            templateUrl: 'app/views/page-b/page-b.html'
        })
        .state('pageC', {
            url: '/page-c',
            templateUrl: 'app/views/page-c/page-c.html'
        })
});