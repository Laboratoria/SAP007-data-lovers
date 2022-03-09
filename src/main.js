import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

/*const containerList = document.getElementById("list")
const pokemonModal = document.getElementById('miModal');

<<<<<<< HEAD
let body = document.getElementsByTagName("body")[0];

const showData = function (pokemonArray) {
  containerList.innerHTML = ""


  pokemonArray.forEach( pokemon => {
    const item = document.createElement('li')
    item.className = 'pokemon '
    item.id = pokemon.num
    containerList.appendChild(item).innerHTML = `
         <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
         <section class="imgCard">
           <figure id="pokemon-${pokemon.num}" class="card">
             <p class="name">${pokemon.name}</p>
             <img src="${pokemon.img}" class="imgPokemon">
           </figure>
         </section>
         <div class="type">${pokemon.type.map(type => '<span class="' + type + '">'+ type +'</span>').join('')}</div>/*  */
=======
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

>>>>>>> a6442db1b9666fb991a3bcf17200b1938ef43cc9
