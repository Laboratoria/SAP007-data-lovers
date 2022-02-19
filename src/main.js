//import { } from './data.js';

import data from './data/ghibli/ghibli.js';
const films = data.films
const mostrarFilmes = document.getElementById("printfilme");
const mostrarFilmes2 = document.getElementById("printParagrafo");
const primeiroElemento = films[0]
//console.log(films)
console.log(primeiroElemento)


const elementoCard = `
    <div class="card"> 
        <img src="${primeiroElemento.poster}" alt="" class="cardImage" > 
        <p class="cardTitle">${primeiroElemento.title} </p>
    </div>

`
mostrarFilmes.innerHTML = elementoCard

function mostrarCoisas() {

}


//mostrarCoisas()



//console.log(example, data);
