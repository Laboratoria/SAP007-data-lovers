import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';



// FOR OF não precisamos dizer quando o loop tem que parar: ele faz isso automaticamente a partir do tamanho da array


const dados = data.results; // A const dados armazena o Array com os dados puxados do objeto rickandmorty.js

let mostrarCard = ""; //Condição: para cada elemento da array, adicionar um card (DIV com as propriedas LINHA 13)
for (let cards of dados) {  // cards é a variavel [i] usado para iniciar o loop
  mostrarCard += cards = `<div class="cards">
  <img src="${cards.image}" class="image-card">
  <p class="p-name-card">${cards.name}</p>
  <p class="p-card">Status: ${cards.status}</p>
  <p class="p-card">Especie: ${cards.species}</p>
  <p class="p-card">Gênero: ${cards.gender}</p>
  <p class="p-card">Origen: ${cards.origin.name}</p>
  </div>`;
}


document.getElementById("demo").innerHTML = mostrarCard; // Imprimir os Cards no HTML



