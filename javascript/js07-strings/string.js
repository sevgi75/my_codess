/* ------------------------------------------------ */
/*                      STRING                     */
/* ---------------------------------------------- */

const str1 = "new string"
const str2 = 'new string'
const str3 = `new string`  // Backtikler ile tamplate literal
const str4 = new String("new string") // constructor 

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4);

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

const str ="45"

// const ad = prompt("Adinizi giriniz:")
// console.log(typeof ad);

const str6 = "😍"  // windows + .
console.log(str6);
console.log(typeof str6);

/* -------------------------------------------------------------- */
/*                      Escape karakterleri                       */
/* -------------------------------------------------------------- */
// \ işareti ile kullanılır 
// \n new line - Yeni bir satıra geçmek için kullanılır 
// \t tab 8 karakterlik boşluk bırakır


let metin = 'Ömer\'in kalemini unutma'
console.log(metin);

const parag = "\tMerhaba Cohort 15 sakinleri,\nGununuz guzel gecsin "
console.log(parag);

/* ----------------------------------------------------------- */
/*               STRING YAPISI VE INDEXLEME                    */
/* ----------------------------------------------------------- */


let course = "Clarusway"
console.log(course[0]);
console.log(course[3]);
console.log(course[6]);

// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable

course[6] = "v"
console.log(course);

course = "Full Stack"
console.log(course);


/* ----------------------------------------------------------------- */
//!               STRING METHODS AND PROPERTIES                      */
/* ----------------------------------------------------------------- */

//! ************STRING PROPERTY (özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//? prototype

console.log(course.length);

// bir kelimenin harflerini tek tek yazdiran kod blogu

for (let i=0;i<=course.length-1;i++){
    console.log(course[i]);
}
// for (let i=0;i<course.length;i++){
//     console.log(course[i]);
// }

const emoji = "🍄"
console.log(emoji);
console.log(emoji.length);


//! ************STRING METHODS ************
// String metodları () kullanılır. 
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//!--------------------------------------------------------*/

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* -------------------------------------------------------------------*/
//!                               STRING BİRLEŞTİRME                  */
//!                               + , concat , temlate literal       */
/* ------------------------------------------------------------------*/

const metin1 = "Hello"
const metin2 = "Clarusway"

console.log(metin1 + " " + metin2);

/* ----------------------------------------------------------- */
 /*                        Concat()                            */
 /* ---------------------------------------------------------- */

let yeniMetin = metin1.concat(metin2)

console.log(metin1);
console.log(metin2);
console.log(yeniMetin);

console.log("Merhaba");
console.log("Nasilsin", metin2,"kursuna kayit yaptinmi", metin1);

/* ----------------------------------------------------------- */
/*                   Template Literal                          */
/* ----------------------------------------------------------- */
// ECMAScript 6 (ES6) ile gelen template literals, stringleri daha okunaklı bir şekilde birleştirmenize olanak tanır.

const ad = "Sevgi"
const soyad = "Erbil"
// backtikler kullanılır
//  değişkenleri ${ } içine alıyoruz

const fullName = `${ad} ${soyad} nasilsiniz.

Bugun Js dersinin stringler konusundasiniz.

     Pre Classlari bitirdiginizi umuyoruz`

console.log(fullName);

/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
//?                     toUpperCase()                             */
/* -------------------------------------------------------------- */
//? Karakterleri büyük harfe dönüştürme  - immutable ( kalıcı değişiklik yapmaz)

const cumle = "Guzel bir gun"
console.log(cumle.toUpperCase());
console.log(cumle);
const newCumle = cumle.toUpperCase() 
console.log(newCumle);

/* -------------------------------------------------------------- */
//?                   toLowerCase()                               */
/* -------------------------------------------------------------- */
//? Karakterleri kucuk harfe dönüştürme  - immutable ( kalıcı değişiklik yapmaz)


const kucukHarflerCumle = cumle.toLowerCase()
console.log(kucukHarflerCumle);


// kullanicidan aldigi ad bilgisini HOSGELDİN SEMA olarakgoruntuleyen kod blogu
// const isim = prompt("İsminizi giriniz:")
// console.log(`HOSGELDINIZ ${isim.toUpperCase()}`);

/* ---------------------------------------------------------- */
/*   split() split parcaladıgı bolumleri diziye cevirir      */ 
/* --------------------------------------------------------- */          

//? cumleleri separatore (ayirirci) gore parcalama - immutable - kalici degisiklik yapmaz

// str.split(separator)

let metin3 = "Clarusway It Bootcamp"
let splittedMetin3 = metin3.split(" ")

console.log(metin3.split(" "));
console.log(metin3);

for (let i=0; i<splittedMetin3.length; i++){
    if (splittedMetin3[i] === "Clarusway"){
        console.log(`Clarusway kelimesi bu cumlenin ${i+1}. elemanidir`);
    }
}
console.log(metin3.split(""));


let months="Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec"

console.log(months.split("/"));

let date = "14.10.2023"
let bugunTarihi = date.split(".")
console.log(`Bu gun ${bugunTarihi[0]} u`);

let liste = "Harry Trump ;Fred Barney ;Helen Rigby ; Bill Abel ;Chris Hand "

// Bir sayi ile sinirlandirmada getirebilirim
console.log(liste.split(";",3));

//! join ve reverse metodlari string metodu degildir, Array metodlaridir.Ama split ile cok kullanilabilir

//? Join metodu
// Birlestirme islemi

let yeniListe = liste.split(";") // Parcalandiktan sonra array oldu.Bu sayede Array metodlarindan join ve reverse kullanabiliriz

console.log(yeniListe.join()); // join() default olarak arasina virgul koyar
console.log(yeniListe.join("-"))
console.log(liste);

//? reverse
// reverse methodu ile bir diziyi tersine cevirebilmekteyiz.Dizi icerisindeki ilk degeri son, son degeri ise ilk siraya seklinde siralayabilmekteyiz

// let selamla = "merhaba"
// console.log(selamla.split("").reverse().join(""));


let selamla = "naz"
let tersten = selamla.split("").reverse().join("");
if (selamla === tersten){
    console.log(`${selamla} kelimesi polindrom bir kelimedir`);
}else{
    console.log(`${selamla} kelimesi polindrom bir kelime degildir`)
}

/* -------------------------------------------------------------- */

/* --------------------------------------------------------------*/
//!                 STRING PARÇALAMA-PAÇAYA ERİŞİM              */
//!                   Slice, Substring,Substr                   */
/* -----------------------------------------------------------  */
//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır.
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))
// negatif değerler ile tersten gelme yapılabilir


let ataSoz = "Oku da adam ol"

console.log(ataSoz.slice(7)); // Bitiş değeri verilmezse sonuna kadar alır
console.log(ataSoz.slice(7,11));
console.log(ataSoz.slice(-10,-8));

//! substring(başlangıç index numarası,bitiş index numarası) 
//Slicedan farkı negatif sayı kullanılmaz
let ozlusoz="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir."

console.log(ozlusoz.substring(8,13));

//! substr(başlangıç index numarası,kaç adet karakter alınacağı)
// substr üstü çizili(deprecated) kullanımdan kaldırılmış olması değil daha modern olan substirng ve slice kullanımının önerilmesidir.
console.log (ozlusoz.substr(27,12));


/* --------------------------------------------------------- */
/*              Stringde Değişiklik yapma                    */
/* --------------------------------------------------------- */

/* --------------------------------------------------------- */
/*             replace()  ve replaceAll()                    */
/* --------------------------------------------------------- */
// str.replace( ne değiştirecek, ne ile değiştirilecek) (immutable, kalıcı değişiklik yapzmaz)

console.log(ozlusoz.replace("kel","saçlı"));
console.log(ozlusoz);

//Verilen kullanıcı adı değişken kurallarına uygun değilse düzenle


let variable = "kullanıcı adı girisi"   // kullanici_adi

let yeni = variable.replace(" ","_")
console.log(yeni);
let yeniDeg = yeni.replaceAll("ı","i")
console.log(yeniDeg);

let variable1 = variable.replaceAll(" ","_").replaceAll("ı","i")
console.log(variable1);

/* ----------------------------------------------------------- */
//!              String içinde arama işlemleri                 */
/* ----------------------------------------------------------- */
// includes, indexOf, search ,match() metodlarını kullanabiliriz

//! inculedes ...yi iceriyor mu -> true yada false bir değer döndürür.caseSensitive (küçük büyük harfe duyarlı) bir özelliktir.

console.log(`ozlu sozde tarak kelimesi geciyor mu? ${ozlusoz.includes("tarak")}`);

let url = "https://clarusway.com"

let msg = url.includes("https") ? `Bu site guvenlidir` : `Bu site guvenli degildir`
console.log(msg);

console.log('ClarusWay'.indexOf('Way'));
console.log('hello'.replace('l','r'));

let str7 = "Once a day"
let index = str7.indexOf("a")
let index2 = str7.lastIndexOf("a")
console.log(str7.indexOf("a", index + 1) === index2);

let email="helenclarusway.com"

msg = email.includes("@") ? "Mail adresi geçerlidir" : "Mail adresi geçersizdir"
console.log(msg);

//! indexOf (aranacak metin, konum)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. 
//?Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(email.indexOf("edu"));



//! search() : bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 

let metin4=" Clarusway it bootcamp.Clarusway develop you IT field"

console.log(metin4.search("IT"));
console.log(metin4.search("it"));

// Regex ile çözüm bulunabilir
// Regular Expression
//  Regex / / arasında ifade edilir.

//?   /g => global : bütün cümle için uygula
//?   /i => case sensitive özelliğini kaldırKüçük büyük harfe bakmadan bul

console.log(metin4.search(/IT/gi));

let word="ynigÜn"

console.log(word.search(/ü/gi));
console.log(word.replaceAll(/ü/gi,"i"));

console.log(word.search(/[aeiıouöü]/i));
console.clear()

/* --------------------------------------------------------- */
/*                    match()                                */
/* --------------------------------------------------------- */
// string içinde aranan metin bulunur ve bir dizi dönderir.

let text="Merhaba bugün gerçekten çok sıcak bir Bugün"

console.log(text.match(/bugün/gi));

let say=text.match(/[a]/gi)
console.log(say.length);

/* -------------------------------------------------------- */
/*                     trim                                 */
/* ------------------------------------------------------- */
let sentence1="     Clarusway  "
console.log(sentence1.trim());
console.log(sentence1.trimStart());
console.log(sentence1.trimEnd());

/* -------------------------------------------------------- */
/*                      startsWith,endsWith                 */
/* -------------------------------------------------------- */
// startswith ve endswith true false değer dönderir

metin="Clarusway"
console.log(metin.toUpperCase().startsWith("C"));
console.log(email.toUpperCase().endsWith("COM"));
