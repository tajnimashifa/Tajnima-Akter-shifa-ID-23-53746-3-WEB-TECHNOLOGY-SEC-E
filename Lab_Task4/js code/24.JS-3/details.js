
let age = localStorage.getItem("age");

let courses = JSON.parse(
    localStorage.getItem("courses")
);


let result = "<h2>Information</h2>";

result +=
    "Age : " + age + "<br><br>";

result +=
    "<b>Courses</b><br>";

for (let i = 0; i < courses.length; i++) {

    result += courses[i] + "<br>";

}

document.getElementById("output").innerHTML = result;



function goBack() {

    window.location.href = "index.html";

}