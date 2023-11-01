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

h2.innerHTML = "<p>Deneme</p>"

//* Input elemanlarinin degeri value property'si ile degisir
document.getElementById("btn").value = "Submit"

const input = document.getElementById("input")
input.value = "JavaScript"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const lists = document.getElementsByTagName("li")

//! HTML Collection DOM'un sundugu bir veri yapısıdır.
//! Array-Like
console.log(lists) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log("SIZE:", lists.length)

//? FOR donguleri itere edilebilir
for (let li of lists) {
  console.log(li.textContent)
}
//? HTML Collection yapısından Array cevrilebilir.
const listArray = [...lists] //? Spread ile array e cevrildi.
listArray.forEach((li) => (li.style.color = "green"))

//? Array.from() metodu ile yine Array'e cevrim yapılabilir.
Array.from(lists).forEach((li) => (li.style.backgroundColor = "yellow"))

//? ORNEK
const sections = document.getElementsByTagName("section")
console.log(sections) //? HTMLCollection(2) [section.add-item, section.item-list]

sections[0].style.backgroundColor = "blue"
sections[0].style.color = "yellow"

sections[1].style.color = "blue"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myLists = document.getElementsByClassName("list")
console.log(myLists) //?HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log(myLists[3].innerText)

const section = document.getElementsByClassName("item-list") //? tek elemanli bir dizi
console.log(section[0])

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

// ! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer.

//? id almak için (#)
console.log(document.querySelector("#header"))

//? class almak için (.)
console.log(document.querySelector(".item-list"))

//? tag almak için ()
console.log(document.querySelector("h3"))

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
