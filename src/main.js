import { dataRickMorty } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


function showAllCards(data) {

  document.getElementById("result").innerHTML = data.map(
    (dado) => `

        <div class="characters-cards">
          <img src="${dado.image}">
          <h1>${dado.name}</h1>
          <ul class="info-list">
            <li>Status: ${dado.status}</li>
            <li>Gênero: ${dado.gender}</li>
            <li>Espécie: ${dado.species}</li>
            <li>Origem: ${dado.origin.name}</li>
          </ul >
        </div >
  `

  )
    .join("");
}
showAllCards(data.results);




const btn = document.getElementById('btn-submit').addEventListener('click', () => {
  botaCardsNaTela(arrayPersonagens)
})

