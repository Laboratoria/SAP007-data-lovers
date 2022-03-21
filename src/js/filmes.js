import { 
  recuperarFilmes,
  buscarNomesDiretores,
  buscarDatasLancamento,
  buscarFilmesPorDiretor,
  buscarFilmesPorDataLancamento,
  buscarFilmesPorPopularidade,
  buscarFilmesPorOrdemAlfabetica,
  recuperarPorcentagemDeFilmes,
  pesquisarFilmesPorNome
} from "./data.js";

function iniciarPagina() {
  const filmes = recuperarFilmes();
  carregarPoster(filmes);

  iniciarSeletoresDiretor();
  iniciarSeletoresDataLancamento();
  iniciarOptionPopularidade();
  iniciarOptionOrdemAlfabetica();
  iniciarInputPesquisa();
}

iniciarPagina();

function iniciarSeletoresDiretor() {
  const diretores = buscarNomesDiretores();
  const seletorDiretores = document.getElementById("seletor-diretores");
  seletorDiretores.addEventListener("change", filtrarFilmesPorDiretor);

  diretores.forEach(function(nomeDoDiretor) {
      const tagOption = document.createElement("option");
      tagOption.innerText = nomeDoDiretor;
      tagOption.value = nomeDoDiretor;
      seletorDiretores.appendChild(tagOption);
  });
}

function filtrarFilmesPorDiretor(){
  const optionsDiretor = document.querySelectorAll("#seletor-diretores option");
  const optionSelecionada = Array.from(optionsDiretor).find(function(option) {
      return option.selected == true;
  });
  const nomeDiretorSelecionado = optionSelecionada.value;
  const filmes = buscarFilmesPorDiretor(nomeDiretorSelecionado);
  carregarPoster(filmes);
}


function iniciarSeletoresDataLancamento() {
  const datasLancamento = buscarDatasLancamento();
  const seletorLancamento = document.getElementById("seletor-datas-lancamento");
  seletorLancamento.addEventListener("change", filtrarFilmesPorDataLancamento);
 
  datasLancamento.forEach(function(dataLancamento) {
      const tagOption = document.createElement("option");
      tagOption.innerText = dataLancamento;
      tagOption.value = dataLancamento;
      seletorLancamento.appendChild(tagOption);
  });
}

function filtrarFilmesPorDataLancamento() {
  const optionDataLancamento = document.querySelectorAll("#seletor-datas-lancamento option");
  const optionSelecionada = Array.from(optionDataLancamento).find(function(option) {
      return option.selected == true;
  });
  const dataLancamentoSelecionada = optionSelecionada.value;
  const filmes = buscarFilmesPorDataLancamento(dataLancamentoSelecionada);
  carregarPoster(filmes);
}


function iniciarOptionPopularidade() {
  const optionMaisPopular = document.getElementById("mais-popular");
  const optionMenosPopular = document.getElementById("menos-popular");

  optionMaisPopular.addEventListener("click", filtrarFilmesPorMaiorPopularidade);
  optionMenosPopular.addEventListener("click", filtrarFilmesPorMenorPopularidade);
}

function filtrarFilmesPorMaiorPopularidade() {
  const filmes = buscarFilmesPorPopularidade(false);
  carregarPoster(filmes);
}

function filtrarFilmesPorMenorPopularidade() {
  const filmes = buscarFilmesPorPopularidade(true);
  carregarPoster(filmes);
}

function iniciarOptionOrdemAlfabetica() {
  const optionOrdemAlfabeticaAZ = document.getElementById("filmes-nome-crescente");
  const optionOrdemAlfabeticaZA = document.getElementById("filmes-nome-decrescente");

  optionOrdemAlfabeticaAZ.addEventListener("click", filtrarFilmesPorOrdemAlfabeticaAZ);
  optionOrdemAlfabeticaZA.addEventListener("click", filtrarFilmesPorOrdemAlfabeticaZA);
}

function filtrarFilmesPorOrdemAlfabeticaAZ() {
  const filmes = buscarFilmesPorOrdemAlfabetica(true);
  carregarPoster(filmes);
}

function filtrarFilmesPorOrdemAlfabeticaZA() {
  const filmes = buscarFilmesPorOrdemAlfabetica(false);
  carregarPoster(filmes);
}

function carregarPoster(filmes) {
  const contador = document.getElementById("contador");
  contador.innerText = recuperarPorcentagemDeFilmes(filmes.length);

  const cartoes = document.getElementById("grupo-cartoes");
  cartoes.innerHTML = null;
  filmes.forEach(function (filme) {
      const elementoLi = document.createElement("li");
      elementoLi.classList.add("itens-cartao");

      const elementoDiv = document.createElement("div");
      elementoDiv.classList.add("cartao");
      elementoDiv.style.backgroundImage = "url(" + filme.poster + ")";

      const elementoParagrafoNome = document.createElement("p");
      elementoParagrafoNome.classList.add("titulo-nome-cartao");
      elementoParagrafoNome.innerText = filme.title;

      elementoDiv.appendChild(elementoParagrafoNome);
      elementoLi.appendChild(elementoDiv);
      cartoes.appendChild(elementoLi);
  });
}

function iniciarInputPesquisa() {
  const inputPesquisa = document.getElementById("input-pesquisa");
  inputPesquisa.addEventListener("input", filtrarFilmeInputPesquisa);
}

function filtrarFilmeInputPesquisa() {
  const inputPesquisa = document.getElementById("input-pesquisa");
  const filmes = pesquisarFilmesPorNome(inputPesquisa.value);
  carregarPoster(filmes);
}