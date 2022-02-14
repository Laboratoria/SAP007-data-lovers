//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

/*let namePokemon = document.getElementById('name-pokemon')
let image = document.getElementById('img-pokemon')
let numPokemon = document.getElementById('num-pokemon')
let typePokemon = document.getElementById('type-pokemon')
let weaknessesPokemon = document.getElementById('weaknesses-pokemon')*/


const pokemon = data.pokemon;



const pokemonFilter = () => {
    for (let pokemonData of data.pokemon) {
        let result = pokemonData.name
        console.log(result)
    }    

}

pokemonFilter ()

document.getElementById('buttonPollination').addEventListener("click", pollination);




//console.log(example, data);
