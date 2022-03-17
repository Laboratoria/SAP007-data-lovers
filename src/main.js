import { filmesDiretores } from './data.js';
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
        <p>   ${cards.description}</p>
        <p>  ${cards.producer}</p>
        <p>  ${cards.director}</p>
        <p>  ${cards.release_date}</p>
        </div>
      </div>
    `
  ).join("")
}

printar(infos)

const btnFilmes = document.getElementById("films");

document.addEventListener("change", () => {

  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(filmes, directorSelect);
  printar(filtroDiretor)


})












