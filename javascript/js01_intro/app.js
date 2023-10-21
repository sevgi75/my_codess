// console.log("Harici APP.js kodu calisti")

// document.write("DOM'a yazı bas")

// karar = confirm("Devam etmek ister misiniz: E/H")
// console.log(karar)
// if (karar == true) {
//     console.log("EVET basildi")
// }   else {
//     console.log("HAYIR'a basildi")
// }

// console.warn("UYARI")

// console.error("HATA")

//* DEGISKEN TANIMLAMA

const num1 = 5
let num2 = 6

console.log(num1)
console.log(typeof num1)

console.log(num2)
console.log(typeof num2)

//! Uncaught TypeError: Assignment to constant variable.
// num1 = num1 + 1

num2 = num2 + 1
console.log(num2)

const isim = "Clarusway"
console.log(isim)
console.log(typeof isim1)   // undefined verir

const pi = 3.14
console.log(pi)
console.log(typeof pi)

const dogruMu = true
console.log(dogruMu)
console.log(typeof dogruMu)

const sayi = 5
// sayi = 7

let dil = "Java"
dil = "Javascript"
console.log(dil)
console.log(typeof dil)

dil = 1
console.log(dil)
console.log(typeof dil)

dil = true
console.log(dil)
console.log(typeof dil)

dil = null
console.log(dil)
console.log(typeof dil)

let sayac
console.log(sayac)
console.log(typeof sayac)

sayac = true
console.log(typeof sayac)

kalanBorc = 15.5
console.log(kalanBorc)
console.log(typeof kalanBorc)

// let sayac = 2 hata verir tekrar aynı isimle degisken tanımlanamaz

//var ile let arasindaki en büyük fark scope (gecerli olduklari bölge farkidir)
var fiyat
fiyat = 23
console.log(fiyat)

fiyat = 19.99
console.log("Fiyat:" + fiyat )

var fiyat = "ücretsiz"
console.log("FIYAT:" + fiyat)

const ekmek = 2
const yumurta = 30
const peynir = 40
const toplamHarcama = ekmek + peynir + yumurta
console.log("HARCAMA:" + toplamHarcama + "TL")

// console.log(`HARCAMA:${toplamHarcama}TL`)

// const sonuc = `HARCAMA:${toplamHarcama}TL`
// console.log(sonuc)

const ad = 'Enes'
const soyAd = 'Erbil'
console.log(ad + soyAd)
console.log(ad + "  " + soyAd)
console.log(ad + "\n" + soyAd)

const x = 5
const y = "5"
const birlestir = x + y
console.log(birlestir)

const yil = 2021
const dogumTarihi = 1980
const yas = yil - dogumTarihi
console.log("YAS:" + yas)
console.log("YAS:" + (yil - dogumTarihi))  //burada icteki parantez olmazsa NaN döndürür

constpi=3.14
const r = 3
const alan = pi*r**2
const cevre = 2*pi*r
console.log(cevre,alan)
console.log("CEVRE:" + cevre, "ALAN:" + alan)
// console.log("CEVRE:" + cevre,"\n","ALAN:" + alan)

let a = 3
let b =++a
let c =--a
console.log(a,b,c)

a += 5
console.log(a)

// conts z = 3
// let k = z++  // HATA:const degiskeninin degeri artirilamaz

const sayı = 123
console.log("Birler Basamagi:" + sayı%10)

const s1 = 5

// === ve !== veri tipinide kontrol eder
console.log(s1==5)    //true
console.log(s1=="5")  //true 
console.log(s1==="5") //false

console.log(s1!==5)  //false
console.log(s1!="5") //false
console.log(s1!=="5")//true

// buyuk esit ve kucuk esit islemlerinde veri tipi kontrolu yapılamıyor
console.log(s1>5)  //false
console.log(s1>"4") //true

console.log(s1>=5)  //true
console.log(s1>6)   //false

// FALSE, NULL,undefined,""ve 0,NaN dısındaki durumlar True kabul edilir 
let s2 = true
let s3 = true
console.log(s2&&true) //true
console.log(s2&&s3)   //true
console.log(s2&&s3&&false) //false

s3 = false
console.log(s2||s3||false)  //true

s3 = null
console.log(s2&&s3)  //null
console.log(s2||s3)  //true

s2 = "kus"
s3 = "kedi"

console.log(s2||s3)  //kus
console.log(s2&&s3)  //kedi

s2 = true
s3 = false
console.log(!s2)  //false
console.log(!s3)  //true

s3 = null
console.log(!s3)  //true

const para = "1000"
console.log(para + 15)   //100015
console.log(Number(para) + 15)  //1015

const dıl = "Javascript"
console.log(Number(dıl))          // NaN
console.log(Number("123abc"))    // NaN

const sayim = 54
console.log(String(sayim),sayim)

const s5 = 5
const s6 = -7
const ısım = "John"

console.log(Boolean(ısım))  // true
console.log(Boolean(s5))    // true
console.log(Boolean(s6))    // true

const sıfır = 0, nal = null
const tanımsız = undefined
const boş = "",sayıDeğil = NaN

console.log(Boolean(sıfır),Boolean(nal))     // false false
console.log(Boolean(tanımsız),Boolean(boş))  // false false
console.log(Boolean(sayıDeğil))              // false





