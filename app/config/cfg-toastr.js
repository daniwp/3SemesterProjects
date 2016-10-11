/**
 * This is the configuration file for toastr.
 */

angular.module('myApp').config(function (toastrConfig) {

    angular.extend(toastrConfig, {
        positionClass: 'toast-bottom-left',
        timeOut: 1500
    });

});