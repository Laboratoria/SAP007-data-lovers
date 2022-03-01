import { statusFilter, genderFilter, sortNamesFilter } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

document.querySelector(".imgback").addEventListener("click", () => {
  window.location.href = "index.html"
});

function allCards(data) {
  document.querySelector(".result").innerHTML = data
    .map(
      (dado) => `

        <div class="cards">
          <img class= "img-card" src="${dado.image}" alt="cards"></img>
          <h1 class="card-name">${dado.name}</h1>
          <ul class="info-list">
            <li>Status: ${dado.status}</li>
            <li>Gênero: ${dado.gender}</li>
            <li>Espécie: ${dado.species}</li>
            <li>Origem: ${dado.origin.name}</li>
          </ul>
        </div>
      `
    )
    .join(" ")
}

allCards(data.results);



const lifeSelect = document.getElementById("menu_filter_life");
const genderSelect = document.getElementById("menu_filter_gender");
const alphaSelect = document.getElementById("menu_sort");


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

};

alphaSelect.addEventListener("change", sortAlphabetical);



