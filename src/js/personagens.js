import data from "../data/ghibli/ghibli.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

for (let i = 0; i < filmesData.length; i++) {
  let personagens = filmesData[i].people;

  const cardAnime = document.createElement("div");
  cardAnime.className = "containerCardIndividual";
  cardAnime.innerHTML = `  
    <div class="conteinerImagem">
    <p id="titulo"> ${personagens[i].name} </p>
    <img src= '${personagens[i].img}' id="imagem-poster"></img>
    <br>
      </div>
        
      <div class="container-info">
      <!--<div class="lançamento">${personagens[i].age}</div>-->
      </div>
      <div id="diretor">${personagens[i].specie}</div>
      `;

  containerAnimes.appendChild(cardAnime);
}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});