
// selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

// variables

let gelirler = 0;
let harcamaListesi = []

// Hesap tablosu
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")
const kalanTh = document.getElementById("kalanTh")

// Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

// Harcama Tablosu
const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

// Ekle formu

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.innerText = gelirler
    ekleFormu.reset()
    hesaplaVeGuncelle()
})

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0;
    gelirinizTd.innerText = gelirler
    tarihInput.valueAsDate = new Date()
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []

    harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))
    hesaplaVeGuncelle()
})

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload u engeller

    const yeniHarcama = {
        id: new Date().getTime(),
        tarih: tarihInput.value,
        alan: harcamaAlaniInput.value,
        miktar: miktarInput.value

    }
    // console.log(yeniHarcama);
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()

    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomaYaz(yeniHarcama)
    hesaplaVeGuncelle()
})


// Harcamayi DOM'a yaz

const harcamayiDomaYaz = ({id, miktar, tarih, alan}) => {
    // const {id, miktar, tarih, alan} = yeniHarcama

    //? 1.yontem

    // harcamaBody.innerHTML += `
    // <tr>
    // <td>${tarih}</td>
    // <td>${alan}</td>
    // <td>${miktar}</td>
    // <td><i id=${id} class= "fa-solid fa-trash-can text-danger" type="button"></i></td>
    // </tr>
    // `

    //? 2. yontem
    const tr = document.createElement("tr")

    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content
        return td
    }

    const createLastTd = () => {
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td
    }

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd()
    )

    harcamaBody.append(tr) // harcamayi sona ekler
    //harcamaBody.prepend(tr) // harcamayi öne ekler
}

const hesaplaVeGuncelle = () => {
    gelirinizTd.innerText = gelirler // geliri ekrana yaz
    
    // giderler toplamini bul
    const giderler = harcamaListesi.reduce(
        (toplam, harcama) => toplam + Number(harcama.miktar),0
    )
    giderinizTd.innerText = giderler  // gider toplamini ekrana yaz
    kalanTd.innerText = gelirler - giderler

    const borclu = gelirler - giderler < 0;
    // console.log(borclu);

    kalanTd.classList.toggle("text-danger", borclu)
    kalanTh.classList.toggle("text-danger", borclu)
}

harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target);

    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
    }
    // silinen harcamanin id sini alir
    const id = e.target.id
    // console.log(id);

    // silinen harcamayi array den cikarir
    harcamaListesi = harcamaListesi.filter((harcama => harcama.id != id))

    // yeni array i local e update eder
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    // silindikten sonra yeniden hesapla

    hesaplaVeGuncelle()
})

temizleBtn.addEventListener("click", () => {
    if (confirm("Silmek istediginize emin misiniz?")) {
        harcamaListesi = [] // tum harcamalari listeden siler
        gelirler = 0 // geliri sifirlar
        // localStorage.clear() // tum local storage siler
        localStorage.removeItem("gelirler") // sadece gelirleri siler
        localStorage.removeItem("harcamalar") // sadece harcamalari siler
        harcamaBody.innerHTML = "" // DOM dan harcamalari siler
        hesaplaVeGuncelle()
    }
})