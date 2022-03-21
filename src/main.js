import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ, orderBy} from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
  `<div class="info-cards"> 
   <img class="img-card" src="${item.img}"/> 
   <p id="num">  ${item.num}</p> 
   <p id="name">  Name: ${item.name}</p> 
   <p id="type" > Type: ${item.type}</p> 
   <p id="about"> About: ${item.about}</p> 
   </div>`
    ).join("")

} 
cardsPokemons(pokemons);



const filterType = document.querySelector(".select-typefilters");

filterType.addEventListener("change", () => {
    const filterbyType = filterType.value;
    const arrayFiltered = selectType(filterbyType, pokemons);
    cardsPokemons(arrayFiltered);
    typePercent();
})

