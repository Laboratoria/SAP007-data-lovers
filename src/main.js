import { dataRickMorty } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";


document.getElementById("analysis").addEventListener("click", () => {
  allCards(data.results)
})

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
            <li>Origem: ${dado.origin}</li>
          </ul>
        </div>
      `
    );
  .join("");
}

