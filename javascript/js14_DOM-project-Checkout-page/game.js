//? Pc ye 1-20 arasinda sayi tuturduk
let rastgeleSayi = Math.ceil(Math.random()*20)

let mesaj = document.querySelector(".msg")

let skor = 10 ;
// skor'u index.html den cekebilirdik. Ama cok kullanacagimiz icin bu daha tercih edilen yol
let enYuksekSkor = 0;

//? Her check butonuna basildiginda yapilacaklar

document.querySelector(".check").addEventListener("click", () =>{
    
    const tahmin = document.querySelector(".guess").value

    //! Tahmin girmeden butona basildiysa
    if (!tahmin){
        mesaj.textContent = "Lütfen Bir Sayı Giriniz!!!"

    //! Tahmin Dogruysa    
    }else if(tahmin == rastgeleSayi){
        mesaj.textContent = "Tebrikler Bildiniz👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi
    }
})