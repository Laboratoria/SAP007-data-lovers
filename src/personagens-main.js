import {
  example
} from './data.js';

import data from './data/ghibli/ghibli.js';

const peopleImage = document.getElementById('cardsCharacters');
  function showCharacter(arrPeople) {
    peopleImage.innerHTML = arrPeople.map((item) =>
     `
    <div class="card">
      <div class="flip-card">
        <p class="name-card"><strong>${item.name}</strong></p>
        <img  class='img-card' src='${item.img}'alt="poster filmes">
      </div>
    </div>
`).join('');
}
const characters = data.films.map(arrPeople => arrPeople.people)
const arrCharacters = [].concat.apply([], characters);

showCharacter(arrCharacters);
