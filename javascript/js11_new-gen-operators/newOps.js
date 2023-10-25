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
let { adi, soyadi, kimlikNo, maas } = insan

console.log(kimlikNo)
kimlikNo = "ABACD"
console.log(kimlikNo, maas, adi, soyadi)

insan.meslek = "Muhendis"
console.log(insan)

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



//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

//*======================================================
//*  REST (...)
//* ======================================================

//*==================================================
//*  SPREAD (...)
//* =================================================
