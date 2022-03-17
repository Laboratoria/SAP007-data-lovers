import data from './pokemon.js';
import { searchByName, selectType, calcType, sortAZ, sortZA  } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
        `<div class="info-cards"> <img src="${item.img}"/> 
   <p>${item.num}</p> 
   <p>Name:${item.name}</p> 
   <p>Type:${item.type}</p> 
   <p>About:${item.about}</p> 
   </div>`
    ).join("")

} 
cardsPokemons(pokemons);


// Filtros tipo select 

const filterType = document.getElementById("types-filter");

filterType.addEventListener("change", () => {
    const filterType = filterType.value;
    const arrayFiltered = selectType(filterType, pokemons);
    cardsPokemons(arrayFiltered);
    typePercent();
})

function typePercent() {
    document.getElementById("aggregate-calculation").innerHTML = "";
    const filterType = document.getElementById("filter-type").value;
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

const filterInputType = document.querySelector("#search-input");

filterInputType.addEventListener("change", () => {
    const filterName = filterInputType.value;
    const arrayFiltered = searchByName(filterName, pokemons);
    cardsPokemon(arrayFiltered);
})

filterInputType.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
    }

    const filterName = event.target.value;
    const arrayFiltered = searchByName(filterName, pokemons);
    cardsPokemons(arrayFiltered);

})
