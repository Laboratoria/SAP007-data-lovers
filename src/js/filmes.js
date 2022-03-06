import { recuperarDiretores, recuperarDataLancamento, ordenarPopularidade, ordenarOrdemAlfabetica } from './data.js';

function iniciarPagina() {
    iniciarSeletoresDiretor();
    iniciarSeletoresDataLancamento();

    const filmes = ordenarOrdemAlfabetica();
    carregarPoster(filmes);
}

iniciarPagina();

function iniciarSeletoresDiretor() {
    const diretores = recuperarDiretores();
    const seletorDiretores = document.getElementById("seletor-diretores");
    seletorDiretores.addEventListener("change", filtrarDiretor);
    diretores.forEach(function(nomeDoDiretor) {
        const tagOption = document.createElement("option");
        tagOption.innerText = nomeDoDiretor;
        tagOption.value = nomeDoDiretor;
        seletorDiretores.appendChild(tagOption);
    });
}

function iniciarSeletoresDataLancamento() {
    const datasLancamento = recuperarDataLancamento();
    const seletorLancamento = document.getElementById("seletor-datas-lancamento");
    datasLancamento.forEach(function(dataLancamento) {
        const tagOption = document.createElement("option");
        tagOption.innerText = dataLancamento;
        tagOption.value = dataLancamento;
        seletorLancamento.appendChild(tagOption);
    });
}

function carregarPoster(filmes) {
    const cartoes = document.getElementById("grupo-cartoes");
    cartoes.innerHTML = null;
    filmes.forEach(function(filme){
        const elementoLi = document.createElement("li");
        elementoLi.classList.add("itens-cartao");
        
        const elementoDiv = document.createElement("div");
        elementoDiv.classList.add("cartao");
        elementoDiv.style.backgroundImage = "url(" + filme.poster + ")";
        
        elementoLi.appendChild(elementoDiv);
        cartoes.appendChild(elementoLi);
    });
}

function filtrarDiretor() {
    const nodeListOption = document.querySelectorAll("#seletor-diretores option");
    // filter devolve um array, o find devolve apenas um item
    const optionSelecionada = Array.from(nodeListOption).find(function(option) { 
        return option.selected == true;
    });
    const filmes = ordenarOrdemAlfabetica();
    const filmesFiltrados = filmes.filter(function(filme){
        return filme.director == optionSelecionada.value;
    });
    carregarPoster(filmesFiltrados);
}












// console.log(ordenarPopularidade(false));


// console.log(ordenarOrdemAlfabetica(false));






// import data from "../data/ghibli/ghibli.js";
// import { filterDataDiretor, filterDataLançamento } from "./data.js";

// const containerAnimes = document.getElementById("containerCardItem");

// let filmesData = data.films;

// filmesData.forEach(mostrarFilmes); //mapeando array films com método de callback forEach

// function mostrarFilmes(data) {
//   const cardAnime = document.createElement("div");
//   cardAnime.className = "container-card-individual";
//   cardAnime.innerHTML = `
//     <div class="conteinerImagem">
//     <p id="titulo"> ${data.title} </p>
//     <img src= '${data.poster}' id="imagem-poster"></img>
//     <br>
//       </div>
        
//       <div class="container-info">
//       <!--<div class="lançamento">${data.release_date}</div>-->
//       </div>
//       <div id="diretor">${data.director}</div>
//       `;
//   containerAnimes.appendChild(cardAnime);
// }

// document.getElementById("recarregar").addEventListener("click", () => {
//   location.reload();
// });

// document.getElementById("filtroDiretorItem").addEventListener("change", () => {
//   let diretores = document.querySelector(".filtro-diretor");
//   let filterItem = filterDataDiretor(filmesData, diretores.value);
//   containerAnimes.innerHTML = "";
//   filterItem.forEach(mostrarFilmes);
// });

// document
//   .getElementById("filtroLancamentoItem")
//   .addEventListener("change", () => {
//     let lançamento = document.querySelector(".filtro-lançamento");
//     let filterItem = filterDataLançamento(filmesData, lançamento.value);
//     containerAnimes.innerHTML = "";
//     filterItem.forEach(mostrarFilmes);
//   });
