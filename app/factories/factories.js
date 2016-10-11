"use strict";

/**
 * This is file where we define our factories used throughout the application.
 */

angular.module('myApp').factory('DataFactory', ['$http', '$q', 'cfg', function ($http, $q, cfg) {

    var data = {
        resource: {}
    };

    data.resource.getResource = function (id) {
        return get('api/resource/' + id);
    };

    data.resource.editResources = function (id, data) {
        return put('api/resource/' + id, data);
    };

    data.resource.addResources = function (data) {
        return post('api/resource', data);
    };

    data.resource.deleteResources = function (id) {
        return del('api/resource/' + id);
    };


    function get(url) {
        var q = $q.defer();
        $http.get(cfg.baseurl + url).then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    }

    function del(url) {
        var q = $q.defer();
        $http.delete(cfg.baseurl + url).then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    }

    function post(url, data) {
        var q = $q.defer();
        $http.post(cfg.baseurl + url, data).then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    }

    function put(url, data) {
        var q = $q.defer();
        $http.put(cfg.baseurl + url, data).then(function (response) {
            q.resolve(response.data);
        }, function (response) {
            q.reject(response.data);
        });
        return q.promise;
    }

    return data;
}]);

