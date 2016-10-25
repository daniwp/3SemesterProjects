angular.module('examApp', [])
    .controller('ExamController', ['$scope', function ($scope) {

        $scope.studentsInfo = {};
        $scope.studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        $scope.studentsInfo.students = [];
        $scope.studentsInfo.students.push({
            studentId: 100,
            name: "Peter Hansen",
            grades: [{grade: "10"}, {grade: "12"}, {}]
        });
        $scope.studentsInfo.students.push({
            studentId: 101,
            name: "Jan Olsen",
            grades: [{grade: "7"}, {grade: "10"}, {}]
        });
        $scope.studentsInfo.students.push({
            studentId: 102,
            name: "Gitte Poulsen",
            grades: [{grade: "7"}, {grade: "7"}, {}]
        });
        $scope.studentsInfo.students.push({
            studentId: 103,
            name: "John McDonald",
            grades: [{grade: "10"}, {}, {grade: "7"}]
        });
    }]);