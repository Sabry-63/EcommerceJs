// Products Elementes
const parnetProductsCart = document.querySelector(".products");
const noProduct = document.querySelector(".noProducts");

// Insert The Products In Page
function insertProduct(allProducts = []) {
    // Get Date For LocalStorage
    const productsCart = JSON.parse(localStorage.getItem("productsCart")) || allProducts;
    // Loop In Products & Out Single Product
    let productUi = productsCart
        .map((item, index) => {
            return `<div class="product mb-4 d-flex">
            <div class="row">
                <div class="col-md-4">
                    <img class='img-product w-100' src="${item.img}" alt="${item.name}" />
                </div>
                <div class="col-md-8 mt-3">
                    <div class="info text-md-left text-center">
                    <h3 class="name mb-3">${item.name}</h3>
                    <p class="desc mb-3">${item.desc}</p>
                        <div class="row">
                            <div class="col-md-8">
                                <b>The Meal Is : <i>${item.meal}</i></b>
                                <br>
                                <b>The quantity Is : <i>${item.quantity}</i></b>
                            </div>
                            <div class="col-md-4">
                                <div class="btns text-center text-md-right mt-3">
                                    <button class="btn btn-md border fa fa-trash mx-2" onclick="removeFormCart(${index})" id="addCart"></button>
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
    parnetProductsCart.innerHTML = productUi;
}
insertProduct();

// Get Date From LoacalStorage
const products = JSON.parse(localStorage.getItem("productsCart"));

// Show Massage If You Don`t Have Products
function massageShow() {
    if (products.length == 0) {
        noProduct.innerHTML = `<p class="massage">You Don\`t Have Any Product In Cart</p>`;
    }
}
massageShow();

// Remove Single Item
function removeFormCart(index) {
    // Count In Navbar
    const counter = document.querySelector(".counter_cart");
    // Check Products Is Not Empty
    if (products != null) {
        // Check The Quantity > 1
        if (products[index].quantity > 1) {
            products[index].quantity -= 1;
        } else {
            // Removed Product On Click
            products.splice(index, 1);
        }
        // Save Products After Remove
        localStorage.setItem("productsCart", JSON.stringify(products));
        // Insert Products After Remove
        insertProduct(products);
        // Count Products
        counter.innerHTML = products.length;
    }
    // Show Massage
    massageShow();
    return;
}
