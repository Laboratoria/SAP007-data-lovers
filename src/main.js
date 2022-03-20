import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ, sortZA  } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
  `<div class="info-cards"> 
   <p id="num">  ${item.num}</p> 
   <img class="img-card" src="${item.img}"/> 
   <p id="name">  Name:${item.name}</p> 
   <p id="type" > Type:${item.type}</p> 
   <p id="about"> About:${item.about}</p> 
   </div>`
    ).join("")

} 
cardsPokemons(pokemons);



const filterType = document.querySelector(".select-typefilters");

filterType.addEventListener("change", () => {
    const filterbyType = filterType.value;
    const arrFilter = selectType(filterbyType, pokemons);
    cardsPokemons(arrFilter);
    typePercent();
})

function typePercent() {
    document.getElementById("calculation").innerHTML = "";
    const filterType = document.querySelector(".select-typefilters").value;
    let result = calcType(pokemons, filterType);
    document.getElementById("calculation").innerText += `Os pokémons selecionados representam ${result}% do total.`
}
// Filtro de ordem select

const filterSelectOrder = document.querySelector("#order-search");

filterSelectOrder.addEventListener("change", (event) => {
    const orderType = event.target.value;
    const arrayOrdered = orderBy(orderType, pokemons);
    cardsPokemons(arrayOrdered);
})

// Filtro por input (texto) de nome

const order = document.getElementById('orderby');
order.addEventListener('change', () => {
  const orderbyValue = order.value;
  showData(pokedex.orderByName(data.pokemon, orderbyValue))
});

const filterInputType = document.querySelector("#inputSeaz");
console.log(filterInputType)
filterInputType.addEventListener("change", () => {
    const filterName = filterInputType.value;
    const arrFilter = searchByName(filterName, pokemons);
    cardsPokemon(arrFilter);
})

filterInputType.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
    }

    const filterName = event.target.value;
    const arrFilter = searchByName(filterName, pokemons);
    cardsPokemon(arrFilter);

})


const backColor = {
    water: '#6890F0',
    fire: '#F08030',
    grass: '#78C850',
    poison:'#A040A0',
    bug:'#729f3f',
    normal:'#a4acaf',
    flying:'#A890F0',
    fighting:'#C03028',
    electric:'#f8d030',
    ground:'#E0C068',
    psychic:'#F85888',
    rock:'#B8A038',
    ice:'#98D8D8',
    dragon: '#7038F8',
    ghost: '#705898',
    dark:'#705848',
    steel:'#B8B8D0',
    fairy:'#B8B8D0',
    
    }