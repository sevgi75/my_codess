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

        // Top score kontrolu
        if (skor > enYuksekSkor) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = enYuksekSkor
        }

    //! tahmin yanlissa    
    }else{

        //? Skor 1 den buyuk oldugu surece tahmin hakkim var

        if (skor>1){

            skor -- ;
            document.querySelector(".score").textContent = skor

            tahmin < rastgeleSayi 
            ? mesaj.textContent = "Arttır👆" 
            : mesaj.textContent = "Azalt👇"
            // arttir azalt
        }else {
            mesaj.textContent = "Oyunu Kaybettiniz 😲"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"

            //! Oyunu Kaybettiniz
        }
    }
})

// Again butonuna basinca ayarlar baslangic degerlerine kurulun. Arka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#2d3436"
    rastgeleSayi = Math.ceil(Math.random()*20)

    skor = 10;
    document.querySelector(".score").textContent = skor
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    mesaj.textContent = "Oyun Yeni Oyuncu İçin Başlıyor"
}

//! ENTER

// Klavyeden enter butonuna basildiginda check butonunu tetikle
document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        //Enter tusuna basildiginda check butonuna tikla
        document.querySelector(".check").onclick()
    }
})