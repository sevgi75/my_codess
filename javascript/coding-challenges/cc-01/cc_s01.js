console.log("merhaba");
//? 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını if/else ve ternary yapı ile konsola yazdıran kodu yazınız.

// let yas = prompt("yasinizi giriniz:")
// console.log(yas);
// let vatandas = confirm("Turkiye vatandasi misiniz?")
// console.log(vatandas);

// if (yas >= 18 && vatandas){
//     console.log(`Yasiniz ${yas} ve Turkiye vatandasisiniz oy kullanabilirsiniz`);
// }else{
//     console.log(`Yasiniz ${yas} oy kullanamazsiniz`);
// }


//****ternary****** */

// yas >= 18 && vatandas ? console.log(`Yasiniz ${yas} ve Turkiye vatandasisiniz oy kullanabilirsiniz`) : console.log(`Yasiniz ${yas} oy kullanamazsiniz`) 


//? 2- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

//******void => ****** */

// function a(){
//     console.log("Ben bir void fonksiyonum");
// }
// a()

//**********function declaration************ */
// function sum(a,b){
//     return a + b
// }

//*********arrow func**************** */

// const sum = (a,b) => {
//     return a + b
// }

// const toplam = sum(5,8)
// console.log(toplam);

//---------func declaration----------------

// function calFahrenheit(celcius){
//     const hesap = (celcius*9)/5 + 32
//     return hesap
// }

// console.log(calFahrenheit(30));


//----------arrow func------------

// const calFahrenheit = (celcius) => (celcius*9)/5 + 32

// console.log(calFahrenheit(30));



//? 3- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// const string = "Hello world"

// const reverseString = (str) => {
//     let newStr = ""
//     for(let i = str.length - 1; i >= 0; i--){
//         newStr += str[i]
//     }
//     return newStr
// }

// console.log(reverseString(string));


//? 4- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

const string = "selles"

const isPalindrome = (str) => {
    let newStr = ""
    for (let i = str.length - 1; i>=0 ;i--){
        newStr += str[i]
    }
    return newStr === str
}

console.log(isPalindrome(string));




//? 5- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

const vowels = "aeıioöuü"

const findVowels = (str) => {
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if (vowels[j] === str[i]){
                newStr += str[i]
            }
        }
    }
    return newStr
}

console.log(findVowels("hello world"));




// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız? 2, 3, 5, 7, 11, … şeklinde devam eden, kendisinden ve 1'den başka pozitif böleni olmayan 2 ve 2'den büyük sayılara “asal sayı” denir.

// 8-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// 9- Bir kelime ve bir harf olmak üzere İki adet string parametre alan ve girilen harften girilen kelime içinde kaç adet olduğunu sonuç olarak dönen bir fonksiyon yazınız.
// Girilen harf kelime içinde yoksa 0 dönmeli.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
