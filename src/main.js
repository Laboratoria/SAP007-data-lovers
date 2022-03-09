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
            <img src="${item.image}" class="imgcard">
          </div>
          <div class="card-infos">
           <p> <b>Status:</b> ${item.status}</p>
            <p> <b>Espécie:</b>${item.species}</p>
            <p> <b>Gênero:</b>${item.gender}</p>
            <b>Origem:</b><a href="${item.origin.url}"> ${item.origin.name}</a>
            <p><b>Localização:</b><a href="${item.location.url}"> ${item.location.name}</a></p>
          </div>
          </div>`

    ).join('')
}
showInfos(arrayRickAndMorty)



