//import { showPersonagens } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showPersonagens = document.getElementById("card")
const arrayRickAndMorty = data.results

function showInfos(arrayRickAndMorty) {
    showPersonagens.innerHTML = arrayRickAndMorty.map(item =>
        `<div class="card">
          <div class="name-title">
            <p class="title"> ${item.name}</p>
          </div>
          <div class="card-img">
            <img src="${item.image}">
          </div>
          <div class="card-infos">
           <p> ${item.status}</p>
            <p> ${item.species}</p>
            <p> ${item.gender}</p>
            <p> ${item.origin}</p>
            <a href="${item.location.url}"> ${item.location.name}</a>
          </div>
          </div>`

    ).join('')
}
showInfos(arrayRickAndMorty)



