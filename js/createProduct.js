// Vars Inputs
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productMealSelect = document.getElementById("productMeal");
const productSizeSelect = document.getElementById("productSize");
const textArea = document.getElementById("decs");
const selectImg = document.getElementById("uploadImg");

// Btn Create New Product
const btnAddProduct = document.getElementById("addProduct");

// Click To Create
btnAddProduct.addEventListener("click", createItem);

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
    // productImg = URL.createObjectURL(file);
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
}

// Create Products
function createItem(e) {
    e.preventDefault();

    // Check Inputs Value Are Not Empty
    if (
        productName.value == "" ||
        productPrice.value == "" ||
        productMealValue == undefined ||
        productSizeValue == undefined ||
        descContent == undefined
    ) {
        // Show The Massage
        alert("You Can`t Creat New Product");
    } else {
        // Get Old Product
        let allProdcut = JSON.parse(localStorage.getItem("allProducts"));
        let nameValue = productName.value;
        let priceValue = productPrice.value;

        // Create New Product
        let obj = {
            id: allProdcut.length + 1,
            desc: descContent,
            meal: productMealValue,
            name: nameValue,
            price: priceValue,
            quantity: 1,
            size: productSizeValue,
            img: productImg,
            isMe: "Y",
        };

        // Save New Product In LoaclStorage
        const newProdcuts = allProdcut ? [...allProdcut, obj] : [obj];
        localStorage.setItem("allProducts", JSON.stringify(newProdcuts));

        // Empty All Inputs
        productName.value = "";
        productPrice.value = "";
        productSizeSelect.value = "";
        productMealSelect.value = "";
        textArea.value = "";
        selectImg.value = "";
    }
}
