var boolean = true;
var string = "Hej";
var number = 13
var array = [2, 3, 5, 6, 6];
var object = {
    name: "daniel",
    age: 15
}

console.log(boolean, string, number, array, object);

var multiTypeArray = [true, 12, "hej", {name: "danny", age: 12}];
console.log(multiTypeArray);


var StudentTest = function (id, name) {
    this.id = id;
    this.name = name;
    this.toString1 = function () {
        return "Student ID = " + this.id + ", Student Name = " + this.name;
    };
}

var studentTest1 = new StudentTest(12, "Daniel");
var studentTest2 = new StudentTest(13, "Daniel1");
var studentTest3 = new StudentTest(14, "Daniel2");
var studentsArray = [studentTest1, studentTest2, studentTest3];


for (var s in studentsArray) {
    console.log(studentsArray[s].toString1())
}

var Student = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var StudentList = {
    students: [new Student("Daniel", 12, false), new Student("Hazem", 1732, true), new Student("Signe", 20, true)],
    getYoungestStudent: function () {
        var students = this.students;
        var youngestAge;
        for (var s in students) {
            if (students[s].age < youngestAge || s == 0) {
                youngestAge = students[s].age;
                var youngestStudent = students[s];
            }
        }
        return youngestStudent;
    },
    getFemaleStudents: function () {
        var femaleStudents = [];
        var students = this.students;
        for (var s in students) {
            if (students[s].gender == true) {
                femaleStudents.push(students[s]);
            }
        }
        return femaleStudents;
    }
};

console.log(StudentList.getFemaleStudents());
console.log(StudentList.getYoungestStudent());

console.log("==================================================");

function removeStudent(array, element) {
    maxLength = array.length;
    returnArr = [];
    for (var i = 0; i < maxLength; i++) {
        if (array[i] !== element) {
            returnArr.push(array[i]);
        }
    }
    return returnArr;

}

var student1 = new Student("Daniel", 22, false);
var student2 = new Student("Harry", 35, false);
var student3 = new Student("John", 31, false);
var student4 = new Student("Mogens", 45, false);
var student5 = new Student("Carl", 15, false);

var arr = [student1, student2, student3, student4, student5];

console.log(removeStudent(arr, student2));
console.log("==================================================")

arr.forEach(function (element) {
    if (element.age > 30) {
        console.log(element.name)
    }
});

console.log("==================================================")

function max() {
    var largest = 0;

    for (var o in arguments) {
        if (arguments[o] > largest) {
            largest = arguments[o];
        }
    }
    return largest;
}

console.log(max(1, "FUCK ALL NIGGERS SIEG HEIL 1488", student3, -278374));
console.log("==================================================")

function getDayName() {
    var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = new Date();
    return arr[day.getDay()];
}

console.log(getDayName());
console.log("==================================================")

function Animal(name, age, height, isMammel) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.isMammel = isMammel;
    this.toString = function() {
        return "Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Height: " + this.height + "\n" + "Mammel: " + this.isMammel + "\n";
    }
}

var panda = new Animal("Panda", 12, 35, true);
var bear = new Animal("Bear", 20, 120, true);
var snake = new Animal("Snake", 2, 3, false);

var animals = [panda,bear,snake];

animals.forEach(function(element){
    console.log(element.toString());
});

console.log(animals.filter(function(element) {
   return element.isMammel == true;
}));

console.log(animals.map(function(element){
    return element.name;
}));


