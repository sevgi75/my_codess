console.log("Variables and Data Types")

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

//? =================  CONST  ======================

const numOfStudents = 5.5
console.log(numOfStudents)

console.log(typeof numOfStudents)

const price = "5.5"
console.log(price)
console.log(typeof price)

//! datatypes.js:20 Uncaught TypeError: Assignment to constant variable.
// price = price + 1000
// price++

//! Değişken tanımlama keywordu kullanılmasa bile JS derleyicisi yeni gelen değişkeni otomatik olarak tanımlar.
//? Ancak bu tanimlama VAR ile tanimlama gibi olur.
counter = 9
console.log(counter)

const yazi1 = "5"
const yazi2 = 10

//? concatination (string ekleme)
const sonuc = yazi1 + yazi2
console.log(sonuc)

//! Const ile tanımlanan degiskenin balangıcta degeri olmak zorundadir.Cunku sonradan atamak mumkun degildir.
// const baslangic
// baslangic = 5


//? ==================  LET  ========================

let sayac
sayac = 5
let kisi = 7
console.log("SAYAC:", sayac)
console.log("SAYAC:", + sayac)
console.log("SAYAC:", sayac)

console.log("SAYAC:" + sayac + "KISI:" + kisi);
console.log("SAYAC:" + sayac + "  " + "KISI:" + kisi);

sayac = sayac + 5
console.log("SAYAC=", sayac);

sayac = true
console.log(sayac, typeof sayac);

//? JS bir degiskenin turunu icersindeki degere gore belirler.
let myNumber
console.log(myNumber);  //? undifined (veri tipi belli olmayan anlamına gelir.)


//? null (yokluk, hiclik)
console.log(typeof null);         //? object
console.log(typeof undefined);   //? undefined
console.log(typeof NaN);        //? Number

console.log(5/0);   //? Infinity
console.log(typeof Infinity);  //? Number
//? ==================  VAR ==========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.

var yCord       //? Hoisting (Yukari kaldirma)
var coordinate = 100.01
coordinate = 4
console.log(coordinate)

var xCord
console.log(xCord)  //?undefined

yCord = 5

var yCord       //? Hoisting
console.log(yCord);

var yCord = 7
console.log(yCord);

//? SCOPE

{
    let myNumber = 6         //? local myNumber 
    console.log(myNumber);   //? 6
}

console.log(myNumber);  //? global alandaki myNumber -- undefined (en ustte myNumber a birsey atanmamıstı, atasaydık o degeri verecekti)

var z = 33    //? global degisken
{
    z = 99   //? global degiskene deger aktarıldi 
}
console.log(z);

{ //? var ile bir scope icerisinde degisken tanimlandiginda bu degisken scope bagli olamaz 
    var varVar = "ZZ"  //?global degiskene deger aktarildi
}
console.log(varVar);


//? LET (BLOCK-SCOPE)
{
    let letVar = "AA"  //?local degiskene deger aktarildi
}
//console.log(letVar);

var sayi1 = 3   //? hoisted global sayi1
let sayi2 = 4   //? global sayi2
{
    var sayi1 = 333  //? hoistingden dolayi ayni global degiskene deger aktarır.
    let sayi2 = 444       //? yeni local sayi2
    console.log(sayi2);  //? local sayi2 dir
}
console.log(sayi1,sayi2); //? --> global sayi1 ve sayi2 yi yazdirir

