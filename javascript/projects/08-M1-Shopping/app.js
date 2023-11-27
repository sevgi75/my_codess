const btnDivs = document.getElementById("btns")
const productDivs = document.getElementById("products")
const searchInput = document.getElementById("searchInput")
const categoryTitle = document.getElementById("category")

const btnColors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
]

let products = []

const getProducts = async () => {
    const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/")
    const data = await res.json()
    console.log(data);
    products = data
    category()
}
getProducts()
const category = () => {
    console.log(products);
    // const categoryArr = products.map(item => item.category)
    // console.log(categoryArr);
    //& 1.yol
    // let categoryArr = ["all"]
    // products.forEach(item => {
    //     if (!categoryArr.includes(item.category)) {
    //         categoryArr.push(item.category)
    //     }
    // })
    // console.log(categoryArr);
    //& 2.yol
    // const categoryArr = products.reduce((acc, item) => {
    //     if (!acc.includes(item.category)) {
    //         acc.push(item.category)
    //     }
    //     return acc
    // }, ["all"])
    // console.log(categoryArr);
    //& 3. yol
    const categoryArr = ["all", ...new Set(products.map(item => item.category))]
    console.log(categoryArr);

    categoryArr.forEach((category, i) => {
        const btn = document.createElement("button")
        btn.innerText = category.toUpperCase()
        btn.classList.add("btn", `btn-${btnColors[i]}`)
        btnDivs.appendChild(btn)
    })
}