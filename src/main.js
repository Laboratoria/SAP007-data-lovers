import {
  example
} from './data.js';

import data from './data/ghibli/ghibli.js';



const buttonAbout = document.querySelector("#about");
const main = document.querySelector('.main')
const pageAbout = document.querySelector('#pageAbout')

buttonAbout.addEventListener('click', () => {
  main.classList.add("hidden")
  pageAbout.classList.remove("hidden")
})



function printCards(banana) {
  document.getElementById('cardsFilms').innerHTML = banana.map((item) =>
      `
  <section = "cardFlip">
  <figure>
  <img src = "${item.poster}" class = "poster">
  </figure>

    <p class = "infoFilms"><strong>Title: </strong>${item.title}</p><br>
    <p class = "infoFilms"><strong>Description: </strong>${item.description}</p><br>
    <p class = "infoFilms"><strong>Director: </strong>${item.director}<p><br>
  </section>
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
