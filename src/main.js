/*
Recomendamos que utilize src/main.js 
para todos os códigos que tenham a ver com a exibição dos dados na tela. 
Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, 
registro de manejadores de eventos (event listeners ou event handlers) e etc.

Neste arquivo você encontrará uma série de imports comentados. 
Para carregar diferentes fontes de dados, você deverá "descomentar" esses imports.
 Cada um destes imports criará uma variável DATA com os dados correspondentes à fonte escolhida.
*/
import { buscarNome, buscarEspecie, ordem } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function mostrarCards(data) {
  document.getElementById("recebe-card").innerHTML = data
    .map(
      (item) => `
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
`
    )
    .join("");
}

mostrarCards(data.results);

function pesquisarNomes() {
  return mostrarCards(buscarNome(data.results, filtroPesquisar.value));
}

function filtrarEspecie(e) {
  return mostrarCards(buscarEspecie(data.results, e.target.value));
}

function limparFiltros() {
  window.location.reload();
}

function ordenarAZ() {
  return mostrarCards(ordem(data.results, selecaoOrdem.value));
}

let filtroPesquisar = document.getElementById("pesquisar");
let limparBusca = document.getElementById("limpar");
let selecaoEspecie = document.getElementById("selecao-especies");
let selecaoOrdem = document.getElementById("selecao-ordem");

//EVENTOS  -- MUDAR TODAS AS ASPAS PARA SIMPLES
filtroPesquisar = addEventListener("keypress", pesquisarNomes);
limparBusca = addEventListener("click", limparFiltros);
selecaoEspecie = addEventListener("chance", filtrarEspecie);
selecaoOrdem = addEventListener("chance", ordenarAZ);
