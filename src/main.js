import {
  example
} from './data.js';

import data from './data/ghibli/ghibli.js';



const buttonAbout = document.querySelector("#about");
const main = document.querySelector('.main')
const pageAbout = document.querySelector('#pageAbout')
const mainFilms = document.querySelector('.mainFilms')

buttonAbout.addEventListener('click', () => {
  main.classList.add("hidden")
  mainFilms.classList.add("hidden")
  pageAbout.classList.remove("hidden")
})



function printCards(films) {
  document.getElementById('cardsFilms').innerHTML = films.map((item) =>
    `
  <div class="mainCards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "nameFilms"><strong> ${item.title}</strong></p><br>
        <p class = "infoFilms"><strong>Release Date: </strong>${item.release_date}</p><br>
        <p class = "infoFilms"><strong>Description: </strong>${item.description}</p><br>
        <p class = "infoFilms"><strong>Director: </strong>${item.director}<p><br>
        <p class = "infoFilms"><strong>Producer: </strong>${item.producer}<p><br>
        <p class = "infoFilms"><strong>Score: </strong>${item.rt_score}<p><br>
      </div>
     </div>
    </div>
    `
    )
  .join('');
}

printCards(data.films)
console.log(example, data);


/* `
    <figure>
  <img src = "${item.poster} class = "poster">
  </figure>

  <section>
    <p class = "infoFilms"><strong>Title:</strong>${item.title}</p><br>
    <p class = "infoFilms"><strong>Description</strong>${item.description}</p><br>
    <p class = "infoFilms"><strong>Director</strong>${item.director}<p><br>
  </section>
    `</p></p>*/
