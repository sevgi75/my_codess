console.log("** NEW OPERATORS **")

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

const insan = {
    kimlikNO: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
}

console.log(insan.maas) //? . notasyonun
console.log(insan["meslek"]) //? square bracket

const mimarAdi = insan.adi
console.log(mimarAdi)

//?Destructure
// let { adi, soyadi, kimlikNo, maas } = insan

// console.log(kimlikNo)
// kimlikNo = "ABACD"
// console.log(kimlikNo, maas, adi, soyadi)

// insan.meslek = "Muhendis"
// console.log(insan)

//? NESTED

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
}

console.log("MAAS:", insanlar.kisi1.maas)

//? Destr.
//? 1. yontem
const { kisi1, kisi2 } = insanlar //? Leve1 dest.
console.log(kisi1)

const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1 //?Level2
const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = kisi2
console.log(kisi2Kimlik)

//?2. yontem
const {
  kisi1: { soyadi, adi },
} = insanlar //? nested destr.

console.log(soyadi)

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
  console.log("************")
  
  //? Klasik yontem ile
  team.forEach((p) => {
    console.log("NAME:", p.name)
    console.log("SURNAME:", p.surname)
    console.log("JOB:", p["job"])
    console.log("AGE:", p["age"])
  })
  console.log("**** DEST ****")
  //? Destr
  team.forEach((person) => {
    const { name, surname, age, job } = person
    console.log("NAME:", name)
    console.log("SURNAME:", surname)
    console.log("JOB:", job)
    console.log("AGE:", age)
    console.log("------------")
  })

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----
// function kisiOkuDeclaration () {
  
// }

const kisiOku = function () {
   return {
    no: "1234567890",
    isim: "Ahmet",
    soyisim: "Can",
    is: "Kasap",
    dilSayisi:2,
   }
}

// console.log("KISI:", kisiOku);

//* function'un dondurdugu obje dogrudan dest. yapilabilir
let { no, isim, soyisim, dilSayisi } = kisiOku()

dilSayisi++
console.log(no, isim, dilSayisi)

//? Parameter olarak objenin ve destr. kullanimi
const data = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
}

const productPrint = (data) => {
  console.log(`${data.brand}-${data["product"]}: ${data.stock}`)
}

const productPrintDestr = (data) => {
  const { brand, product, stock } = data
  console.log(`${brand}-${product}: ${stock}`)
}

//? Alternatif destr (Havada veya Yolda)
const productPrintDestrV2 = ({ brand, product, stock }) => {
    console.log(`${brand}-${product}: ${stock}`)
  }

productPrint(data)
productPrintDestr(data)
productPrintDestrV2(data)

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

const people = ["Ali", "Veli", "Can", "Canan"]

console.log(people[1])

//? Array destr. sıra önemlidir.
const [p1, p2, , p4] = people
console.log(p4)

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//?REST Array
const araclar = ["ATV", "Araba", "Kamyonet", "TIR", "Kamyon"]

const [a1, a2, ...geriKalanAraclar] = araclar
console.log(geriKalanAraclar, a1, a2)

//?REST Object
const veri = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
}

const { id, ...productStock } = veri
console.log(productStock)

//*==================================================
//*  SPREAD (...)
//* =================================================
