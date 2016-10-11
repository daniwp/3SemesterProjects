var myApp = angular.module('DemoApp', []);

myApp.controller('FeedbackController', ['$scope', function ($scope) {
    var feedback = {};
    $scope.locations = ["New York", "Vancouver", "Atlantis", "Blackpool", "Copenhagen"];
    $scope.satisfactionValues = ["Very satisfied", "Satisfied", "Didn't care", "Dissatisfied", "Very dissatisfied"];
    $scope.emotions = ["Angry", "Sad", "Happy", "Ambivalent"];

    $scope.feedback = {};
    $scope.feedback.name;
    $scope.feedback.gender;
    $scope.feedback.email;
    $scope.feedback.location;
    $scope.feedback.comments;
    $scope.feedback.satisfactionValue;
    $scope.feedback.selectedEmotions = [];//['Happy'];

    $scope.toggleSelection = function toggleSelection(emotion) {
        var idx = $scope.feedback.selectedEmotions.indexOf(emotion);

        // is currently selected
        if (idx > -1) {
            $scope.feedback.selectedEmotions.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.feedback.selectedEmotions.push(emotion);
        }
    };

    $scope.setValue = function (value) {
        $scope.feedback.satisfactionValue = value;
    };

    $scope.setLocation = function (location) {
        $scope.feedback.location = location;
    }
}]);