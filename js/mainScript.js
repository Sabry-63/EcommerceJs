// Products Elementes
const parnetProducts = document.querySelector(".products");

const products = JSON.parse(localStorage.getItem("allProducts"));
const productsFormData = productsDB;

// Check Data In LocalStorage
if (products == null) {
    const AsetllProductsInDate = localStorage.setItem("allProducts", JSON.stringify(productsDB));
}

// Insert The Products In Page
let insertProduct;
(insertProduct = function (products) {
    // Loop In Products & Out Single Product
    let productUi = products
        .map((item, index) => {
            return `<div class="product mb-4 d-flex">
            ${item.isMe === "Y" ? "<img src='images/products/new.png' class='create'>" : ""}
            <div class="row">
                <div class="col-md-4 mb-4">
                    <img class='img-product w-100' src="${item.img}" alt="${item.name}" />
                </div>
                <div class="col-md-8">
                    <div class="info text-md-left text-center">
                    <h3 class="h3 name mb-3">${item.name}</h3>
                    <p class="desc mb-3">${item.desc}</p>
                    <div class="row">
                        <div class="col-md-6">
                            <b>The Meal Is : <i>${item.meal}</i></b><br>
                            <b>The Size Is : <i>${item.size}</i></b>
                        </div>

                        <div class="col-md-6">
                            <div class="btns text-center text-md-right mt-3">
                                <button class="btn btn-md border fa fa-cart-plus" onclick="addToCart(${item.id})" id="addCart" title="Add To Card"></button>
                                <button class="btn btn-md border fa fa-heart mx-2 ${item.loved === true ? "active" : ""}" onclick="addToFavorite(${item.id})" title="Add To Favorite"></button>
                                <button class="btn btn-md border fa fa-list-alt" onclick="saveProductInformation(${index})"  title="Show Ditales"></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;
        })
        .join(" ");

    // Insert All Products In Page
    parnetProducts.innerHTML = productUi;
})(products || productsFormData);

// Click To Btn Add Product To Cart
const addBtn = document.querySelector("#addCart");
addBtn.addEventListener("click", checkLogin);

// Function Checked Login User
function checkLogin(e) {
    e.preventDefault();
    if (getUser === null) {
        window.location = "register.html";
    } else {
        counter.classList.add("show");
    }
}

// Save Product Information In LocalStorage
function saveProductInformation(index) {
    localStorage.setItem("indexProduct", index);
    window.location = "ditales.html";
}

// Search Of Input By Name
const inputSeacrh = document.querySelector("#seacrh");

//
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";
recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    inputSeacrh.value = transcript;
    searchByName(transcript, products);
});

const searchSpeech = document.querySelector(".shearch-speech");

searchSpeech.addEventListener("click", () => {
    // recognition.addEventListener("end", recognition.start);
    recognition.start();
});

// Get What You Write
inputSeacrh.addEventListener("keyup", (e) => {
    searchByName(e.target.value, products);
    if (e.target.value.trim() === "") {
        insertProduct(products);
    }
});

// Back Your Ruslt
function searchByName(name, myList) {
    const lists = myList.filter((item) => item.name.toLowerCase().indexOf(name) !== -1);
    insertProduct(lists);
}

// Add Prodects To Favorite Page
allProductsFavorite = JSON.parse(localStorage.getItem("productsFavorite")) ? JSON.parse(localStorage.getItem("productsFavorite")) : [];

function addToFavorite(id) {
    if (getUser === null) {
        window.location = "register.html";
        console.log("y");
    } else {
        console.log("n");

        // Select Items On Clicl
        const selectItem = products.find((item) => item.id === id);

        // Add Key To Elements
        selectItem.loved = true;

        // Get All Products In Cart & Join In Array
        allProductsFavorite = [...allProductsFavorite, selectItem];

        // Set In LocalStorage
        let uniqueProducts = getUinque(allProductsFavorite, "id");
        localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));

        products.map((item) => {
            if (item.id === selectItem.id) {
                item.loved = true;
            }
        });

        localStorage.setItem("allProducts", JSON.stringify(products));
        insertProduct(products);
    }
}

// Filter By Size
let check = document.querySelectorAll(".check");
// Loop In All Inputs
check.forEach((item) => {
    // Event
    item.addEventListener("change", () => {
        // Get All Product
        let getProduct = products || productsFormData;
        // Check The Val
        if (item.value === "all") {
            // Set Product After Filter
            insertProduct(getProduct);
        } else {
            // Get Itmes By Size
            getProduct = getProduct.filter((i) => i.size === item.value);
            // Set Product After Filter
            insertProduct(getProduct);
        }
    });
});
