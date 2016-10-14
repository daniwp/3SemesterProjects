
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
                templateUrl: 'app/views/home/home.html',
                controller: 'ListController'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'app/views/add/add.html',
                controller: 'AddController'
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: 'app/views/edit/edit.html',
                controller: 'EditController'
            });
});