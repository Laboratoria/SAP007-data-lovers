import data from './data/pokemon/pokemon.js';
import { selectType, calcType, ordenarPokemons } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
    const cardPokemon = document.getElementById("cards");
    cardPokemon.innerHTML = data.map((item) =>
        `<div class="info-cards"> 
   <p id="num">  ${item.num}</p> 
   <img class="img-card" src="${item.img}"/> 
   <p id="name">  Name:${item.name}</p> 
   <p id="type" > Type:${item.type.join(' | ')}</p> 
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

const selectOrdenar = document.getElementById("sortBy");
selectOrdenar.addEventListener("change", pegarOrdem);

function pegarOrdem() {
    const sortFilter = document.getElementById("sortBy").value;
    const ordered = ordenarPokemons(pokemons, sortFilter);
    pokemons(ordered);
    limparOrdem();
}
