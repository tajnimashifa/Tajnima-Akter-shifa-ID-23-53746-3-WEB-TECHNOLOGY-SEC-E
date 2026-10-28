const username = document.getElementById("username");
const password = document.getElementById("password");
const nextBtn = document.getElementById("nextBtn");

let firstField = null;

// Username clicked first
username.addEventListener("focus", function () {
    if (!firstField) {
        firstField = "username";
        password.disabled = true;
    }
});

// Password clicked first
password.addEventListener("focus", function () {
    if (!firstField) {
        firstField = "password";
        username.disabled = true;
    }
});

// Username typing
username.addEventListener("input", function () {

    if (firstField === "username") {

        if (username.value.trim() === "") {
            password.disabled = true;
        } else {
            password.disabled = false;
        }

    }

});

// Password typing
password.addEventListener("input", function () {

    if (firstField === "password") {

        if (password.value.trim() === "") {
            username.disabled = true;
        } else {
            username.disabled = false;
        }

    }

});

// Next button
nextBtn.addEventListener("click", function () {

    if (username.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill both fields.");
        return;
    }

    sessionStorage.setItem("username", username.value);
    sessionStorage.setItem("password", password.value);

    window.location.href = "page2.html";

});