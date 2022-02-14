// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon
// let namePokemon = document.getElementById('name-pokemon')
// let image = document.getElementById('img-pokemon')
// let numPokemon = document.getElementById('num-pokemon')
// let typePokemon = document.getElementById('type-pokemon')
// let weaknessesPokemon = document.getElementById('weaknesses-pokemon')




const nameApear = () => {
    for (let onePokemon of pokemons) {
        let name = onePokemon.name
        console.log(name)
    }
}
nameApear()