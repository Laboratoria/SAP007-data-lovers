import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './data.js';


console.log(data, filterData);

function aparecerCards(data) {
    document.getElementById("lista-cards").innerHTML = data.map((item) => `
     <div class="mostrar-cards">
     <img src="${item.image}">
     <p>Nome: ${item.name}</p>
     <div class="virar-cards">
     <p>Status: ${item.status}</p>
     <p>Genero: ${item.gender}</p>
     <p>Origem: ${item.origin.name}<p>
     <p>Especie: ${item.species}</p>
     <p>Local onde vive: ${item.location.name}</p>
     </div>
     </div>
     </div>
     ` )
};

aparecerCards(data.results);

function mostrarCards(especie) {
    return (filterData.especie.Human)

}

mostrarCards(data.results)

console.log(mostrarCards)