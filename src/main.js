import data from './data/rickandmorty/rickandmorty.js';

function mostrarCards(data){
    document.getElementById('recebe-card').innerHTML = data.map((item) => `
  <div class="card">
    <div class="card-interno">
        <div class="card-frente">
         <img class="imagem-card" src="${item.image}">
         <h3><b> ${item.name}</b></h3>
          <div class="outras-infos">
          <h4><b> ${item.species}</b></h4>
          <h5><b> ${item.status} ● <b> ${item.gender}</b></h5>
          <h5><b> ${item.location.name}</b></h5>
          </div> 
        </div> 
    </div>
  </div>  
`)
}

mostrarCards(data.results);
