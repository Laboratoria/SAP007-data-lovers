// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;

function cardsPokemons(data) {
  const cardPokemon = document.getElementById("cards");
  cardPokemon.innerHTML = data.map((item) => 
    `<div class="info-cards">
       <img src="${item.img}"/>
        <p>${item.num}</p>
        <p>Name:${item.name}</p>
        <p>Type:${item.type}</p>
        <p>About:${item.about}</p>
      </div>`
  ).join("")
  
}
cardsPokemons(pokemons);
