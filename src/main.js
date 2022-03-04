import {
  example
} from './data.js';

import data from './data/ghibli/ghibli.js';

const buttonAbout = document.querySelector("#about");
const mainHome = document.querySelector('.main');
const pageAbout = document.querySelector('#pageAbout');
let cardsContainer = document.querySelector(".cardsFilms");

buttonAbout.addEventListener('click', () => {
  mainHome.classList.add("hidden")
  pageAbout.classList.remove("hidden")
})

let print = function printCards(data){
  let functionprinthtml = data.map((item)=>{
    return`
  <div class="filmCard">
      <div class="flipper">
          <div class="frontCard"> 
              <img class="filmPoster" src= ${item.poster}>
          </div>
          <div class="backCard">
              <h3 class="film-title"> ${item.title}
              <div class="film-score"> ${item.rt_score}</div> 
              </h3> 
              <br>
              <div class="film-infos">
                  <p> <strong>Diretor:</strong> ${item.director} </p>
                  <p> <strong>Produtor:</strong> ${item.producer} </p>
                  <p> <strong>Ano de Lançamento:</strong> ${item.release_date} </p>
                  <p> <strong> Sinopse</strong>: ${item.description} </p>      
              </div>          
          </div>
      </div>
  </div>`
}).join('')
cardsContainer.innerHTML += functionprinthtml;



}
console.log(print, data);
