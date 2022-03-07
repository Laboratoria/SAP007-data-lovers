import data from './data/rickandmorty/rickandmorty.js'; 
import {buscarNome, buscarEspecie, SortOrdem, calculos} from './data.js';

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

//SELETORES
let filtroPesquisar = document.querySelector('.pesquisar');
let limparBusca = document.querySelector('.limpar');
let selecaoEspecie = document.querySelector('.filtro-especies');
let selecaoOrdem = document.querySelector('.filtro-ordem');
let porcentagem = document.getElementById('filtro-porcentagem')
let voltarTopo = document.querySelector('.voltar-topo');


function pesquisarNomes() {
  return mostrarCards(buscarNome(data.results, filtroPesquisar.value))
}

function filtrarEspecie(e) {
  const resultEspecie = buscarEspecie(data.results, e.target.value)
  const porcentagemEspecie = `${calculos(data.results.length, resultEspecie.length)}% dos personagens`
  filtroPorcentagem(porcentagemEspecie)
  return mostrarCards(resultEspecie)
}


function filtroOrdem(){
  const ordemValue = selecaoOrdem.value 
  const ordenacao = SortOrdem(data.results, ordemValue)
  return mostrarCards(ordenacao)
}

function filtroPorcentagem(data){
  porcentagem.innerHTML = `Essa categoria representa ${data}`
}
  
function limparFiltros(){
  window.location.reload()
}

function subirPagina(){
    window.scrollTo(0, 0);
}
  
//EVENTOS
filtroPesquisar.addEventListener('keypress', pesquisarNomes)
selecaoEspecie.addEventListener('change', filtrarEspecie)
selecaoOrdem.addEventListener('change', filtroOrdem)
voltarTopo.addEventListener('click', subirPagina)
limparBusca.addEventListener('click', limparFiltros)

