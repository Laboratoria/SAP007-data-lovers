import {filterFilms, filters} from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films

function printCards(filmes) {
  document.getElementById('cardsFilms').innerHTML = filmes.map((item) =>
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

printCards(films)
console.log(data);

const searchMovie = () =>{
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  printCards(movieSelec);
}

const searchFilms = document.querySelector("#inputSearch");
searchFilms.addEventListener("keyup", searchMovie);


const ordenator = (e) =>{
  const orderSelec = e.target.value;
  if (orderSelec !== ""){
    const filterOrder = filters(films, orderSelec)
    console.log(filterOrder)
    printCards(filterOrder)
  }
}
const order = document.getElementById("inputOrder")
order.addEventListener ("change", ordenator)

const orderAge = document.getElementById("inputAge")
orderAge.addEventListener("change", ordenator)

const orderScore = document.getElementById("inputScore")
orderScore.addEventListener("change", ordenator)
