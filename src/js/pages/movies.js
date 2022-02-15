import dataGhibli from "../../data/ghibli/ghibli.js";
import { sortArray } from "../data.js";
import { menu } from "../components/header.js";

console.log(menu);
console.log(dataGhibli);
menu();

export function renderScreen(data) {
  const cardsContainer = document.createElement("section");
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
sortArray();
document.getElementById("inputSelect").addEventListener("change", filterArray); //usar addEventListener pq o tipo modulo n deixa usar onchance no html :c
