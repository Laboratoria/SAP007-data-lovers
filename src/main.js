import { buscarNome, buscarEspecie, SortOrdem } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function mostrarCards(data) {
  document.getElementById('recebe-card').innerHTML = data.map((item) => `
  <div class='card'>
    <div class='card-interno'>
        <div class='card-frente'>
          <img class= 'imagem-card' src='${item.image}' loading='lazy'>
         <h3><b> ${item.name}</b></h3>
          <div class= 'outras-infos'>
            <h4><b> ${item.species}</b></h4>
            <h5><b> ${item.status} ● <b> ${item.gender}</b></h5>
            <h5><b> ${item.location.name}</b></h5>
          </div> 
        </div> 
    </div>
  </div>  
`)
.join('')
}

mostrarCards(data.results);

//LIGAÇÃO COM HTML 
let filtroPesquisar = document.getElementById('pesquisar');
let limparBusca = document.getElementById('limpar');
let selecaoEspecie = document.getElementById('filtro-especies');
let selecaoOrdem = document.querySelector('.filtro-ordem');


function pesquisarNomes() {
  return mostrarCards(buscarNome(data.results, filtroPesquisar.value))
}


function filtrarEspecie(e) {
  return mostrarCards(buscarEspecie(data.results, e.target.value))
}


function limparFiltros(){
  window.location.reload()
}

function filtroOrdem(){
  const ordemValue = selecaoOrdem.value 
  const ordenacao = SortOrdem(data.results, ordemValue)
  return mostrarCards(ordenacao)
}
  


//EVENTOS 
filtroPesquisar.addEventListener('keypress', pesquisarNomes)
limparBusca.addEventListener('click', limparFiltros)
selecaoEspecie.addEventListener('change', filtrarEspecie)
selecaoOrdem.addEventListener('change', filtroOrdem)
