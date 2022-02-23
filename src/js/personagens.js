import data from "../data/ghibli/ghibli.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

for (let i = 0; i < filmesData.length; i++) {
  let personagens = filmesData[i].people;
  
  for (let j = 0; j < personagens.length; j++) {

  console.log(personagens);

  const cardAnime = document.createElement("div");
  cardAnime.className = "containerCardIndividual";
  cardAnime.innerHTML = `  
    <div class="conteinerImagem">
    <p id="titulo"> ${personagens[j].name} </p>
    <img src= '${personagens[j].img}' id="imagem-poster"></img>
    <br>
      </div>
        
      <div class="container-info">
      <!--<div class="lançamento">${personagens[j].age}</div>-->
      </div>
      <div id="diretor">${personagens[j].specie}</div>
      `;

  containerAnimes.appendChild(cardAnime);
}}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});