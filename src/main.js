//import { } from './data.js';

import data from './data/ghibli/ghibli.js';

const movies = data.films
const printMovies = document.getElementById("printMoviesId");

const novoArray = movies.map(movie => 
    
    `
<div class="rotateCard">
    <div class="innerCard">
        <div class="frontCard"> 
            <img src="${movie.poster}" alt="" class="cardImage" > 
            <p class="cardTitle">${movie.title} </p> 
        </div>          
    </div>
</div>
    `
);


printMovies.innerHTML = novoArray


