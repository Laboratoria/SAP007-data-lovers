import data from "../data/ghibli/ghibli.js";
import { filterData } from "./data.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

filmesData.forEach(mostrarFilmes); //mapeando array films com método de callback forEach

function mostrarFilmes(data) {
  const cardAnime = document.createElement("section");
  cardAnime.className = "containerCardIndividual";
  cardAnime.innerHTML = `
    <div class="conteinerImagem">
    <p id="titulo"> ${data.title} </p>
    <img src= '${data.poster}' id="imagem-poster"></img>
    <br>
      </div>
        
      <div class="container-info">
      <!--<div class="lançamento">${data.release_date}</div>-->
      </div>
      <div id="diretor">${data.director}</div>
      `;
  containerAnimes.appendChild(cardAnime);
}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});

document
  .getElementById("filtroDiretorItem")
  .addEventListener("change", () => {
    let diretores = document.querySelector(".filtroDiretor")
    let filterItem= filterData(filmesData, diretores.value)
    containerAnimes.innerHTML = "";
    filterItem.forEach(mostrarFilmes);
  }
  );