import { sortAz, filterTitle, filterRating, filterProducer } from './data.js';
import data from './data/ghibli/ghibli.js';

const movies = data.films
const moviesContainer = document.getElementById("moviesContainer");
function showCards(movies) {
    moviesContainer.innerHTML = movies.map(movie =>

        `        
        <div class="innerCard"> 
            <img src="${movie.poster}" alt="Imagem do poster" class="cardImage"  id="cardImage"> 
            <p class="cardTitle">${movie.title} </p>   
        </div>        
        `

    ).join('')
}

showCards(movies)


const personagens = data.films.people
console.log(personagens)
// const charactersContainer = document.getElementById("charactersContainer");
// function showCardsCharacters (movies) {
//     charactersContainer.innerHTML = characters.map(character =>

//         `        
//         <div class="innerCard"> 
//             <img src="${character.img}" alt="Imagem personagem" class="cardImage"  id="cardImage"> 
//             <p class="cardTitle">${character.name} </p>   
//         </div>        
//         `

//     ).join('')
// }
// showCardsCharacters(characters)
// console.log(characters)




const sortOrder = document.getElementById("selectAZ");

sortOrder.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filterAz = sortAz(movies, selectedSort);
    showCards(filterAz);

});

const selectTitle = document.getElementById("selectTitle")
selectTitle.addEventListener("change", (event) => {
    const resultTitle = filterTitle(movies, event.target.value)
    showCards(resultTitle);
});

const selectRating = document.getElementById("selectRating")
selectRating.addEventListener("change", (event) => {
    const resultRating = filterRating(movies, event.target.value)
    showCards(resultRating);
});

const selectProducer = document.getElementById("selectProducer")
selectProducer.addEventListener("change", (event) => {
    const resultProducer = filterProducer(movies, event.target.value)
    showCards(resultProducer);
});

const buttonClean = document.getElementById("btnClean");
function cleanFilters() {
    window.location.reload(); //recarrega a página
  }
  buttonClean.addEventListener("click", cleanFilters);

// const buttonOpen = document.querySelectorAll('.cardImage');
// const modalContainer = document.querySelector('.modalContainer');
// const buttonHide = document.querySelector('.hideModal');
// console.log(buttonOpen)


// buttonOpen.addEventListener("click", () => {
//     modalContainer.classList.add('show');
// })


// buttonHide.addEventListener("click", () => {
//     modalContainer.classList.remove('show');
// })

/* buttonOpen.forEach((item) => {
    item.addEventListener('click', () => {
        modalContainer.classList.add('show');
    });
});

buttonHide.addEventListener("click", () => {
    modalContainer.classList.remove('show');
}); */





