//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

const header = document.querySelector("header")
const addButton = document.getElementById("btn")

//? 3. yontemle event tanimlandi
//* mouse header 'ın üzerine geldiginde ilgili function cagrilir.
header.onmouseover = function () {
  header.style.backgroundColor = "red"
  header.style.color = "white"
}
//* mouse header 'ın üzerinden ayrildiginda ilgili function cagrilir.
header.onmouseout = function () {
  header.style.backgroundColor = "transparent"
  header.style.color = "black"
}

//? 4.Yontem (addeventlistener metodu) ile event tanimlandi
//* add butonuna tiklanildgin event funksiyonu cagrilir
addButton.addEventListener("click", () => {
    alert("Buton tiklanildi")
  })
  
  const yazdir = () => {
    document.write("Hello from Turkey")
  }
  
  //? onload event'ı html ve css kodlarininin render edilmesinin hemen akabinde calisir.
  window.onload = yazdir()
  
  window.addEventListener("load", () => {
    document.querySelector("#input").focus()
  })
  