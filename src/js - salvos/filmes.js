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
    seletorLancamento.addEventListener("change", filtrarDataLancamento);
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

function filtrarDataLancamento() {
    const nodeListOption = document.querySelectorAll("#seletor-datas-lancamento option");
    // filter devolve um array, o find devolve apenas um item
    const optionSelecionada = Array.from(nodeListOption).find(function(option) { 
        return option.selected == true;
    });
    const filmes = ordenarOrdemAlfabetica();
    const filmesFiltrados = filmes.filter(function(filme){
        return filme.release_date == optionSelecionada.value;
    });
    carregarPoster(filmesFiltrados);
}

const btnOrdemCrescente = document.getElementById('filmes-nome-crescente');
btnOrdemCrescente.addEventListener("click", function() {
    const filmes = ordenarOrdemAlfabetica(true);
    carregarPoster(filmes);
});

const btnOrdemDecrescente = document.getElementById('filmes-nome-decrescente');
btnOrdemDecrescente.addEventListener("click", function() {
    const filmes = ordenarOrdemAlfabetica(false);
    carregarPoster(filmes);
});


const btnMaisPopular = document.getElementById('mais-popular');
btnMaisPopular.addEventListener("click", function() {
    const filmes = ordenarPopularidade(false);
    carregarPoster(filmes);
});

const btnMenosPopular = document.getElementById('menos-popular');
btnMenosPopular.addEventListener("click", function() {
    const filmes = ordenarPopularidade(true);
    carregarPoster(filmes);
});