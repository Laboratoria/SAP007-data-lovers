import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

/*const containerList = document.getElementById("list")
const pokemonModal = document.getElementById('miModal');

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