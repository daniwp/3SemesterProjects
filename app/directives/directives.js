"use strict";

/**
 * This is the file where we declare our directives used throughout the application.
 */

angular.module('myApp').directive('exampleDirective', function () {
    return {
        restrict: 'EA',
        templateUrl: 'app/directives/templates/example-directive.html',
        scope: {
            value: "@"
        }
    }
});