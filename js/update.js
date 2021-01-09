// Vars Inputs
let idProduct = JSON.parse(localStorage.getItem("editProduct"));
let products = JSON.parse(localStorage.getItem("allProducts"));
let selectProduct = products.find((i) => i.id == idProduct);
let oldImg = document.getElementById("oldImg");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productMealSelect = document.getElementById("productMeal");
const productSizeSelect = document.getElementById("productSize");
const textArea = document.getElementById("decs");
const selectImg = document.getElementById("uploadImg");

// Set Old Date In Inupts
oldImg.src = selectProduct.img;
productName.value = selectProduct.name;
productPrice.value = selectProduct.price;
productMealSelect.value = selectProduct.meal;
productSizeSelect.value = selectProduct.size;
textArea.value = selectProduct.desc;

// Btn Create New Product
const btnUpdate = document.getElementById("updateProduct");

// Get Your Descrabtion
let descContent;
textArea.addEventListener("change", () => {
    descContent = decs.value;
});

// Select Your Size
let productSizeValue;
productSizeSelect.addEventListener("change", (e) => {
    productSizeValue = e.target.value;
});

// Select Your Meal
let productMealValue;
productMealSelect.addEventListener("change", (e) => {
    productMealValue = e.target.value;
});

// Upload Img Event
selectImg.addEventListener("change", uploadImg);
let productImg;
function uploadImg() {
    const file = this.files[0];

    // Check The Type Img
    if (file.type != "image/jpeg" && file.type != "image/jpg" && file.type != "image/png") {
        alert("The Img Of Type Not Supprt");
        return;
    }

    // Check The Size Img
    if (file.size > 2 * 1024 * 1024) {
        alert("Your Img Size Is Exced 2MG");
        return;
    }
    // Save URL Img In Var
    getImgBase64(file);
}

// Change The Img Type
function getImgBase64(file) {
    // Create A Read File
    let reader = new FileReader();
    // Read File As URL
    reader.readAsDataURL(file);
    // Return URL & Save To Var
    reader.onload = function () {
        productImg = reader.result;
    };
    // If File Has Error Show Massage
    reader.onerror = function () {
        alert("Error !!");
    };
    reader.onloadend = function () {
        oldImg.src = productImg;
    };
}

// Click To Update
btnUpdate.addEventListener("click", updateProduct);

// Update Products
function updateProduct(e) {
    e.preventDefault();

    // Set New Date In Inupts
    selectProduct.img = oldImg.src;
    selectProduct.name = productName.value;
    selectProduct.price = productPrice.value;
    selectProduct.meal = productMealSelect.value;
    selectProduct.size = productSizeSelect.value;
    selectProduct.desc = textArea.value;

    // Save New Product In LoaclStorage
    localStorage.setItem("allProducts", JSON.stringify(products));

    // Go To Home Page
    window.location = "index.html";
}
