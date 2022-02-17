import dataGhibli from "./data/ghibli/ghibli.js"
import { filterData } from "./data.js"

let resposta = document.getElementById("resposta");

//let film1 = dataGhibli.filterData(0, "filme 1");

//resposta.innerHTML = film1;



console.log(dataGhibli.films.title);

const films = dataGhibli.films
for (let i = 0; i <= films.length; i++) {
    console.log(films[i]);
}


//////////////////////////////////////////////////////

//let filtro = data.map(data=>data.id);

//console.log(filtro);

////////////////////////////////////////////////////////////////////


//let director = document.querySelector(".director");

//director.addEventListener("click", () => {
//  director.value = filterData(data, director);
//});