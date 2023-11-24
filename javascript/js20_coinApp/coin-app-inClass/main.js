//? Projenin style dosyasini ana js(main.js) kodumuza import ettik.
import "./scss/style.scss"
import { apiRequest } from "./src/apiRequest.js";



//? Sellector
const form = document.querySelector("header form")

//? Form icin submit event'nin tanimlanmasi
form.addEventListener("submit", (e) => {  
  e.preventDefault() //?tum sabmit davranislarini engelle
  getCoinData()  //? API' ye istek at
  e.target.reset()  //? formu silme davranisi calistir
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if (!input.trim()) {
    alert("Input can not be blank")    
  }else {
    apiRequest(input)
  }  
}
