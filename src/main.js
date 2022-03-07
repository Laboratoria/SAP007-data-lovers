import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example, data);

const pokemons = data.pokemon.slice(1, 151),
const cardsPokemon = getElementById("cards")


function cardsPokemon(arrayPokemon){
    let cards = "";
    arrayPokemon.map(actualPokemon) => {
        const types = actualPokemon.types;
        cards +=
            `<div class="card" '${types[0]}'>
        <img class="card-image " alt="${actualPokemon.name}" src="https://www.serebii.net/pokemongo/pokemon/${actualPokemon.num}.png" />
        <h2 class="card-title"> ${actualPokemon.num}. ${actualPokemon.name} </h2>
        <p class="card-subtitle" id="card-subtitle">${actualPokemon.size.height} | ${actualPokemon.size.weight} </p>
        <p class="card-subtitle2" id="card-subtitle2">${types.join(' | ')} </p>
        <p class="card-subtitle3" id="card-subtitle">${actualPokemonl.generation.name} </p>
        </div>`;
    });

    cardPokemon.innerHTML = cards;
}
cardsPokemon(pokemons);
