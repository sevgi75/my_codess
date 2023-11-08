//***********************************/
//*        CHECKOUT APP
//***********************************/

// function createEventsForPlusMinus() {
//     const minusBtns = document.querySelectorAll(".fa-minus")
//     const plusBtns = document.querySelectorAll(".fa-plus")
    
//     minusBtns.forEach((minus) =>{
//         minus.addEventListener("click", () => {
//             //? Eksilme islemler
//         })
//     })

//     plusBtns.forEach((plus) => {
//         plus.addEventListener("click", () => {
//             //? Artirma islemleri
//         })
//     })
// }

const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

deleteProducts.addEventListener("click", (e) => {
    if (confirm("Silmek istedigine eminmisiniz")) {
        products.textContent = "No product"
        products.classList.add("no-product")
        // document.querySelector(".delete-div").style.display = "none"
        e.target.parentElement.style.display = "none"
    }

})

// products.addEventListener("click", (e) => {
//     console.log(e.target);
//     if (e.target.classList.contains("fa-minus")) {
//         alert("minus")
//     }else if (e.target.classList.contains("fa-plus")) {
//         alert("plus")
//     } else if (e.target.classList.contains("fa-trash-can")) {
//         alert("remove")
//     } else {
//         alert("diger")
//     }
// })


products.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("fa-plus")) {
        //document.getElementById("quantity").innerText++
        e.target.previousElementSibling.innerText++
        calculateProductPrice(e.target)
    }
})

const calculateProductPrice = (btn) => {
    console.log(btn.closest(".product-info").querySelector("#discounted-price"));
}