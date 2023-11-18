//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

// https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=4c8668fd0dd8484f806177962a8c7b82

const getNews = async () => {

    const API_KEY = "4c8668fd0dd8484f806177962a8c7b82"
    const BASE_URL = "https://newsapi.org/v2/"
    const queryString = "top-headlines?country=de&category=sport"

    // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=4c8668fd0dd8484f806177962a8c7b82`)

    try {
        const res = await fetch(`${BASE_URL}${queryString}&apiKey=${API_KEY}`)
    const data = await res.json()
    console.log(data.articles);
    } catch (error) {
        console.log(error);        
    }   


}

window.addEventListener("load", () => {
    getNews()
})
