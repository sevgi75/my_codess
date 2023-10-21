//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

console.log("*** WELCOME TO GUESS GAME ****")

console.log("welcome to guess game");

// let sayi = Math.round(Math.random() * 100);
// console.log(sayi);

// let count = 0;

// while (true) {
//   let num1 = prompt("Lütfen tahmininizi giriniz: ");

//   if (num1 == sayi) {
//     console.log("Doğru bildiniz.");
//     break; // Exit the loop when the guess is correct.
//   } else if (count < 4) {
//     if (num1 < sayi) {
//       console.log("Arttırınız.");
//     } else if (num1 > sayi) {
//       console.log("Azaltınız.");
//     }
//     count++;
//   } else {
//     console.log("5 tahmin hakkınız bitti. Doğru cevap: " + sayi);
//     break; // Exit the loop after 5 incorrect guesses.
//   }
// }