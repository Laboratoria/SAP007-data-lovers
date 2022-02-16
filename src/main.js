//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemon = data.pokemon; 

let namePokemon = document.getElementById('name-pokemon')
let image = document.getElementById('img-pokemon')
let numPokemon = document.getElementById('num-pokemon')
let typePokemon = document.getElementById('type-pokemon')
let weaknessesPokemon = document.getElementById('weaknesses-pokemon')

const smallCardPokemon = () => {
    let i = 0
    for (let onePokemon of pokemon){
        if (onePokemon === pokemon[0]){
            image.insertAdjacentHTML('afterbegin', `<img src="${onePokemon.img}" alt="Imagem Pokemon" class="">`)
            namePokemon.textContent = onePokemon.name  
            console.log(onePokemon)
        }
    }
}

smallCardPokemon()

// const pokemonFilter = () => {
//     for (let pokemonData of data.pokemon) {
//         let result = pokemonData.name
//         console.log(result)
//     }    

// }

// pokemonFilter ()