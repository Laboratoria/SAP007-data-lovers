import { example } from './data.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/athletes/athletes.js';

console.log(example, data);

const filmes = data.films;

function printar(filmes) {

  document.getElementById("cards").innerHTML = filmes.map((cards) =>
    `
    <div class = "cards">
      <h1>  ${cards.title}</h1>
      <p> ${cards.description}</p>
      <p> ${cards.release_date}</p>
      <img src = " ${cards.poster}" >
    </div>

    `
  ).join("")

}

printar(filmes)


console.log(printar(filmes))
