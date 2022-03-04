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
        ` <div class="background-card">
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
showOnCards(data.results);
//////////// pegar os elementos paga mostrar nos cartões
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
  const statisticGender = `${percentage(
    data.results.length,
    genderResults.length
  )}% dos personagens`;
  showStatistics(statisticGender);
  return showOnCards(genderResults);
}

/// por ESPECIES///
function showSpecies(e) {
  const resultSpecies = filterSpecies(data.results, e.target.value);
  const statisticSpecies = `${percentage(
    data.results.length,
    resultSpecies.length
  )}% dos personagens`;
  showStatistics(statisticSpecies);
  return showOnCards(resultSpecies);
}
/// pesquisa NOME///
function nameCharacters(e) {
  const characters = searchName(data.results, e.target.value);
  const statisticName = `${percentage(
    data.results.length,
    characters.length
  )} % dos personagens`;
  showStatistics(statisticName);
  return showOnCards(characters);
}

/// Estatisticas//
function showStatistics(data) {
  statisticText.innerHTML = `Está porcentagem representa ${data} dos personagens`;
  statisticText.style.display = "flex";
}

// ordem de AZ/ZA
function showOrdem(e) {
  const orderScreen = orderResults(data.results, e.target.value);
  return showOnCards(orderScreen);
}
