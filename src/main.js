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
<<<<<<< HEAD
        ` <div class="cards-section background-card">
=======
        ` <div class="cards">
>>>>>>> 4610a321f41e2e1d64b05bdb80a55595b9647ada
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
const genderSelection = document.getElementById("filters-genders");
const speciesSelection = document.getElementById("filters-species");
const alphabetical = document.getElementById("alphabetic-sequence");
const statisticText = document.getElementById("statistics-infos");
const nameCharacter = document.getElementById("filters-names");
////////////////////////// escutador dos eventos(fofoqueiro)
genderSelection.addEventListener("change", showGender);
speciesSelection.addEventListener("change", showSpecies);
alphabetical.addEventListener("change", showOrdem);
statisticText.addEventListener("change", showStatistics);
nameCharacter.addEventListener("keyup", nameCharacters);

///////////////////////FUNÇÕES
/// por GÊNEROS///
function showGender(e) {
  const genderResults = filterGender(data.results, e.target.value);
  const statisticgender = `${percentage(
    data.results.length,
    genderResults.length
  )}% of character`;
  showStatistics(statisticgender);
  return showOnCards(genderResults);
}

/// por ESPECIES///
function showSpecies(e) {
  const speciesResults = filterSpecies(data.results, e.target.value);
  const statisticgender = `${percentage(
    data.results.length,
    speciesResults.length
  )}% of character`;
  showStatistics(statisticgender);
  showOnCards(speciesResults);
}
/// pesquisa NOME///
function nameCharacters(e) {
  const characters = searchName(data.results, e.target.value);
  return showOnCards(characters);
}

/// Estatisticas//
function showStatistics(data) {
  nameCharacter.innerHTML = `this category represents${data}`;
  nameCharacter.style.display = "inline-block";
}
// ordem de AZ/ZA
function showOrdem(e) {
  const orderScreen = orderResults(data.results, e.target.value);
  return showOnCards(orderScreen);
}
