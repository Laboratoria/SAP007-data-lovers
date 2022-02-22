import data from './data/rickandmorty/rickandmorty.js';
import {filterData, btFiltroA, btFiltroZ} from './data.js';

function aparecerCards(data) {
     document.getElementById("lista-cards").innerHTML = data.map((item) => `
     <div class="Cards">
     <img src="${item.image}">
     <p>Nome: ${item.name}</p>
     <p>Status: ${item.status}</p>
     <p>Genero: ${item.gender}</p>
     <p>Origem: ${item.origin.name}<p>
     <p>Especie: ${item.species}</p>
     <p>Local onde vive: ${item.location.name}</p>
     </div>
     ` )   
 };

aparecerCards(data.results);

// function orderA(e){
//   e.preventDefault();
//   const filteOrderAZ = orderAZ(data.results);

//   aparecerCards(filterOrderAZ);
// }
document.getElementById("btFiltroA").addEventListener("click", (element) => {
  element.preventDefault();
  const sortedData = btFiltroA(data.results);
  aparecerCards(sortedData);
});

document.getElementById("btFiltroZ").addEventListener("click", (element) => {
  element.preventDefault();
  const sortedData = btFiltroZ(data.results);
  aparecerCards(sortedData);
});
