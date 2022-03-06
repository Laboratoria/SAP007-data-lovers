import data from "../../data/ghibli/ghibli.js";
import { menu } from "../components/header.js";
import { filterCharacters, getCharacters } from "../data.js";

menu();

document.getElementById("form").reset();

const charactersAll = getCharacters(data.films);

console.log(charactersAll, "charactersAll");

function makeCharacterCards(people) {
  document.getElementById("cardsCharacters").innerHTML = people
    .map(
      (character) =>
        `
          <div class="cardsCharactersContainer">
            <section class="cards-front card-border">
              <img src="${character.img}"/>
              <h3>${character.name}</h3>
            </section>
            <section class="cards-back card-border">
              <h3>${character.name}</h3>
              <p>Gender: ${character.gender}</p>
              <p>Age: ${character.age}</p>
              <p>Eye-color: ${character.eye_color}</p>
              <p>Hair-color: ${character.hair_color}</p>
              <p>Species: ${character.specie}</p>
            </section>
          </div>
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
