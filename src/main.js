
/*
Recomendamos que utilize src/main.js 
para todos os códigos que tenham a ver com a exibição dos dados na tela. 
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, 
registro de manejadores de eventos (event listeners ou event handlers) e etc.

Neste arquivo você encontrará uma série de imports comentados. 
Para carregar diferentes fontes de dados, você deverá "descomentar" esses imports.
 Cada um destes imports criará uma variável DATA com os dados correspondentes à fonte escolhida.
*/

import data from './data/rickandmorty/rickandmorty.js';

function mostrarCards(data) {
    document.getElementById('recebe-card').innerHTML = data.map((item) => `
  <div class="card">
    <div class="card-interno">
        <div class="card-frente">
         <img class="imagem-card" src="${item.image}">
         <p><b> ${item.name}</b></p>
        </div> 
    </div>
  </div>  
`)
}

mostrarCards(data.results);
