import data from "../../data/ghibli/ghibli.js";
import { sortArray, filterMovies } from "../data.js";
import { menu } from "../components/header.js";

console.log(data);
const cardsContainer = document.createElement("section");
menu();

export function renderScreen(renderData) {
  document.getElementById("mainContainer").appendChild(cardsContainer);
  cardsContainer.classList.add("cardsContainer");
  cardsContainer.innerHTML = "";
  renderData.films.map((items) => {
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

document.getElementById("inputSelect").addEventListener("change", (e) => {
  sortArray.filterArray(e.target.value, data);
});

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMovies = filterMovies(searchString, data);
  renderScreen(filteredMovies);
});
renderScreen(data);
