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

//! CONSTANTS
const SHIPPING_PRICE = 25.99
const FREE_SHIPPING_LIMIT = 3000
const TAX_RATE = 0.18

//! SELECTORS
const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//! EVENTS
//? Delete Products Button event
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
    }else if (e.target.classList.contains("fa-minus")) {
        if (e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText--
            calculateProductPrice(e.target)
        }    
    }else if (e.target.classList.contains("fa-trash-can")) {
            e.target.closest(".product").remove()
            // calculateProductPrice(e.target)
    }
    
})

const calculateProductPrice = (btn) => {
    const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent;

    const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent

    const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price")

    productPrice.textContent = (discountedPrice * quantity).toFixed(2)
    calculateTotalPrice()
}

const calculateTotalPrice = () => {
    const prices = document.querySelectorAll("#product-price")


    //? Selected Product Hesabi
    const subtotal = [...prices].reduce((sum, price) => sum + Number(price.textContent), 0)

    //? Shipping
    const shippingPrice = subtotal >= FREE_SHIPPING_LIMIT || subtotal === 0 ? 0 : SHIPPING_PRICE

    //? tax hesabi
    const taxPrice = subtotal * TAX_RATE

    //? total deger
    const totalPrice = subtotal + shippingPrice + taxPrice


    //! Hesaplanan dgerlerin DOM'a basilmasi
    document.getElementById("selected-price").textContent = subtotal.toFixed(2)

    document.getElementById("shipping").textContent = shippingPrice.toFixed(2)

    document.getElementById("tax").textContent = taxPrice.toFixed(2)

    document.getElementById("total").textContent = totalPrice.toFixed(2)
}