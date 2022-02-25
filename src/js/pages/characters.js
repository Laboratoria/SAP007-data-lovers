import data from "../../data/ghibli/ghibli.js";
import { menu } from "../components/header.js";
import { searchCharacters } from "../data.js";

menu();

function makeCharacterCards(dataAll) {
  document.getElementById("cardsCharacters").innerHTML = dataAll.films
    .map((film) =>
      film.people
        .map(
          (character) =>
            `
            <section class="cards">
              <img src="${character.img}"/>
              <h1>${character.name}</h1>
            </section>
            `
        )
        .join("")
    )
    .join("");
}

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const dataFiltered = searchCharacters.filterCharacters(e, data);
  makeCharacterCards(dataFiltered);
});

console.log(data);
makeCharacterCards(data);
// makeCharacterCards(data);
