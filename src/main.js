import data from './data/rickandmorty/rickandmorty.js';
import { buscarNome, buscarEspecie, sortOrdem, calculos } from './data.js';

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
            <h5><b> Aparece em ${item.episode.length} episódios </b></h5>
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
let porcentagem = document.querySelector('.filtro-porcentagem')
let voltarTopo = document.querySelector('.voltar-topo');

function pesquisarNomes() {
  return mostrarCards(buscarNome(data.results, filtroPesquisar.value))
}

function filtrarEspecie(e) {
  const resultEspecie = buscarEspecie(data.results, e.target.value)
  porcentagem.innerHTML = `Essa categoria representa ${calculos(data.results.length, resultEspecie.length)}% dos personagens`
  return mostrarCards(resultEspecie)
}

function filtroOrdem() {
  const ordem = selecaoOrdem.value
  return mostrarCards(sortOrdem(data.results, ordem))
}

function limparFiltros() {
  window.location.reload()
}

function subirPagina() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//EVENTOS
filtroPesquisar.addEventListener('input', pesquisarNomes)
selecaoEspecie.addEventListener('change', filtrarEspecie)
selecaoOrdem.addEventListener('change', filtroOrdem)
voltarTopo.addEventListener('click', subirPagina)
limparBusca.addEventListener('click', limparFiltros)
