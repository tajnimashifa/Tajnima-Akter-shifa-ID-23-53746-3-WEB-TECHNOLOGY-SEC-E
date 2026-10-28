
let courses = [];



function showDemo() {





    let university = "AIUB";
    let semester = "Spring";


    let name =
        document.getElementById("name").value;

    let age =
        document.getElementById("age").value;


    let fruits = [
        "Apple",
        "Mango",
        "Orange"
    ];



    fruits.push(name);

    document.getElementById("output").innerHTML =

        "<h2>Student Information</h2>" +

        "University : " + university + "<br>" +

        "Semester : " + semester + "<br><br>" +

        "Name : " + name + "<br>" +

        "Age : " + age + "<br><br>" +

        "<b>Array Elements</b><br>" +

        fruits.join("<br>");



    document.getElementById("output1").innerHTML =
        "Hello Students!";


    document.getElementById("output2").innerHTML =
        "Line 1<br>" +
        "Line 2<br>" +
        "Line 3";

}


function addCourse() {

    let course =
        document.getElementById("course").value;

    if (course == "") {

        alert("Please Enter a Course Name");

        return;

    }

    courses.push(course);

//to clear the textbox after the course has been successfully added to the array.
    document.getElementById("course").value = "";

    alert("Course Added Successfully");

}


function showCourses() {

    let result = "<h2>Course List</h2>";

    for (let i = 0; i < courses.length; i++) {

        result += courses[i] + "<br>";

    }

    document.getElementById("output3").innerHTML = result;

}