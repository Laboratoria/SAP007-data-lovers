import data from "../data/ghibli/ghibli.js";
import { filterDataGênero } from "./data.js";

//const que captura o valor do elemento HTML a ser preenchido pela div cardAnime
const containerAnimes = document.getElementById("containerCardItem");

//let que armazena a propriedade films de ghibli.js
let filmesData = data.films;

let personaData = filmesData.map((item) => item.people);
console.log(personaData)

filmesData.forEach(mostrarPersonagens); //mapeando array films com método de callback forEach

function mostrarPersonagens() {
  for (let i = 0; i < filmesData.length; i++) {
    //let que acessa os objetos do array contido na propriedade people
    let personagens = filmesData[i].people;
  
    //loop que percorre cada objeto do array da propriedade people
    for (let j = 0; j < personagens.length; j++) {
      console.log(personagens);

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
}}}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});

document.getElementById("filtroGêneroItem").addEventListener("change", () => {
  let gênero = document.querySelector(".filtro-gênero");
  let filterItem = filterDataGênero(personaData, gênero.value);
  containerAnimes.innerHTML = "";
  filterItem.forEach(mostrarPersonagens);
});