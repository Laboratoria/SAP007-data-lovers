import data from './data/pokemon/pokemon.js';
import { selectType, calcType, ordenarPokemons } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
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

const selectOrdenar = document.getElementById("sortBy");
selectOrdenar.addEventListener("change", pegarOrdem);

function pegarOrdem() {
    const sortFilter = document.getElementById("sortBy").value;
    const ordered = ordenarPokemons(pokemons, sortFilter);
    pokemons(ordered);
    limparOrdem();
}
