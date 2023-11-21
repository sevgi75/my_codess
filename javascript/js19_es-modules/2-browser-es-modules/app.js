//*************************************/
//* ES-MODULES (APP.JS)
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.
import { isim, PI as pi } from "./hesapMakinasi.js";
// import { PI } from "./hesapMakinasi.js";

console.log(isim);
console.log(pi * 10 * 10);

import {topla,cikar,carp,bol} from "./hesapMakinasi.js" //importlar hoisted olurlar

console.log("TOPLAM:", topla(3, 4));
console.log("Bol:", bol(6, 4));
console.log("Carp:", carp(5, 4));
console.log("Cikar:", cikar(5, 4));

//? export default ile paylasilan bir degisken v.b suslu parantez kullanilmadan import edilir.
//? export default'ta as kullanmadan herhangi bir isim kullanilabilir
import ifade from "./hesapMakinasi.js"
ifade()

//! 1- importlar hoisted olur bu yuzden herhangi bir yerde eklenebilir ancak best practice en uste eklenmeleridir.

//! 2- top-level this kullanimi window objesini gostermez.
console.log(this); //? undefined

//! 3- default olarak 'use strict' aciktir.Dolayisiyla daha kati bir sekilde derleme yapilir
variable = 2
console.log(variable);