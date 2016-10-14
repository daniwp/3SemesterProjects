/**
 * Created by HazemSaeid on 14-10-2016.
 */
var app = angular.module('MyApp',[]);
app.controller('MemberController', ['$http', '$scope', function($http, $scope) {
    $http.get('http://localhost:8084/AngularJquery/api/member')
        .then(
            function(response){
                console.log(response.data);
                $scope.members = response.data;
            },
            function(response){
                console.log(response);
            }
        );

}]);