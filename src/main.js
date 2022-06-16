import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ, } from './data.js'


const pokemons = data.pokemon;

function cardsPokemons(data) {
  document.getElementById("calculation").innerHTML = "";
  const cardPokemon = document.getElementById("cards");
  cardPokemon.innerHTML = data.map((item) =>
    `<div class="info-cards" id="flip"> 
   <p id="num">  ${item.num}</p> 
   <img class="img-card" src="${item.img}"/> 
   <p class='title'>Name: </p>
   <p id="name">${item.name}</p> 
   <p class='title'>Type:</p>
   <p id="type" >${item.type.join(' | ')}</p> 
   <p class='title'>About:</p>
   <p id="about">${item.about}</p> 
   </div>`

  ).join("")

}
cardsPokemons(pokemons);

const search = document.getElementById("inputSearch")

search.addEventListener("keypress", () => {
  const searchName = search.value;
  const pokemonsName = searchByName(searchName, pokemons);
  cardsPokemons(pokemonsName);
})

const filterType = document.querySelector(".select-typefilters");

filterType.addEventListener("change", () => {
  const filterbyType = filterType.value;
  const arrFilter = selectType(filterbyType, pokemons);
  cardsPokemons(arrFilter);
  typePercent();
})


function typePercent() {

  const filterType = document.querySelector(".select-typefilters").value;
  let result = calcType(pokemons, filterType);
  document.getElementById("calculation").innerText += `The selected pokémon represent ${result}% of the total.`
}



const sortOrder = document.getElementById("sortAlphabet");

sortOrder.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  const filterAz = sortAZ(pokemons, selectedSort);
  cardsPokemons(filterAz);

})

const refreshPage = document.getElementById("clearButton")

refreshPage.addEventListener("click", () => cardsPokemons(pokemons));

