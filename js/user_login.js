// Get Data Form LocalStorage
const getUser = localStorage.getItem("Username");
const getPassword = localStorage.getItem("Password");
const getEmail = localStorage.getItem("Email");

// Content List
const sign = document.querySelector("#sign");
const contentList = document.querySelector(".contentList");
const addProduct = document.querySelector(".addProduct");

// Check Date Form LoacalStorage
if (getUser !== null && getPassword !== null) {
    // Inclde Data In Page
    contentList.innerHTML = `
    <ul class="navbar-nav ml-auto user_list" >
    <li class="nav-item active">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span class="nav-link" >${getUser}</span>
    </li>
    <li class="nav-item parent_cart">
        <span class="counter_cart"></span>
        <i class="fa fa-cart-plus"></i>
        <ul class="drobdown-cart ">
            <div class="list_product"></div>
            <li><a class="nav-link" href="cart.html">Show All </a></li>
        </ul>
    </li>
    <li class="nav-item ">
        <a class="nav-link" href="favorites.html" >favorites</a>
    </li>
    <li class="nav-item ">
        <a class="nav-link" href="myProduct.html" >My Product</a>
    </li>
    <li class="nav-item ">
        <a class="nav-link" href="#" id="logout">Log Out</a>
    </li>
    </ul>
    `;

    // Check Your Loaction
    if (window.location.pathname == "/index.html") {
        // Show Add Product
        addProduct.innerHTML = `  <a class="addBtn" href="create.html"> <i class="fa fa-plus" title="Add Product" ></i></a>`;
    } 

    // Check List Is Show Or Not
    sign.classList.add("heddin");

    // Logout Button
    const btnLogout = document.querySelector("#logout");
    btnLogout.addEventListener("click", logout);
    function logout(e) {
        e.preventDefault();
        localStorage.clear();
        setTimeout(() => {
            window.location = "register.html";
        }, 1000);
    }
} else {
    // Heddin Btn Add Product
    addProduct.classList.add("heddin");
}
