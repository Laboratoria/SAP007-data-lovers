import data from "../data/ghibli/ghibli.js";

//const que captura o valor do elemento HTML a ser preenchido pela div cardAnime
const containerAnimes = document.getElementById("containerCardItem");

//let que armazena a propriedade films de ghibli.js
let filmesData = data.films;

//loop que percorre toda a propriedade films (todos os filmes)
for (let i = 0; i < filmesData.length; i++) {
  //let que acessa os objetos do array contido na propriedade people
  let personagens = filmesData[i].people;

  //loop que percorre cada objeto do array da propriedade people
  for (let j = 0; j < personagens.length; j++) {
    console.log(personagens);

    //const cardAnime cria um elemento a ser adicionado ao HTML pelo appendChild
    const cardAnime = document.createElement("div");
    cardAnime.className = "containerCardIndividual"; //dando uma classe ao elemento criado (cardAnime)
    //a propriedade innerHTML define, na sintaxe HTML, o conteúdo que preencherá o elemento criado (cardAnime)
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
      `; //o template ${} transforma o conteúdo das propriedades mencioadas em strings

    containerAnimes.appendChild(cardAnime); //método appendChild adiciona um elemento
    // filho (cardAnime) ao elemento do HTML pai (containerAnimes)
  }
}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});