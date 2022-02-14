import dataGhibli from "./data/ghibli/ghibli.js";
import { importToMain } from "./data.js";
console.log(dataGhibli);
importToMain();
let toggleButton = document.getElementById("toggleButton");
let navList = document.getElementById("navList");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
  });


const cardsContainer = document.createElement("section");
cardsContainer.classList.add("cardsContainer");
document.body.appendChild(cardsContainer);
function filterArray() {
  let selectValueDropDown = document.getElementById("inputSelect").value;
  dataGhibli.films.sort((a, b) => {
    let titleA = a.title.toLowerCase(),
      titleB = b.title.toLowerCase(),
      ratingA = parseInt(a.rt_score),
      ratingB = parseInt(b.rt_score),
      DataA = parseInt(a.release_date),
      DataB = parseInt(b.release_date);

    if (selectValueDropDown == "A-Z") {
      return ordenar(titleA, titleB);
    }
    if (selectValueDropDown == "Z-A") {
      return ordenarInvers(titleA, titleB);
    }
    if (selectValueDropDown == "highestScore") {
      return ordenarInvers(ratingA, ratingB);
    }
    if (selectValueDropDown == "lowestScore") {
      return ordenar(ratingA, ratingB);
    }
    if (selectValueDropDown == "maisnovo") {
      return ordenarInvers(DataA, DataB);
    }
    if (selectValueDropDown == "maisvelho") {
      return ordenar(DataA, DataB);
    }
  });
  console.log(dataGhibli);

  renderScreen(dataGhibli);
}
function ordenar(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function ordenarInvers(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}
function renderScreen(data) {
  cardsContainer.innerHTML = "";

  data.films.map((items) => {
    const card = document.createElement("ul");
    const title = document.createElement("h1");
    const poster = document.createElement("img");
    const divTitle = document.createElement("div");

    divTitle.appendChild(title);
    card.appendChild(poster);
    card.appendChild(divTitle);
    cardsContainer.appendChild(card);

    card.classList.add("cards");
    title.classList.add("titleWithinCard");
    poster.classList.add("poster");
    divTitle.classList.add("divTitle");
    poster.src = items.poster;
    poster.title = items.title;
    title.innerHTML = items.title;
  });
}
filterArray();
document.getElementById("inputSelect").addEventListener("change", filterArray); //usar addEventListener pq o tipo modulo n deixa usar onchance no html :c





