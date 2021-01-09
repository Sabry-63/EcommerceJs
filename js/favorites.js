// Products Elementes
const parnetproductsFavorite = document.querySelector(".products");
const noProduct = document.querySelector(".noProducts");

// Insert The Products In Page
function insertProduct(allProducts = []) {
    // Get Date For LocalStorage
    const productsFavorite = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
    // Loop In Products & Out Single Product
    let productUi = productsFavorite
        .map((item, index) => {
            return `<div class="product mb-4 d-flex">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <img class='img-product w-100' src="${item.img}" alt="${item.name}" />
                </div>
                    <div class="col-md-8">
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
                                <div class="btns text-md-right mt-3">
                                    <button class="btn btn-md border fa fa-trash mx-2" onclick="removeFormCart(${index},${item.id})" id="addCart"></button>
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
    parnetproductsFavorite.innerHTML = productUi;
}
insertProduct();

// Define Date
const products = JSON.parse(localStorage.getItem("productsFavorite"));

console.log(products);
// Show Massage If You Don`t Have Products
function massageShow() {
    if (products == null || products.length == 0) {
        noProduct.innerHTML = `<p class="massage">You Don\`t Have Any Favorites
        Product</p>`;
    }
}
massageShow();

// Remove Single Item
function removeFormCart(index, id) {
    // Check Products Is Not Empty
    if (products != null) {
        // Get Date From LoacalStorage
        const allProductsUi = JSON.parse(localStorage.getItem("allProducts"));

        // Selected Product
        let selectItem = products.find((item) => item.id === id);

        // Loop In Products
        allProductsUi.map((item) => {
            // Get Selected Product
            if (item.id === selectItem.id) {
                // Remove Loved From Product
                item.loved = false;
                // Check & Remove Product
                if (item.loved === false) {
                    products.splice(index, 1);
                }
            }
        });

        // Save Products After Remove
        localStorage.setItem("productsFavorite", JSON.stringify(products));
        localStorage.setItem("allProducts", JSON.stringify(allProductsUi));

        // Insert Products After Remove
        insertProduct(products);

        // Show Massage
        massageShow();
    }
}
