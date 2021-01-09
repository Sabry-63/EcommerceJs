// Parent Elements
const parnetProducts = document.querySelector(".products");
const noProduct = document.querySelector(".noProducts");

// Get Date
const products = JSON.parse(localStorage.getItem("allProducts"));
const myProduct = products.filter((i) => i.isMe == "Y");

// Insert The Products In Page
let insertProduct;
(insertProduct = function (myProduct) {
    // Loop In Products & Out Single Product
    let productUi = myProduct
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
                        <b>The Meal Is : <i>${item.meal}</i></b><br>
                        <b>The Size Is : <i>${item.size}</i></b>
                        <div class="btns text-right mt-3">
                            <button class="btn btn-md border fa fa-cart-plus" onclick="addToCart(${
                                item.id
                            })" id="addCart" title="Add To Card"></button>
                            <button class="btn btn-md border fa fa-heart mx-2 ${
                                item.loved === true ? "active" : ""
                            }" onclick="addToFavorite(${item.id})" title="Add To Favorite"></button>
                            <button class="btn btn-md border fa fa-list-alt" onclick="saveProductInformation(${index})"  title="Show Ditales"></button>
                            ${
                                item.isMe === "Y"
                                    ? `<button class='btn btn-md border fa fa-refresh mx-2' title='Update Product' onclick="updateProduct(${item.id})" ></button>`
                                    : ""
                            }
                            ${
                                item.isMe === "Y"
                                    ? `<button class='btn btn-md border fa fa-trash mx-2' title='Delete Product' onclick="deleteProduct(${item.id},${index})" ></button>`
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        })
        .join(" ");

    // Insert All Products In Page
    parnetProducts.innerHTML = productUi;
})(myProduct);

// Show Massage If You Don`t Have Products
function massageShow() {
    if (myProduct.length == 0) {
        noProduct.innerHTML = `<p class="massage">You Don\`t Have Any Product Created</p>`;
    }
}
massageShow();

// Delete Product
function deleteProduct(id, index) {
    // Select Index Form Id
    const selected = products
        .map((i) => {
            return i.id;
        })
        .indexOf(id);
    // Remove Element Is Find It Form All Prodcuts
    if (selected != -1) {
        products.splice(selected, 1);
    }
    // Remove Elemet Form My Products
    myProduct.splice(index, 1);

    // Seve The Chanage
    localStorage.setItem("allProducts", JSON.stringify(products));

    // Drow After Action
    insertProduct(myProduct);
    // Show Massage
    massageShow();
}
