import { statusFilter, genderFilter } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";


/*document.getElementById("characters").addEventListener("click", () => {
  window.location.href = "cards.html"
  allCards(data.results)
})*/

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
    .join("");

}


//Seletores

const lifeSelect = document.getElementById("menu_filter_life");
const genderSelect = document.getElementById("menu_filter_gender");
const sortSelect = document.getElementById("menu_sort");


//Funções
function printStatus(e) {
  const statusResult = statusFilter(data.results, e.target.value);
  console.log(statusResult)
  //return allCards(statusResult);
}
lifeSelect.addEventListener("change", printStatus);


function printGender(e) {
  const genderResult = genderFilter(data.results, e.target.value);
  console.log(genderResult);
  //return allCards(genderResult);
}

genderSelect.addEventListener("change", printGender);

// event.target.value = buscar diretamente o valor definido no seletor



