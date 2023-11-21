console.log("COMMON-JS");

const {topla, maxValue} = require("./app")
console.log(topla(3,5));
console.log(maxValue);

//? node.js module yapilari icin common.js yi kullanmaktadir.
//*commonjs de disari paylasmak icin exports veya module.exports kullanilir.
//? Paylasilan bir degisken, fonksiyon, obje vb. kullanmak icin ise require() metodu kullanilir.
//? Gunumuzde backend uygulamalarinda genelde CommonJS modul yapisi kullanilmaktadir.