// const yas = 18
// if (yas < 18){
//     console.log("cocuk");
// }else{
//     console.log("yetiskin");
// }




//? bir sayının pozitif, negatif veya sıfır olduğunu tespit etmek için 

// Kullanıcıdan bir sayı alın
// const sayi = Number(prompt("Bir sayi girin:"))
// let deger

// if (sayi > 0){
//     deger = "Girilen sayi pozitif."
// } else if (sayi < 0){
//     deger = "Girilen sayi negatif."
// } else{
//     deger = "Girilen sayi sifir."
// }
// console.log(deger);





//? console'dan alınan 3 tam sayı arasından en büyüğünü bulmak için

// const sayi1 = parseInt(prompt("Birinci sayiyi girin:"));
// const sayi2 = parseInt(prompt("İkinci sayiyi girin:"));
// const sayi3 = parseInt(prompt("Ücüncü sayiyi girin:"));
// En büyük sayıyı bulun

// let enBuyukSayi = sayi1

// if (sayi2 > enBuyukSayi) {
//     enBuyukSayi = sayi2;
// }

// if (sayi3 > enBuyukSayi) {
//     enBuyukSayi = sayi3;
// }

// Sonucu konsola yazdırın
// console.log("En büyük sayi: " + enBuyukSayi);



//? 2 adet sayı üzerinde dört işlem yapabilen bir hesap makinesi oluşturmak için 
// Kullanıcıdan iki sayıyı ve işlem türünü alın

// const sayi1 = parseFloat(prompt("Birinci sayiyi girin:"));
// const sayi2 = parseFloat(prompt("İkinci sayiyi girin:"));
// const islem = prompt("İşlemi seçin (+, -, *, /):");

// İşlemi gerçekleştirin ve sonucu hesaplayın
// let sonuc;

// if (isNaN(sayi1) || isNaN(sayi2)) {
//     sonuc = "Geçersiz giriş!";
// } else {
//     switch (islem) {
//         case "+":
//             sonuc = sayi1 + sayi2;
//             break;
//         case "-":
//             sonuc = sayi1 - sayi2;
//             break;
//         case "*":
//             sonuc = sayi1 * sayi2;
//             break;
//         case "/":
//             if (sayi2 !== 0) {
//                 sonuc = sayi1 / sayi2;
//             } else {
//                 sonuc = "Sifira bölme hatasi!";
//             }
//             break;
//         default:
//             sonuc = "Gecersiz islem!";
//     }
// }

// Sonucu konsola yazdırın
// console.log("Sonuç: " + sonuc);


// const yas = 20
// const cinsiyet = "erkek"
// const saglikli = true

// const kosul = yas >= 18 && cinsiyet == "erkek" && saglikli

// if (kosul){
//     console.log("Askerlik yapmali");
// }else{
//     console.log("Askerlik yapmasi gerekmez");
// }



// let gun = +prompt("Gun: 1-7")

// switch(gun){
//     case 1:
//         gun = "pazartesi"
//         break;
//     case 2:
//         gun = "sali"
//         break    
//     case 3:
//         gun = "carsamba"
//         break    
//     case 4:
//         gun = "persembe"
//         break    
//     case 5:
//         gun = "cuma"
//         break    
//     case 6:
//         gun = "cumartesi"
//         break    
//     case 7:
//         gun = "pazar"
//         break    

// }
// console.log(gun);



//? Clarusway haftalik ders ve etkinlik programi

// Kullanıcıdan gün bilgisini alın
// const gun = prompt("Bir gün girin (Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar):");

// Girilen gün değerine göre programı belirleyin ve çıktıyı verin
// let program;

// switch (gun.toLowerCase()) {
//     case "pazartesi":
//     case "salı":
//     case "çarşamba":
//     case "perşembe":
//         program = "InClass";
//         break;
//     case "cuma":
//         program = "Teamwork";
//         break;
//     case "cumartesi":
//         program = "InClass + Workshop";
//         break;
//     case "pazar":
//         program = "Self - Study";
//         break;
//     default:
//         program = "Yanliş gün girildi";
// }

// console.log("Program: " + program);



//? ternary tek satırlık karar islemleri

// Kosul ? ifade1 : ifade2
// const hiz = 90
//const mesaj = hiz >= 120 ? "Hizli" : "Yavas"
// const mesaj = hiz >= 120 ? "Hizli" : (hiz >= 90 ? "Normal":"Yavas")
// console.log(mesaj);




//? geçti veya kaldı yazdıran programı yazınız geçme notunu 50 olara kabul edebilirsiniz

// Kullanıcıdan notu alın
// const not = parseFloat(prompt("Notunuzu girin:"));

// Geçme notunu belirleyin
// const gecmeNotu = 50;

// Notu kontrol edin ve sonucu yazdırın
// if (!isNaN(not)) {
//     if (not >= gecmeNotu) {
//         console.log("Geçtiniz!");
//     } else {
//         console.log("Kaldiniz.");
//     }
// } else {
//     console.log("Geçerli bir not girilmedi.");
// }




//? girilen bir notun durumunu (kaldı, şartlı geçti veya geçti) kontrol eden bir program

// Kullanıcıdan notu alın
// const not = Number(prompt("Notunuzu girin:"));

// Durumu kontrol edin ve sonucu yazdırın
// if (!isNaN(not)) {
//     if (not < 40) {
//         console.log("Kaldi");
//     } else if (not >= 40 && not <= 50) {
//         console.log("Şartli Geçti");
//     } else {
//         console.log("Geçti");
//     }
// } else {
//     console.log("Geçerli bir not girilmedi.");
// }




//? Console'dan kişinin maaşını alan Ternary kodu
//-Eğer girilen maaş asgari ücretten az ise maaşa %50 zam
//-Aksi takdirde %10 zam 

// Kullanıcıdan maaşı alın
// const maas = parseFloat(prompt("Maaşınızı girin:"));

// Zam miktarını hesaplayın ve sonucu yazdırın
// const zamOrani = maas < 10800 ? 0.5 : 0.1; // Asgari ücret 10800 kabul edildi

// const yeniMaas = maas + maas * zamOrani;

// console.log(`Yeni maaşınız: ${yeniMaas} TL`);


//? Kullanıcıdan gelir ve gider miktarlarını alın
//const gelir = parseFloat(prompt("Aylık gelirinizi girin:"));
//const gider = parseFloat(prompt("Aylık giderlerinizi girin:"));

// Kredi verilebilirlik durumunu kontrol edin ve sonucu yazdırın
//const asgariUcret = 10800; // Asgari ücret miktarı

// const krediVerilebilir = gelir - gider >= asgariUcret ? "Kredi Verilebilir" : "Kredi Verilemez";

// console.log(krediVerilebilir);





//? Girilen not değerine karşılık gelen harfli kodu bildiren programı yazınız

// Kullanıcıdan notu alın
//const not = parseInt(prompt("Notunuzu girin:"));

// Not değerine karşılık gelen harfli kodu hesaplayın ve sonucu yazdırın
//let harfliKod;

// if (not >= 0 && not <= 25) {
//     harfliKod = "FF";
// } else if (not >= 26 && not <= 45) {
//     harfliKod = "DD";
// } else if (not >= 46 && not <= 65) {
//     harfliKod = "CC";
// } else if (not >= 66 && not <= 75) {
//     harfliKod = "BB";
// } else if (not >= 76 && not <= 90) {
//     harfliKod = "BA";
// } else if (not >= 91 && not <= 100) {
//     harfliKod = "AA";
// } else {
//     harfliKod = "Hata: Geçersiz not değeri!";
// }

// console.log("Harfli Kod: " + harfliKod);





//? girilen ay ismine karşılık gelen sıra numarasını bulan bir programı switch-case yapısı  ile gosterimi


// Kullanıcıdan ay ismini alın
//const ayIsmi = prompt("Bir ay ismi girin:").toLowerCase(); // Küçük harfe dönüştürerek kontrol edelim

// Ay ismine karşılık gelen sıra numarasını bulun ve sonucu yazdırın
// let siraNumarasi;

// switch (ayIsmi) {
//     case "ocak":
//         siraNumarasi = 1;
//         break;
//     case "şubat":
//         siraNumarasi = 2;
//         break;
//     case "mart":
//         siraNumarasi = 3;
//         break;
//     case "nisan":
//         siraNumarasi = 4;
//         break;
//     case "mayıs":
//         siraNumarasi = 5;
//         break;
//     case "haziran":
//         siraNumarasi = 6;
//         break;
//     case "temmuz":
//         siraNumarasi = 7;
//         break;
//     case "ağustos":
//         siraNumarasi = 8;
//         break;
//     case "eylül":
//         siraNumarasi = 9;
//         break;
//     case "ekim":
//         siraNumarasi = 10;
//         break;
//     case "kasım":
//         siraNumarasi = 11;
//         break;
//     case "aralık":
//         siraNumarasi = 12;
//         break;
//     default:
//         siraNumarasi = "Geçersiz ay ismi";
// }

// console.log(`Girilen ayın sıra numarası: ${siraNumarasi}`);




//? girilen farklı 3 tam sayının toplamını, çarpımını, en küçüğünü ve en büyüğünü hesaplayan bir program

// Kullanıcıdan üç farklı tam sayıyı alın
//const sayi1 = parseInt(prompt("Birinci tam sayıyı girin:"));
//const sayi2 = parseInt(prompt("İkinci tam sayıyı girin:"));
//const sayi3 = parseInt(prompt("Üçüncü tam sayıyı girin:"));

// Toplamı hesaplayın
//const toplam = sayi1 + sayi2 + sayi3;

// Çarpımı hesaplayın
//const carpim = sayi1 * sayi2 * sayi3;

// En küçüğü ve en büyüğü bulun
//const enKucuk = Math.min(sayi1, sayi2, sayi3);
//const enBuyuk = Math.max(sayi1, sayi2, sayi3);

// Sonuçları konsola yazdırın
// console.log("Toplam: " + toplam);
// console.log("Çarpım: " + carpim);
// console.log("En Küçük Sayı: " + enKucuk);
// console.log("En Büyük Sayı: " + enBuyuk);





//? girilen bir sayının tek veya çift olduğunu ternary operatörü kullanarak bulma

// Kullanıcıdan bir sayı alın
//const sayi = parseInt(prompt("Bir sayı girin:"));

// Sayının tek veya çift olduğunu kontrol edin ve sonucu yazdırın
//const sonuc = sayi % 2 === 0 ? "Çift" : "Tek";

//console.log(`Girilen sayı ${sonuc}.`);



//? Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren program

// Kullanıcıdan dönüşüm bilgisini alın
//const secenek = prompt("Dönüşüm yapmak istediğiniz birimi seçin:\n1. Derece Celsius'dan Fahrenheit'a\n2. Fahrenheit'dan Derece Celsius'a");

// Kullanıcıdan dönüşüm yapılacak dereceyi alın
//const derece = parseFloat(prompt("Dönüştürmek istediğiniz dereceyi girin:"));

// Dereceyi dönüştürün ve sonucu yazdırın
// let sonuc;

// switch (secenek) {
//     case "1":

//         sonuc = (derece * 9/5) + 32;
//         console.log(`${derece} Derece Celsius, ${sonuc.toFixed(2)} Fahrenheit'a dönüştürüldü.`);
//         break;
//     case "2":

//         sonuc = (derece - 32) * 5/9;
//         console.log(`${derece} Fahrenheit, ${sonuc.toFixed(2)} Derece Celsius'a dönüştürüldü.`);
//         break;
//     default:
//         console.log("Geçersiz seçenek!");
// }

console.log(`Hosgeldiniz, ${isim()} ${hitap()}`);

function isim(){
    let kullaniciBilgisi = prompt("isminizi giriniz: ")
    return kullaniciBilgisi
}
function hitap(){
    let cinsiyet = confirm("Kadin misiniz: ")
    if(cinsiyet === true){
        return "Hanim"
    }else(cinsiyet === false)
    return "Bey"
}




