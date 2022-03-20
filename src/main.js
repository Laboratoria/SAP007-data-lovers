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
