
let courses = [];


function addCourse() {

    let course =
        document.getElementById("course").value;

    if (course == "") {

        alert("Please enter a course.");

        return;
    }

    courses.push(course);

////to clear the textbox after the course has been successfully added to the array.
    document.getElementById("course").value = "";

    alert("Course Added");

}



function showDetails() {

    let age =
        document.getElementById("age").value;

    localStorage.setItem("age", age);

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    window.location.href = "details.html";

}



//A JSON (JavaScript Object Notation) file is a plain text file used to store and exchange data.