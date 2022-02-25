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
          <img src="${dado.image}"></img>
          <h1>${dado.name}</h1>
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

function printStatus(event) {
  const statusResult = statusFilter(data.results, event.target.value);
  return allCards(statusResult);
}
lifeSelect.addEventListener("change", printStatus);


const genderSelect = document.getElementById("menu_filter_gender");

function printGender(event) {
  const genderResult = genderFilter(data.results, event.target.value);
  return allCards(genderResult);
}

genderSelect.addEventListener("change", printGender);


// event.target.value = buscar diretamente o valor definido no seletor

const alphaSelect = document.getElementById("menu_sort");

function sortAlphabetical(event) {
  const sortNameSelect = sortNamesFilter(data.results, event.target.value)
  return allCards(sortNameSelect);

};

alphaSelect.addEventListener("change", sortAlphabetical);



