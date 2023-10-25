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



//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

//*======================================================
//*  REST (...)
//* ======================================================

//*==================================================
//*  SPREAD (...)
//* =================================================
