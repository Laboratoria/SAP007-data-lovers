import dataGhibli from "../../data/ghibli/ghibli.js";
import { sortArray } from "../data.js";
import { menu } from "../components/header.js";

console.log(dataGhibli);
const cardsContainer = document.createElement("section");
menu();

export function renderScreen(data) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
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

renderScreen(dataGhibli);
document.getElementById("inputSelect").addEventListener("change", (e) => {
  sortArray.filterArray(e.target.value);
});

const inputSearch = document.getElementById("inputSearch");
let ghibliMovies = [];
// console.log(inputSearch);

inputSearch.addEventListener("keyup", (e) => {
  console.log(e.target.value, "inputValue");

  const searchString = e.target.value.toLowerCase();
  const filterMovies = ghibliMovies.filter((movies) => {
    return movies.films.title.toLowerCase().includes(searchString);
  });

  console.log(filterMovies, "/////");
});
