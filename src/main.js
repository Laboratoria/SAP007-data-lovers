import { filterCharacter, sortNamesFilter, searchName } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function allCards(data) {
  document.querySelector(".result").innerHTML = data
    .map(
      (item) => `

        <li class="cards">
          <img class= "img-card" src="${item.image}" alt="cards"></img>
          <h1 class="card-name">${item.name}</h1>
          <ul class="info-list">
            <li>Status: ${item.status}</li>
            <li>Gênero: ${item.gender}</li>
            <li>Espécie: ${item.species}</li>
            <li>Origem: ${item.origin.name}</li>
          </ul>
        </li>
      `
    )
    .join("")
}
allCards(data.results);

const lifeSelect = document.getElementById("menu-filter-life");
const genderSelect = document.getElementById("menu-filter-gender");
const alphaSelect = document.getElementById("menu-sort");
const searchCharacter = document.getElementById("search");

function printStatus(event) {
  const statusResult = filterCharacter(data.results, event.target.value, "status");
  genderSelect.selectedIndex = 0;
  alphaSelect.selectedIndex = 0;
  return allCards(statusResult);
}
lifeSelect.addEventListener("change", printStatus);

function printGender(event) {
  const genderResult = filterCharacter(data.results, event.target.value, "gender");
  lifeSelect.selectedIndex = 0;
  alphaSelect.selectedIndex = 0;
  return allCards(genderResult);
}
genderSelect.addEventListener("change", printGender);

function sortAlphabetical(event) {
  const sortNameSelect = sortNamesFilter(data.results, event.target.value)
  lifeSelect.selectedIndex = 0;
  genderSelect.selectedIndex = 0;
  return allCards(sortNameSelect);
}
alphaSelect.addEventListener("change", sortAlphabetical);

function showSearch(event) {
  const nameResult = searchName(data.results, event.target.value)
  return allCards(nameResult);
}
searchCharacter.addEventListener("keyup", showSearch);



