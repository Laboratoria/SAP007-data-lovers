import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


const pokemons = data.pokemon.slice(0, 251)

const cardsPokemon = document.getElementById("cards");

cardsPokemons(pokemons);


function cardsPokemons(arrayPokemon){
    let cards = "";
    arrayPokemon.map(actualPokemon => {
        const types = actualPokemon.types;
        cards +=
            `<div class="card" '${types['']}'>
        <img class="card-image " alt="${actualPokemon.name}" src="https://www.serebii.net/pokemongo/pokemon/${actualPokemon.num}.png" />
        <h2 class="card-title"> ${actualPokemon.num}. ${actualPokemon.name} </h2>
        <p class="card-subtitle" id="card-subtitle">${actualPokemon.size.height} | ${actualPokemon.size.weight} </p>
        <p class="card-subtitle2" id="card-subtitle2">${types.join(' | ')} </p>
        <p class="card-subtitle3" id="card-subtitle">${actualPokemon.generation.name} </p>
        </div>`
    });
     console.log(arrayPokemon)
    cardsPokemon.innerHTML = cards;
    
}

function showCalc() {
    document.getElementById("calculation").innerHTML = "";
    const filterType = document.getElementById("filter-type").value;
    let result = calcType(pokemons, filterType);

    document.getElementById("calculation").innerText += `Os pokémons desse tipo representam ${result}% do total.`
}