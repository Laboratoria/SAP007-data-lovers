import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, calcType, sortAZ,} from './data.js'


const pokemons = data.pokemon;

function cardsPokemons(data) {
    document.getElementById("calculation").innerHTML = "";
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
        `<div class="info-cards"> 
   <p id="num">  ${item.num}</p> 
   <img class="img-card" src="${item.img}"/> 
   <h2> Name </h2>
   <p id="name">${item.name}</p> 
   <h2> Type</h2>
   <p id="type" >${item.type.join(' | ')}</p> 
   <h2> About</h2>
   <p id="about">${item.about}</p> 
   </div>

   <div  class="backcard">
   <h2 class="titulo-especificacoes">Rarity</h2>
   <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>
   <h2 class="titulo-especificacoes">Egg</h2>
   <p class="pokemon-egg">${item.egg}</p>
   <h2 class="titulo-especificacoes">Weaknesses</h2>
   <p class="pokemon-weaknesses">${item.weaknesses.join(", ")}</p>
   <h2 class="titulo-especificacoes">Spawn chance</h2>
   <p class="pokemon-weaknesses">${item["spawn-chance"]}%</p>
   </div>
  `
 
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

filterType.addEventListener("change", () => {
    const filterbyType = filterType.value;
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
   
  