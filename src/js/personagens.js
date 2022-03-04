import data from "../data/ghibli/ghibli.js";
import { filterDataGênero, filterDataEspécie } from "./data.js";

//const que captura o valor do elemento HTML a ser preenchido pela div cardAnime
const containerAnimes = document.getElementById("containerCardItem");

//let que armazena a propriedade films de ghibli.js
let filmesData = data.films;

let characters = [];

filmesData.map((film) => {
  const people = film.people;
  for (let j = 0; j < people.length; j++) {
    characters.push(people[j])
  }
})

function mostrarPersonagens(personagens) {
  
    //loop que percorre cada objeto do array da propriedade people
    for (let j = 0; j < personagens.length; j++) {

  const cardAnime = document.createElement("section");
  cardAnime.className = "container-card-individual";
  cardAnime.innerHTML = `
    <div class="conteinerImagem">
    <p id="titulo"> ${personagens[j].name} </p>
    <img src= '${personagens[j].img}' id="imagem-poster"></img>
    <br>
      </div>
        
      <div class="container-info">
      <!--<div class="lançamento">${personagens[j].age}</div>-->
      </div>
      <div id="diretor">${personagens[j].gender}</div>
      `;
  containerAnimes.appendChild(cardAnime);
}}
  
mostrarPersonagens(characters);

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});

document.getElementById("filtroGêneroItem").addEventListener("change", () => {
  let gênero = document.querySelector(".filtro-gênero");
  let personagensFiltrados = filterDataGênero(characters, gênero.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
});

document.getElementById("filtroEspécieItem").addEventListener("change", () => {
  let espécie = document.querySelector(".filtro-espécie");
  let personagensFiltrados = filterDataEspécie(characters, espécie.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
});