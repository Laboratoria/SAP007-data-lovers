import {
  example
} from './data.js';

import data from './data/ghibli/ghibli.js';



function printCards(films) {
  document.getElementById('cardsFilms').innerHTML = films.map((item) =>
    `
  <div class="Cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "titles"><strong>${item.title} </strong></p><br>
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


const inputFilms = document.getElementById("inputSearch");
inputFilms.addEventListener("keyup", () => {
  const searched = document.getElementById("inputSearch").value;
  console.log(searched)
})




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
