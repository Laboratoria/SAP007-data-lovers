import { ascAlphabeth, descAlphabeth, speciesFilter, statusFilter, genderFilter, nameFilter, calculator } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const showCards = document.getElementById("cards");
const cardPrint = data.results;
function showInfos(cardPrint) {
  showCards.innerHTML = cardPrint.map(item =>
         `<div class="card-container">
            <div class="card-img">
              <img src="${item.image}">
            </div>
            <div class="card-infos"
              <p>Nome:${item.name}</p>
              <p>Status:${item.status}</p>
              <p>Espécie:${item.species}</p>
              <p>Gênero:${item.gender}</p>
            </div>
          </div>`
  ).join('')
}

showInfos(cardPrint);


const statusOption = document.querySelector(".status-btn");
const speciesOption = document.querySelector(".species-btn");
const genderOption = document.querySelector(".gender-btn");
const searchByName = document.getElementById("name-search");
const clearFilters = document.getElementById("btn-clear");

function ascOrder() {
  return showInfos(ascAlphabeth(cardPrint));
}
document.getElementById("btn-az").addEventListener("click", ascOrder);

function descOrder() {
  return showInfos(descAlphabeth(cardPrint));
}
document.getElementById("btn-za").addEventListener("click", descOrder);

function showCalculation(cardPrint) {
  const categoryResult = document.getElementById("calculation-result");
  categoryResult.innerHTML = `<p>O total de personagens dessa categoria é
  ${cardPrint}<p>`
  categoryResult.style.display = 'inline-block'
}

function filterByStatus() {
  const statusValue = statusOption.value;
  const charactersStatus = statusFilter(cardPrint, statusValue);
  const percentageStatus = `${calculator(cardPrint.length, charactersStatus.length)}% dos personagens`
  showCalculation(percentageStatus);
  return showInfos(charactersStatus);
}
statusOption.addEventListener("change", filterByStatus);

function filterBySpecies() {
  const specieValue = speciesOption.value;
  const charactersSpecies = speciesFilter(cardPrint, specieValue);
  const percentageSpecies = `${calculator(cardPrint.length, charactersSpecies.length)}% dos personagens`
  showCalculation(percentageSpecies);
  return showInfos(charactersSpecies);
}
speciesOption.addEventListener("change", filterBySpecies);

function filterByGender() {
  const genderValue = genderOption.value;
  const charactersGender = genderFilter(cardPrint, genderValue);
  const percentageGender = `${calculator(cardPrint.length, charactersGender.length)}% dos personagens`
  showCalculation(percentageGender);
  return showInfos(charactersGender);
}
genderOption.addEventListener("change", filterByGender);

function filterByName() {
  const nameValue = searchByName.value;
  const charactersName = nameFilter(cardPrint, nameValue);
  return showInfos(charactersName);
}
searchByName.addEventListener("keyup", filterByName);

function clearAll(){
  window.location.reload();
}
clearFilters.addEventListener("click", clearAll);

/*function showCalculation() {
  const categoryResult = document.getElementById("calculation-result");
  categoryResult.innerHTML = `<p> O total de personagens dessa categoria é
  ${calculator(filterByGender)}<p>`
}
showCalculation.addEventListener("change", calculator);*/


