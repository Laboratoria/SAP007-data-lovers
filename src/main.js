import { buscarNome, buscarEspecie } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function mostrarCards(data) {
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
.join('')
}

mostrarCards(data.results);


function pesquisarNomes() {
  return mostrarCards(buscarNome(data.results, filtroPesquisar.value))
}


function filtrarEspecie() {
  return mostrarCards(buscarEspecie(data.results, selecaoEspecie.value))
}


function limparFiltros(){
  window.location.reload();
  }
  

const filtroPesquisar = document.getElementById('pesquisar');
const limparBusca = document.getElementById('limpar');
const selecaoEspecie = document.getElementById('selecao-especies');
const selecaoOrdem = document.getElementById('selecao-ordem');

//EVENTOS  -- MUDAR TODAS AS ASPAS PARA SIMPLES
filtroPesquisar = addEventListener('keypress', pesquisarNomes);
limparBusca = addEventListener('click', limparFiltros);
selecaoEspecie = addEventListener('chance', filtrarEspecie);
selecaoOrdem = addEventListener('chance')


