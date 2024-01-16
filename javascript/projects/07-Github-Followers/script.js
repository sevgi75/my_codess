const searchBtn = document.getElementById("button");
const searchInput = document.querySelector("#searchFollowers");
const cardsDiv = document.getElementById("cards");
// console.log("🚀 ~ file: script.js:2 ~ searchBtn:", searchBtn)

//+https://api.github.com/users/anthonyharold67/followers?per_page=100

let followers = [];

const getFollowers = async (username) => {
  cardsDiv.innerHTML = "";
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/followers?per_page=100`
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      followers = data;
      searchInput.style.display = "flex";
      data.forEach((item) => createElem(item));
    } else {
      searchInput.style.display = "none";
      cardsDiv.innerHTML = `<h1>Kullanıcı Bulunamadı</h1>`;
    }
    // const data = await res.json()
  } catch (error) {}
};
console.log(followers);

const createElem = (user) => {
  //   console.log(user);
  const { login, html_url, avatar_url } = user;
  //   console.log(user.login);
  //   console.log(login);
  const newElem = `
    <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;
  cardsDiv.innerHTML += newElem;
  // let cardCol = document.createElement("div");
  // cardCol.className = "col";
  // let cardDiv = document.createElement("div");
  // cardDiv.className = "card";
  // let cardImg = document.createElement("img");
  // cardImg.src = avatar_url;
  // cardImg.className = "card-img-top";
  // cardImg.alt = login;
  // let cardBody = document.createElement("div");
  // cardBody.className = "card-body";
  // let cardTitle = document.createElement("h5");
  // cardTitle.className = "card-title";
  // cardTitle.innerText = login;
  // let cardBtn = document.createElement("a");
  // cardBtn.className = "btn btn-dark";
  // cardBtn.innerText = "View Profile";
  // cardBtn.target = "_blank";
  // cardBtn.setAttribute("href", html_url);

  // cardCol.appendChild(cardDiv);
  // cardDiv.appendChild(cardImg);
  // cardDiv.appendChild(cardBody);
  // cardBody.appendChild(cardTitle);
  // cardBody.appendChild(cardBtn);

  // cardsDiv.appendChild(cardCol);
};

// getFollowers("sdasdfgasgfaf");
// getFollowers("anthonyharold67");
// getFollowers("esin");

searchBtn.addEventListener("click", () => {
  const value = document.getElementById("searchText").value.trim(); //! kullanıcın boş veya boşluk girmesi halini kontrol ettik.
  console.log(value);
  //   value.trim() && getFollowers(value)
  if (value) {
    getFollowers(value);
  } else {
    alert("Lütfen bir kullanıcı ismi giriniz.");
  }
});

//! input eventi inputu dinler. Kullanıcın yaptığı her değişiklikte çalışır.
searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  //   console.log(data);
  //   console.log(followers.filter((item) => item.login === e.target.value));
  //   console.log(followers.filter((item) => item.login.includes(e.target.value)));
  cardsDiv.innerHTML = "";
  followers
    .filter((item) =>
      item.login.toLowerCase().includes(e.target.value.toLowerCase())
    )
    .forEach((user) => createElem(user));
});

window.addEventListener("load", () => {
  searchInput.style.display = "none";
});
