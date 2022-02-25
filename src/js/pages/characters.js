import data from "../../data/ghibli/ghibli.js";
import { menu } from "../components/header.js";
import { filterCharacters, getCharacters } from "../data.js";

menu();

const charactersAll = getCharacters(data.films);

console.log(charactersAll, "charactersAll");

function makeCharacterCards(people) {
  document.getElementById("cardsCharacters").innerHTML = people
    .map(
      (character) =>
        `
            <section class="cards">
              <img src="${character.img}"/>
              <h1>${character.name}</h1>
            </section>
            `
    )
    .join("");
}

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const searchTitle = e.target.value.toLowerCase();
  const dataFiltered = filterCharacters(searchTitle, data.films);
  makeCharacterCards(dataFiltered);
});

console.log(charactersAll);
makeCharacterCards(charactersAll);
// makeCharacterCards(data);
