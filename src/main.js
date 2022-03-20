import { filmesDiretores, sortMoviesByyear} from './data.js';
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


document.addEventListener("change", () => {



  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(data, directorSelect);
  printar(filtroDiretor)

//console.log(directorSelect)
});



document.addEventListener("change", () => {
  const yearButton = document.getElementById("year");
  const yearIndex = yearButton.selectedIndex;
  const yearSelect = yearButton[yearIndex].value;
  const yearCresc = sortMoviesByyear(data, yearSelect);
  printar(yearCresc)
  console.log(yearCresc)

});

/*document.addEventListener("change", () => {
  const azButton = document.getElementById("films");
  const azIndex = azButton.selectedIndex;
  const ordeSelect = azButton[azIndex].value;
  const azCresc = ordeMovies(data, ordeSelect);
  printar(azCresc)
  console.log(azCresc)

});*/





/*document.addEventListener("change", () => {
  const yearButton = document.getElementById("year");
  const yearIndex = yearButton.selectedIndex;
  const yearSelect = yearButton[yearIndex].value;
  const yearDesc = yearDescending(data, yearSelect);
  printar(yearDesc)
console.log(yearDesc)

});*/













