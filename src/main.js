import {sortAz} from './data.js';

import {filterTitle, filterRating, filterProducer} from './data.js';

import data from './data/ghibli/ghibli.js';

const movies = data.films
const printMovies = document.getElementById("printMoviesId");

function mostrandoCards(movies) {

 printMovies.innerHTML = movies.map(movie => 
    
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
)};

mostrandoCards(movies)

const sortOrder = document.getElementById("selectAZ");

sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortAz(movies, selectedSort);
    mostrandoCards(filterAz);

});

const selectTitle = document.getElementById("selectTitle")
selectTitle.addEventListener("change", (event) => {
    const resultTitle = filterTitle(movies, event.target.value)
    mostrandoCards(resultTitle);
});

const selectRating = document.getElementById("selectRating")
selectRating.addEventListener("change", (event) => {
    const resultRating = filterRating(movies, event.target.value)
    mostrandoCards(resultRating);
});

const selectProducer = document.getElementById("selectProducer")
selectProducer.addEventListener("change", (event) => {
    const resultProducer = filterProducer(movies, event.target.value)
    mostrandoCards(resultProducer);
});









