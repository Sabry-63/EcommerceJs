// User Data
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const btnSubmit = document.querySelector("#signup");

// Click To Button
btnSubmit.addEventListener("click", signUp);

// Save The Data Form User
function signUp(e) {
    // Stop The Reload On Clicked The Button
    e.preventDefault();
    // Check Inputs Is Not Empty
    if (userName.value !== "" && password.value !== "" && email.value !== "") {
        // Save Data In LocalStorage
        localStorage.setItem("Username", userName.value);
        localStorage.setItem("Password", password.value);
        localStorage.setItem("Email", email.value);
        // Go To Sign In Page
        setTimeout(() => {
            window.location = "login.html";
        }, 1000);
    } else {
        // Show The Massage If The Input Enmpty
        alert("Please Enter Your Date");
    }
}
