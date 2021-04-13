// Check Login For Add Products
const cartList = document.querySelector(".list_product");
const counter = document.querySelector(".counter_cart");

// Add Products To Cart Page
productAdded = JSON.parse(localStorage.getItem("productsCart"))
    ? JSON.parse(localStorage.getItem("productsCart"))
    : [];


// Check Products Is Not Empty
(function countAuto() {
    if (productAdded != null) {
        productAdded.map((product) => {
            // Add Items To List Products
            cartList.innerHTML += `<li>${product.name} quantity:${product.quantity}</li>`;

            // Show Conuter
            counter.innerHTML = productAdded.length;
            counter.classList.add("show");
        });
    }
})();

// Add Product To Cart
function addToCart(id) {
    // Select Items On Clicl
    const selectItem = products.find((item) => item.id === id);

    // Count Single Product
    let IsInCart = productAdded.some((item) => item.id === selectItem.id);

    // Check Items Is Not Empty
    if (IsInCart) {
        productAdded = productAdded.map((item) => {
            if (item.id === selectItem.id) item.quantity += 1;
            return item;
        });
    } else {
        productAdded.push(selectItem);
    }

    // Add Items To List Products
    cartList.innerHTML = "";
    productAdded.forEach((product) => {
        cartList.innerHTML += `<li>${product.name} quantity:${product.quantity}</li>`;
    });

    // Countser Items In The List
    const cartListCounter = document.querySelectorAll(".list_product li");
    counter.innerHTML = cartListCounter.length;

    // Save To LocalStorage
    localStorage.setItem("productsCart", JSON.stringify(productAdded));
}

// Unique Product
function getUinque(arr, filterId) {
    let unique = arr
        .map((item) => item[filterId])
        .map((item, index, uinArr) => uinArr.indexOf(item) === index && index)
        .filter((item) => arr[item])
        .map((item) => arr[item]);
    return unique;
}

// Open Cart Products
const btnCart = document.querySelector(".fa-cart-plus");
const listProducts = document.querySelector(".drobdown-cart");

// Click To Btn Products Cart
btnCart.addEventListener("click", openCart);

// Function Toggler List Products Cart
function openCart(e) {
    e.preventDefault();
    if (cartList.innerHTML != "") {
        listProducts.classList.toggle("show");
    }
}

// Update Product
function updateProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "update.html";
}
