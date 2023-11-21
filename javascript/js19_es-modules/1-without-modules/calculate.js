console.log("CALCULATE.JS");

const calculatePrice = (product) => {
    return product.reduce((acc, product) => acc + product.price, 0)
}