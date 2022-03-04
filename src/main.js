import { ascAlphabeth, descAlphabeth, speciesFilter, statusFilter, genderFilter} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const showCards = document.getElementById("cards")
const cardPrint = data.results
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
          </div>
          `
   ).join('')
}

showInfos(cardPrint)


const statusOption = document.querySelector(".status-btn");
const speciesOption = document.querySelector(".species-btn");
const genderOption = document.querySelector(".gender-btn");
const searchByName = document.getElementById("name-search");


function ascOrder(){
  return showInfos(ascAlphabeth(data.results));
}
document.getElementById("btn-az").addEventListener("click", ascOrder);

function descOrder(){
  return showInfos(descAlphabeth(data.results));
}
document.getElementById("btn-za").addEventListener("click", descOrder);


function filterByStatus () {
  const statusValue = statusOption.value;
  const charactersStatus = statusFilter (data.results, statusValue);
  //console.log (charactersStatus)
  return showInfos(charactersStatus);
}
statusOption.addEventListener("change", filterByStatus);

function filterBySpecies () {
  const specieValue = speciesOption.value;
  const charactersSpecies = speciesFilter (data.results, specieValue);
  return showInfos (charactersSpecies);
}
speciesOption.addEventListener("change", filterBySpecies);

function filterByGender () {
  const genderValue = genderOption.value;
  const charactersGender = genderFilter (data.results, genderValue);
  return showInfos(charactersGender);
}
genderOption.addEventListener("change", filterByGender);
