import dataGhibli from "./data/ghibli/ghibli.js";
import { importToMain } from "./data.js";
console.log(dataGhibli);
importToMain();

let toggleButton = document.getElementById("toggleButton");
let navList = document.getElementById("navList");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");

dataGhibli.films.map((items) => {
  let card = document.createElement("ul");
  let title = document.createElement("h1");
  let poster = document.createElement("img");
  card.classList.add("cards");
  card.appendChild(poster);
  card.appendChild(title);
  document.body.appendChild(card);
  poster.src = items.poster;
  title.innerHTML = items.title;
});
