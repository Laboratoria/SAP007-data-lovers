import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ,} from './data.js'


const pokemons = data.pokemon;

function cardsPokemons(data) {
    document.getElementById("calculation").innerHTML = "";
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
        `<div class="info-cards" id="flip"> 
   <p id="num">  ${item.num}</p> 
   <img class="img-card" src="${item.img}"/> 
   <h3> Name </h3>
   <p id="name">${item.name}</p> 
   <h3> Type</h3>
   <p id="type" >${item.type.join(' | ')}</p> 
   <h3> About</h3>
   <p id="about">${item.about}</p> 
   </div>`
 
    ).join("")

}
cardsPokemons(pokemons);

const search = document.getElementById("inputSearch")

search.addEventListener("keypress", (e) => {
    const searchName = e.target.value;
    const pokemonsName = searchByName(searchName, pokemons);
    cardsPokemons(pokemonsName);
})
console.log(search)

const filterType = document.querySelector(".select-typefilters");

selectPokemonType.addEventListener("change", () => {
    const filterbyType = selectPokemonType.value;
    const arrFilter = selectType(filterbyType, pokemons);
    cardsPokemons(arrFilter);
    typePercent();
})


function typePercent() {
    
    const filterType = document.querySelector(".select-typefilters").value;
    let result = calcType(pokemons, filterType);
    document.getElementById("calculation").innerText += `Os pokémons selecionados representam ${result}% do total.`
}



const sortOrder = document.getElementById("sortAlphabet");

sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortAZ(pokemons, selectedSort);
    cardsPokemons(filterAz);

})

const refreshPage = document.getElementById("clearButton")

  refreshPage.addEventListener("click", () => cardsPokemons(pokemons));
   
  