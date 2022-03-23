import data from './data/pokemon/pokemon.js';
import { selectType, calcType, sortAZ } from './data.js'


const pokemons = data.pokemon;

function cardsPokemons(data) {
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
   </div>

   <div  class="backcard">
   <h3 class="titulo-especificacoes">Rarity</h3>
   <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>
   <h3 class="titulo-especificacoes">Egg</h3>
   <p class="pokemon-egg">${item.egg}</p>
   <h3 class="titulo-especificacoes">Evolution</h3>
   <p class="evolution">${item.evolution}</p>
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
    document.getElementById("calculation").innerText += `The selected pokemons represent ${result}% of the total`
}

const sortOrder = document.getElementById("sortAlphabet");

sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortAZ(pokemons, selectedSort);
    cardsPokemons(filterAz);
})
