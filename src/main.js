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