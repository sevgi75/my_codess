console.log("OPERATORS");

//! ===============Template Literals============

// const maas = 70000
// const izinGunu = 15
// console.log(`MAAS=${maas} + SIGORTA, 
// IZIN SURESI: ${izinGunu} gün`);

//? template literal ile bir JS expression kullanmak mumkundur
//console.log(`${maas - izinGunu*500}`);

//!  ARTIK YIL BULMA
// function artikYilMi(yil) {

//     if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//         return true; // Artık yıl
//     } else {
//         return false; // Artık yıl değil
//     }
// }

// const yil = 2024; // Kontrol etmek istediğiniz yılı buraya girin
// if (artikYilMi(yil)) {
//     console.log(yil + " bir artık yıldır.");
// } else {
//     console.log(yil + " bir artık yıl değildir.");
// }



//? Örnek

// const firstName = prompt("Please enter your name:")
//const dob = prompt("Enter your day of birth:")
// console.log(`${firstName} is ${new Date().getFullYear() - dob} years old`);


//? Sistem saatini almak için Date() class'ı kullanılabilir
//console.log(new Date().getFullYear());

//! prompt fonksiyonu verileri hep string olarak alir
//console.log(dob, typeof dob);



//* Carpma ve us alma (Multiply, Pow)
//*----------------------------------

//? Ornek
//?-------------------------------------

//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.


//? promptan gelen deger string oldugundan sayisal islemlerde kullanmak uzere Number'lastırmakta fayda vardir
//? 1- promptun onune + koymak
//? 2- Number() kullanmak


//const r = +prompt("Please enter the radius")
//const r = Number(prompt("Please enter the radius"))
//console.log(r);
//const PI = 3.14

// const square = PI *r*r
//const square = PI * (r**2)
// const square = (Math.PI * (r ** 2 )).toFixed(3)  //? toFixed(3) virgulden sonra 3 basamak alir

// console.log(`SQUARE = ${square}`);

//? Yuvarlama fonksiyonlari
//console.log(Math.round(123.456));   // yakın tam sayıya yuvarlar (123)
//console.log(Math.ceil(123.456));   // tavana yuvarlar (124)
//console.log(Math.floor(123.99));  // tabana yuvarlar (123)



//console.log(Math.trunc(123.19));   //? her zaman tam kismi alir
//console.log((123.567).toFixed(2)); //? virgulden sonra 2 basamak alir(string olarak alir)
//console.log((123.567).toExponential(3)); //? ustel gosterim(string alarak)

//? Math.random()  0-1 arasinda rastgele sayi uretir
//console.log(Math.round(Math.random() * 100));

//? Math.random() 0-1 arasinda rastgele bir sayi uretir
//console.log(Math.round(Math.random()*100));

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.


//* ARTTIRMA VE AZALTMA (Inc, Dec)
//*--------------------------------------

// let number1 = 55

// number1 += 1
// number1++
// ++number1
// number1 = number1 + 1

// console.log("NUMBER1:", number1++) //? 59
// console.log({ number1 }) //? 60

// console.log(number1--) //?60

// number1 -= 5
// console.log(number1) //? 54

// number1 *= 2
// console.log(number1)  //? 108

//* MOD
//*--------------------------------------

// const number2 = 500 % 24
// console.log({number2});

//?SORU: Girilen 3 basamakli sayinin basamak degerlerini bularak ayrı ayrı yazdiran kod

//  BIRINCI yol
// const number3 = prompt("Lutfen 3 basamakli bir sayi giriniz:")

// const birler = number3 % 10
// console.log({birler});

// const onlar = Math.floor(number3 / 10) % 10  // burada Math.trunch()ta olur
// console.log({onlar});

// const yuzler = Math.trunc(number3 / 100)
// console.log({yuzler});



//! IKINCI yol kendi calismamdir

// Kullanıcıdan 3 basamaklı bir sayı girmesini isteyin
//const sayi = prompt("Lütfen 3 basamaklı bir sayı giriniz:");

// Girilen sayının uzunluğunu kontrol edin (3 basamaklı mı?)
// if (sayi.length !== 3) {
//     console.log("Lütfen 3 basamaklı bir sayı giriniz.");
// } else {

//     let birinciBasamak = sayi.charAt(0);
//     let ikinciBasamak = sayi.charAt(1);
//     let ucuncuBasamak = sayi.charAt(2);


//     console.log("Birinci Basamak: " + birinciBasamak);
//     console.log("İkinci Basamak: " + ikinciBasamak);
//     console.log("Ücüncü Basamak: " + ucuncuBasamak);
// }

// * ================================================
// *          KARSILASTIRMA OPERATORLERI
// * ================================================

// console.log(5 == "5") //? true
// console.log(5 === "5") //? false
// console.log("5" === "5") //? true

// console.log(4 != 5) //? true
// console.log(4 != "4") //? false
// console.log(4 !== "4") //? true

// console.log(4 > 4) //? false
// console.log(4 >= 4) //? true
// console.log(4 <= 6) //? true

// * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================

// console.log("** LOGIC ***")
// const d1 = true
// const d2 = false

// console.log(d1 && d2) //? false
// console.log(d1 || d2 || false || false) //? true

// console.log(!d2) //? true

// const yas = 19
// const cinsiyet = "e"

// if (yas >= 18 && (cinsiyet === "E" || cinsiyet === "e")) {
//   console.log("Askere gitmeli")
// } else {
//   console.log("Gerek yok")
// }

//? Javascripte surekli falsy olan 6 deger bulunmaktadir.
// const nal = null
// const tanimsiz = undefined
// const bos = ""
// const sayiDegil = NaN
// const sifir = 0
// const falsy = false

console.log(Boolean(0)); //false
// console.log(!sifir); // true

console.log(Boolean(undefined)); //? false

let number4 = "A"  //? truty
//let number4 = ""  //? falsy

if (!number4) {  //? number4 yoksa (false ise)
    number4 = prompt("Lutfen bir deger giriniz.")
}

console.log(number4);

const number5 = -100
console.log(Boolean(number5));  //? true

// *===========================================
// *             TIP DONUSUMLERI
// *===========================================

const kimlikNo = 12345567890
const numberKimlikNo = Number(kimlikNo)
console.log(numberKimlikNo);

const parite = "1.2"
const tl = "1200"

const total = Number(parite) + Number(tl)
const total1 = parseFloat(parite) + parseInt(tl) //parseFloat virgullu sayi olarak, parseInt tam sayi olarak uretir

console.log(total1);

console.log(Number("1A23"));           //?  NaN
console.log(parseFloat("33eer123"));  //? 33


console.log(String(123));

