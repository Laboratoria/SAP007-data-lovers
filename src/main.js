import { filmesDiretores, moviesByScore, sortMoviesByyear, porcMoviesDirector } from './data.js';
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

  console.log(porcMoviesDirector(data))
})

const scoreButton = document.getElementById("score");

scoreButton.addEventListener("change", () => {
  const scoreButton = document.getElementById("score");
  const scoreRate = scoreButton.selectedIndex;
  const selectedRate = scoreButton[scoreRate].value;
  const orderByScore = (moviesByScore(data, selectedRate))
  printar(orderByScore)

  //console.log(orderByScore)

});

const sortOrder = document.getElementById("year");

sortOrder.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  const filterAz = sortMoviesByyear(data, selectedSort);
  printar(filterAz);
})



/*const yearButton =document.getElementById("year");
yearButton.addEventListener("change", (event) => {


  const yearIndex = yearButton.selectedIndex;
  const yearSelect = yearButton[yearIndex].value;
  const yearCresc = sortMoviesByyear(data,yearSelect);
  printar(yearCresc)
  console.log(yearCresc)

});


/*const yearButtondesc = document.getElementById("year");
  yearButtondesc.addEventListener("change", (event) => {


  const yearIndex = yearButtondesc.selectedIndex;
  const yearSelect = yearButtondesc[yearIndex].value;
  const yearDesc = yearDescending(data, yearSelect);
  printar(yearDesc)
  console.log(yearDesc)

});

/*const azButton = document.getElementById("films");

azButton.addEventListener ("change", () =>{
  const azButton = document.getElementById("films");
  const azIndex = azButton.selectedIndex;
  const azSelect = azButton[azIndex].value;
  const orderAz = ordeMovies(data, azSelect)
  printar (orderAz)
 console.log(orderAz)
});*/










