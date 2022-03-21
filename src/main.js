import data from './data/rickandmorty/rickandmorty.js';
import { buscarNome, buscarEspecie, ordenacao, calculos } from './data.js';

function mostrarCards(data) {
  const todosCards = data.map((item) => `
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
  document.getElementById('recebe-card').innerHTML = todosCards
}
mostrarCards(data.results);

const todosResultados = data.results

//SELETORES
const filtroPesquisar = document.querySelector('.pesquisar');
const limparBusca = document.querySelector('.limpar');
const selecaoEspecie = document.querySelector('.filtro-especies');
const selecaoOrdem = document.querySelector('.filtro-ordem');
const porcentagem = document.querySelector('.filtro-porcentagem')
const voltarTopo = document.querySelector('.voltar-topo');

function pesquisarNomes() {
  return mostrarCards(buscarNome(todosResultados, filtroPesquisar.value))
}

function filtrarEspecie(e) {
  const resultEspecie = buscarEspecie(todosResultados, e.target.value)
  porcentagem.innerHTML = `Essa categoria representa ${calculos(todosResultados.length, resultEspecie.length)}% dos personagens`
  return mostrarCards(resultEspecie)
}

function filtroOrdem() {
  const ordem = selecaoOrdem.value
  return mostrarCards(ordenacao(todosResultados, ordem))
}

function limparFiltros() {
  mostrarCards(todosResultados)
  porcentagem.innerHTML = " "
}

window.addEventListener("load", function () {
  const carregando = document.querySelector("#carregando");

  setTimeout(function () {
    carregando.style.display = "none";
  }, 1000);
});

function subirPagina() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scroll = () => {
  let botao = document.getElementById("voltar-topo")
  if (document.documentElement.scrollTop > 0) {
    botao.style.display = "block"
  }
  else {
    botao.style.display = "none"
  }
}

window.onscroll = () => {
  scroll()
}

//EVENTOS
filtroPesquisar.addEventListener('input', pesquisarNomes)
selecaoEspecie.addEventListener('change', filtrarEspecie)
selecaoOrdem.addEventListener('change', filtroOrdem)
voltarTopo.addEventListener('click', subirPagina)
limparBusca.addEventListener('click', limparFiltros)

