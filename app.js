angular.module("myApp", []);

angular.module("myApp").controller("DirectiveController", ['$scope', function ($scope) {

    $scope.user = {
        companyName: "Coolest Company on Earth",
        companyUrl: "http://www.cool.cooler.com",
        created: new Date()
    }
}]);

angular.module("myApp").directive("formatCompany", function () {
    return {
        restrict: 'EA',
        templateUrl: 'format-company.html'
    }
});

angular.module("myApp").directive('linkDemoDir', [function () {
    return {
        restrict: 'EA',
        link: function (scope, element, attrs) {

            var attributeParts = attrs.linkDemoDir.split(',');

            scope.pictures = [];

            for (var i = 0; i < attributeParts.length; i++) {

                scope.pictures.push(attributeParts[i]);
                console.log(scope.pictures);

            }
        }
    };
}]);