import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ, sortZA  } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
  `<div class="info-cards"> 
   <img class="img-card" src="${item.img}"/> 
   <p id="num">  ${item.num}</p> 
   <p id="name">  Name:${item.name}</p> 
   <p id="type" > Type:${item.type}</p> 
   <p id="about"> About:${item.about}</p> 
   </div>`
    ).join("")

} 
cardsPokemons(pokemons);



const filterInputType = document.querySelector("txtSearch");

filterInputType.addEventListener("change", () => {
    const filterName = filterInputType.value;
    const arrayFiltered = searchByName(filterName, pokemons);
    cardsPokemons(arrayFiltered);
})



filterInputType.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
    }

    const filterName = event.target.value;
    const arrayFiltered = searchByName(filterName, pokemons);
    cardsPokemons(arrayFiltered);

})


function typePercent() {
    document.getElementById("calculation").innerHTML = "";
    const filterType = document.getElementById("filter-type").value;
    let result = calcType(pokemons, filterType);

    document.getElementById("calculation").innerText += `Os pokémons selecionados representam ${result}% do total.`
}



const filterType = document.getElementById("types-filter");

filterType.addEventListener("change", () => {
    const filterType = filterType.value;
    const arrayFiltered = selectType(filterType, pokemons);
    cardsPokemons(arrayFiltered);
    typePercent();
})


const sortBy = document.getElementById("sortAlphabet");

 sortBy.addEventListener("change", (event)=> {
     const AZ = event.terget.value;
     const arraySort = (AZ, pokemons);
     cardsPokemons(arraySort); 
 })
