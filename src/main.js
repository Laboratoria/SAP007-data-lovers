import { filmesDiretores, moviesByScore, sortMoviesByyear, porcMoviesDirector, sortMoviesAz } from './data.js';
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


const directorsButton = document.getElementById("director");
directorsButton.addEventListener("change", () => {

  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(data, directorSelect);
  printar(filtroDiretor)

  document.querySelector(".curiosity").innerHTML = `A porcentagem de filmes dirigidos por ${directorSelect} é de ${(porcMoviesDirector(data, filtroDiretor))}%`
})

const scoreButton = document.getElementById("score");

scoreButton.addEventListener("change", () => {
  const scoreButton = document.getElementById("score");
  const scoreRate = scoreButton.selectedIndex;
  const selectedRate = scoreButton[scoreRate].value;
  const orderByScore = (moviesByScore(data, selectedRate))
  printar(orderByScore)


});

const sortOrder = document.getElementById("year");

sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const orderYear = sortMoviesByyear(data, selectedSort);
    printar(orderYear);
});

const sortOrderAz = document.getElementById("films");

sortOrderAz.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortMoviesAz(data, selectedSort);
    printar(filterAz);
})

