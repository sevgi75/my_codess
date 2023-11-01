console.log("***** SELECTORS *****")

document.title = "FS15 DOM Intro 🎯"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const header = document.getElementById("header")
console.log(header)

//? DOM bir obje modelidir
//? key = value
//? atribute isimleri => camelCase
// header.style.backgroundColor = "green"
// header.style.color = "white"
header.style =
  "background-color:green; color:white; font-size:20px; font-family:Tahoma"

const h2 = document.getElementById("add-new-item")
console.log(h2)

//* Text elemanin icerigini okuma
console.log(h2.textContent) //? ADD NEW ITEM
console.log(h2.innerText) //? ADD NEW ITEM
console.log(h2.innerHTML) //? ADD NEW ITEM

//* Text elemanin icerigini degistirme
h2.textContent = "ADD"
h2.innerText = "ADD ITEM"
h2.innerHTML = "<p>Deneme</p>"
h2.innerText = "<p>Deneme</p>"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
