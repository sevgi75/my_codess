import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `<section id="users"></section>`

const getUser = () => {
  fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res)
    if (!res.ok) {
      //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
      throw new Error(`Hata: ${res.status}`) //? bir hata firlatiyoruz
    }
    return res.json()
  })
  .then((data) => {
    // veri = data
    // console.log(veri)
    show(data)
  })
  .catch((err) => showError(err))

console.log(veri)


}


const show = (users) => {
  const userSection = document.getElementById("users")

  users.forEach((user) => {
    userSection.innerHTML += `
        <h1>${user.login}</h1>
        <img src="${user.avatar_url}" width="200px" alt="" />
        <p><a href="${user.html_url}" target="_blank">URL</a></p> 
    `
  })
}

const showError = (err) => {
  const userSection = document.getElementById("users")
  userSection.innerHTML = `<h1>${err}</h1>
  <img src="./img/404.png" alt="">
  `
}