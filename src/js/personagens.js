import data from "../data/ghibli/ghibli.js";

const containerAnimes = document.getElementById("containerCardItem");

console.log(data.films);

data.films.forEach(mostrarPersonagens);

function mostrarPersonagens(film, index) {
  const cardAnime = document.createElement("div");
  cardAnime.className = "containerCardIndividual";
  cardAnime.innerHTML = `  
    <div class="conteinerImagem">
    <p id="titulo"> ${film.people[index]} </p>
    <img src= '${data.img}' id="imagem-poster"></img>
    <br>
      </div>
        
      <div class="container-info">
      <!--<div class="lançamento">${data.release_date}</div>-->
      </div>
      <div id="diretor">${data.age}</div>
      `;

  containerAnimes.appendChild(cardAnime);
}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});
