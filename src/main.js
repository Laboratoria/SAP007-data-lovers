//import {filtroGenero, filtroEspecie, filtroStatus, ordemAlfabetica, buscarNome, calcularPorcentagem} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//////////////////FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA
function infoCardsTela (data) {
  document.getElementById("info-card").innerHTML = data.map((item) => `
  <li class="cards">
  <img class="card-img"> src="${item.image}"</img>
    <h2 class="card-title"> src="${item.name}"</h2>
  </li>
`).join('')
}
infoCardsTela(data.results);



//teste















