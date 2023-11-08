//***********************************/
//*        CHECKOUT APP
//***********************************/

const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

deleteProducts.addEventListener("click", () => {
    if (confirm("Silmek istedigine eminmisiniz")) {
        products.textContent = "No product"
        products.classList.add("no-product")
        document.querySelector(".delete-div").style.display = "none"
    }

})