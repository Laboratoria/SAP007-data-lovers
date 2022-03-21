import { filmesDiretores, moviesByScore } from './data.js';
import data from './data/ghibli/ghibli.js';


//console.log(example, data);

const infos = data.films;

function printar(infos) {

  document.getElementById("cards").innerHTML = infos.map((cards) =>
    `
     <div class = "cards">
        <h1>  ${cards.title}</h1>
        <img src = " ${cards.poster}" >
        <div class = "infos">
        <p> <b>Description</b> </P>
        <p>  ${cards.description}</p>
        <p> <b>Director</b> ${cards.director}</p>
        <p> <b>Producer</b> ${cards.producer}</p>
        <p> <b>Release Date</b> ${cards.release_date}</p>
        <p> <b>Score</b> ${cards.rt_score}</p>
        </div>
      </div>
    `
  ).join("")
}

printar(infos)

const btnFilmes = document.getElementById("films");

document.addEventListener("change", (event) => {
  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(data, directorSelect);
  printar(filtroDiretor)

})


document.addEventListener("change", (event) => {
  const scoreButton = document.getElementById("score");
  const scoreRate = scoreButton.selectedIndex;
  const selectedRate = scoreButton[scoreRate].value;
  const orderByScore = (moviesByScore(data, selectedRate))
  printar(orderByScore)

//console.log(orderByScore)

})










