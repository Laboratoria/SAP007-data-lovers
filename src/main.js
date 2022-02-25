import { filmFilter, printMovies } from './data.js';
import data from './data/ghibli/ghibli.js';
// import { ordemMovies } from './data.js'

const filmes = data.films;
function printTela(data) {
    document.getElementById("filmes").innerHTML = data.map((item) => `
<div class= "cards_flexbox">
<img class="img-card" src="${item.poster}">
</div>`

    )
}

printTela(filmes);

printMovies();

// ordemMovies();

//chamando evento seletor filtragem 
const order = document.getElementById("order")

order.addEventListener("change", (event) => {
    const selectOrder = event.target.value;
    const filterAz = filmFilter(filmes, selectOrder);
    printTela(filterAz);

});
