import { sortAz, filterTitle, filterRating, filterProducer } from './data.js';
import data from './data/ghibli/ghibli.js';


const movies = data.films

const moviesContainer = document.getElementById("container-films");
function showCards(movies) {
    moviesContainer.innerHTML = movies.map(movie =>
        ` 
        <div class= "container-cards">

            <div class="movie-poster"> 
                <img src="${movie.poster}" alt="Imagem do poster" class="poster"  id="poster">
            </div>            
            <div class="movie-details">
                <div class="container-movie-header">
                    <h1 class="title">${movie.title}</h1>
                    <h3>Diretor</h3><p class="director">${movie.director}</p>
                    <h3>Ano de lançamento</h3><p class="year">${movie.release_date}</p> 
                    <h3>Descrição</h3><p class="description">${movie.description}</p>
                </div>
               
            </div>              
            
        </div>       
        `

    ).join('')
}

showCards(movies)

const sortOrder = document.getElementById("select-az");
sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortAz(movies, selectedSort);
    showCards(filterAz);

});

const selectTitle = document.getElementById("select-title")
selectTitle.addEventListener("change", (event) => {
    const resultTitle = filterTitle(movies, event.target.value)
    showCards(resultTitle);
});

const selectRating = document.getElementById("select-rating")
selectRating.addEventListener("change", (event) => {
    const resultRating = filterRating(movies, event.target.value)
    showCards(resultRating);
});

const selectProducer = document.getElementById("select-producer")
selectProducer.addEventListener("change", (event) => {
    const resultProducer = filterProducer(movies, event.target.value)
    showCards(resultProducer);
});

const buttonClean = document.getElementById("btn-clean");
function cleanFilters() {
    window.location.reload();
}
buttonClean.addEventListener("click", cleanFilters);


