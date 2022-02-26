//DOM, event listeners, event handlers

import {
  filterGender,
  filterSpecies,
  searchName,
  percentage,
  orderResults,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
function showOnCards(data) {
  document.getElementById("card-information").innerHTML = data
    .map(
      (item) =>
        ` <div class="cards">
<div class="front-image">
<img class="image-card" src="${item.image}">
</div>
  <div class="front-text">
  <ul class="text-cards">
  <li>Nome: ${item.name}</li>
  <li> Status:${item.status}</li>
  <li>Espécie:${item.species}</li>
  <li>Origem:${item.origin.name}</li>
  <li>Gênero:${item.gender}</li>
  </ul>
  </div>
  </div>

  `
    )
    .join("");
}
//////////// pegar os elementos paga mostrar nos cartões
showOnCards(data.results);
const genderSelection = document.querySelector("#filters-genders");
const speciesSelection = document.querySelector("#filters-species");
const alphabetical = document.querySelector("#alphabetic-sequence");
const statisticText = document.getElementById("statistics-infos");
const nameCharacter = document.getElementById("filters-names");
////////////////////////// escutador dos eventos(fofoqueiro)
genderSelection.addEventListener("change", showGender);
speciesSelection.addEventListener("change", showSpecies);
alphabetical.addEventListener("change", showOrdem);
statisticText.addEventListener("change", showStatistics);
nameCharacter.addEventListener("change", nameCharacters);

///////////////////////funções

function showGender(e) {
  const genderResults = filterGender(data.results, e.target.value);
  const statisticgender = `${percentage(
    data.results.length,
    genderResults.length
  )}% of character`;
  showOnCards(statisticgender);
  return showOnCards(genderResults);
}

function showSpecies(e) {
  const speciesResults = filterSpecies(data.results, e.target.value);
  const statisticgender = `${percentage(
    data.results.length,
    speciesResults.length
  )}% of character`;
  showOnCards(statisticgender);
  return showOnCards(speciesResults);
}

function nameCharacters(e) {
  const characters = searchName(data.results, e.target.value);
  return showOnCards(characters);
}
function showStatistics(data) {
  nameCharacter.innerHTML = `this category represents${data}`;
  nameCharacter.style.display = "inline-block";
}

function showOrdem(e) {
  const orderScreen = orderResults(data.results, e.target.value);
  return showOnCards(orderScreen);
}
