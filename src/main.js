import { statusFilter, genderFilter, sortNamesFilter, searchName } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

function allCards(data) {
  document.querySelector(".result").innerHTML = data
    .map(
      (dado) => `

        <li class="cards">
          <img class= "img-card" src="${dado.image}" alt="cards"></img>
          <h1 class="card-name">${dado.name}</h1>
          <ul class="info-list">
            <li>Status: ${dado.status}</li>
            <li>Gênero: ${dado.gender}</li>
            <li>Espécie: ${dado.species}</li>
            <li>Origem: ${dado.origin.name}</li>
          </ul>
        </li>
      `
    )
    .join(" ")
}

allCards(data.results);



const lifeSelect = document.getElementById("menu_filter_life");
const genderSelect = document.getElementById("menu_filter_gender");
const alphaSelect = document.getElementById("menu_sort");
const searchCharacter = document.getElementById("search");


//FUNÇÕES
function printStatus(event) {
  const statusResult = statusFilter(data.results, event.target.value);
  genderSelect.selectedIndex = 0;//reseta o botão do Gênero, seta o índice para zero
  alphaSelect.selectedIndex = 0; //reseta o botão de Ordenar

  return allCards(statusResult);

}
lifeSelect.addEventListener("change", printStatus);


function printGender(event) {
  const genderResult = genderFilter(data.results, event.target.value);
  lifeSelect.selectedIndex = 0; //reseta o botão de Status, seta o índice para zero
  alphaSelect.selectedIndex = 0;//reseta o botão de Ordenar

  return allCards(genderResult);
}

genderSelect.addEventListener("change", printGender);

// event.target.value = buscar diretamente o valor definido no seletor


function sortAlphabetical(event) {
  const sortNameSelect = sortNamesFilter(data.results, event.target.value)
  lifeSelect.selectedIndex = 0;
  genderSelect.selectedIndex = 0;
  return allCards(sortNameSelect);
}

alphaSelect.addEventListener("change", sortAlphabetical);


//Função Pesquisar
function showSearch(event) {
  const nameResult = searchName(data.results, event.target.value)

  return allCards(nameResult);
}

searchCharacter.addEventListener("keyup", showSearch);



