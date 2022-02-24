import data from './data/rickandmorty/rickandmorty.js';
import {btFiltroA, btFiltroZ, filterData,} from './data.js';



function aparecerCards(data) {
    document.getElementById("lista-cards").innerHTML = data.map((item) => ` 
    <div class="mostrar-cards">
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

document.getElementById("btFiltroA").addEventListener("click", (element) => {
  element.preventDefault();
  const sortedData = btFiltroA(data.results);
  aparecerCards(sortedData);
});

document.getElementById("btFiltroZ").addEventListener("click", (element) => {
  element.preventDefault();
  const sortdData = btFiltroZ(data.results);
  aparecerCards(sortdData);
});

function filtroPersonagem(evt) {
  evt.preventDefault();
  let genero = document.getElementById("select-genero").value;
  let especie = document.getElementById("select-especie").value;
  let fData = data.results

  if ( genero != "") {
    fData = filterData(fData, ["gender", genero]);
  }
  if(especie != "") {
    fData = filterData( fData,["species", especie]);
  }
  aparecerCards(fData);
}


document.getElementById("select-genero").addEventListener("change", filtroPersonagem); 
document.getElementById("select-especie").addEventListener("change", filtroPersonagem); 

/*(evt) => {
  evt.preventDefault();
  const fData = filterData(data.results, evt.target.value);
  aparecerCards(fData);
});*/






