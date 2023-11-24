//? Projenin style dosyasini ana js(main.js) kodumuza import ettik.
import "./scss/style.scss"

//? Sellector
const form = document.querySelector("header form")

//? Form icin submit event'nin tanimlanmasi
form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault() //?tum sabmit davranislarini engelle
  e.target.reset()  //? formu silme davranisi calistir
})
