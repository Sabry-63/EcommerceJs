// Get Date Form Sign In Form
const signInUserName = document.querySelector("#userNameSginIn");
const signInPassword = document.querySelector("#userPassword");
const signInBtn = document.querySelector("#btnSignIn");

// Get Data Form LocalStorage
const getUser = localStorage.getItem("Username");
const getPassword = localStorage.getItem("Password");
const getEmail = localStorage.getItem("Email");

signInBtn.addEventListener("click", signInUser);
function signInUser(e) {
    // Stop Reload On Click Button
    e.preventDefault();
    if (signInUserName.value !== "" && signInPassword.value !== "") {
        // Check The Data Form  Inpus === Date For Loaclstorage
        if (signInUserName.value !== getUser) {
            // Show Massage Wrong Your User Name
            alert("Your User Name Is Wrong");
        } else if (signInPassword.value !== getPassword) {
            // Show Massage Wrong Your  Password
            alert("Your Password Is Wrong");
        } else {
            // Go To Home Page
            setTimeout(() => {
                window.location = "index.html";
            }, 1000);
        }
    } else {
        sign.classList.remove("heddin");
        alert("Please Enter Your Date");
    }
}
