// Get Date Form localStorage
const allProducts = JSON.parse(localStorage.getItem("allProducts"));
const productIndex = JSON.parse(localStorage.getItem("indexProduct"));
// Sected Item 
const secletedProduct = allProducts.find((item,index) => index == productIndex);
// Parent Element Tn UI
const parentDitales = document.querySelector(".ditales .row");
// Insert Element IN UI
parentDitales.innerHTML = `
<div class="col-md-6">
    <div class="img-box"><img class="w-100 " src="${secletedProduct.img}" alt="${secletedProduct.name}" />
    </div> 
</div>
<div class="col-md-5 text-center text-md-left"> 
    <h3 class="h3 name mb-3">${secletedProduct.name}</h3>
    <p class="desc mb-3">${secletedProduct.desc}</p>
    <b class="d-block mb-2">The Meal Is : <i>${secletedProduct.meal}</i></b>
    <b class="d-block mb-2">The Price Is : <i>${secletedProduct.price}</i></b>
    <b class="d-block mb-2">The Size Is : <i>${secletedProduct.size}</i></b>
</div>
`;

