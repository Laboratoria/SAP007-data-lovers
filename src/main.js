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


const directorsButton = document.getElementById("director");
directorsButton.addEventListener("change", (event) => {

  const directorsButton = document.getElementById("director");
  const directorIndex = directorsButton.selectedIndex;
  const directorSelect = directorsButton[directorIndex].value;
  const filtroDiretor = filmesDiretores(data, directorSelect);
  printar(filtroDiretor)
  console.log(filtroDiretor)

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












