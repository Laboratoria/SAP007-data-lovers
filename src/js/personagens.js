import { 
  recuperarPersonagens,
  buscarGenerosPersonagens,
  buscarPersonagensPorGenero,
  buscarEspeciesPersonagens,
  buscarPersonagensPorEspecie,
  buscarPersonagensPorOrdemAlfabetica,
  recuperarPorcentagemDePersonagens,
  pesquisarPersonagensPorNome
} from "./data.js";

function iniciarPagina() {
  const personagens = recuperarPersonagens();
  carregarImagens(personagens);

  iniciarSeletorGenero();
  iniciarSeletorEspecie();
  iniciarOptionOrdemAlfabetica();
  iniciarInputPesquisa();
}

iniciarPagina();

function iniciarSeletorEspecie() {
  const especiesPersonagens = buscarEspeciesPersonagens();
  const seletorEspecies = document.getElementById("seletor-especies");
  seletorEspecies.addEventListener("change", filtrarPersonagensPorEspecies);

  especiesPersonagens.forEach(function(especie) {
      const tagOption = document.createElement("option");
      tagOption.innerText = especie;
      tagOption.value = especie;
      seletorEspecies.appendChild(tagOption);
  });
}

function filtrarPersonagensPorEspecies(){
  const optionsEspecies = document.querySelectorAll("#seletor-especies option");
  const optionSelecionada = Array.from(optionsEspecies).find(function(option) {
      return option.selected == true;
  });
  const especieSelecionada = optionSelecionada.value;
  const personagens = buscarPersonagensPorEspecie(especieSelecionada);
  carregarImagens(personagens);
}

function iniciarSeletorGenero() {
  const generosPersonagens = buscarGenerosPersonagens();
  const seletorGeneros = document.getElementById("seletor-generos");
  seletorGeneros.addEventListener("change", filtrarPersonagensPorGenero);

  generosPersonagens.forEach(function(genero) {
      const tagOption = document.createElement("option");
      tagOption.innerText = genero;
      tagOption.value = genero;
      seletorGeneros.appendChild(tagOption);
  });
}

function filtrarPersonagensPorGenero(){
  const optionsGeneros = document.querySelectorAll("#seletor-generos option");
  const optionSelecionada = Array.from(optionsGeneros).find(function(option) {
      return option.selected == true;
  });
  const generoSelecionado = optionSelecionada.value;
  const personagens = buscarPersonagensPorGenero(generoSelecionado);
  carregarImagens(personagens);
}

function iniciarOptionOrdemAlfabetica() {
  const optionNomeCrescente = document.getElementById("personagens-nome-crescente");
  const optionNomeDecrescente = document.getElementById("personagens-nome-decrescente");

  optionNomeCrescente.addEventListener("click", filtrarFilmesPorOrdemAlfabeticaAZ);
  optionNomeDecrescente.addEventListener("click", filtrarFilmesPorOrdemAlfabeticaZA);
}

function filtrarFilmesPorOrdemAlfabeticaAZ() {
  const personagens = buscarPersonagensPorOrdemAlfabetica(true);
  carregarImagens(personagens);
}

function filtrarFilmesPorOrdemAlfabeticaZA() {
  const personagens = buscarPersonagensPorOrdemAlfabetica(false);
  carregarImagens(personagens);
}

function carregarImagens(personagens) {
  const elementoSpanContador = document.getElementById("contador");
  elementoSpanContador.innerText = recuperarPorcentagemDePersonagens(personagens.length);

  const elementoUlCartoes = document.getElementById("grupo-cartoes");
  elementoUlCartoes.innerHTML = null;

  personagens.forEach(function (personagem) {
      const elementoLi = document.createElement("li");
      elementoLi.classList.add("itens-cartao");
      
      const elementoDiv = document.createElement("div");
      const elementoFilhoDiv = document.createElement("div");
      elementoDiv.classList.add("cartao");
      elementoFilhoDiv.classList.add("imagem-cartao"); // Adicionei class imagem cartão
      elementoFilhoDiv.style.backgroundImage = "url(" + personagem.img + ")";
      
      const elementoParagrafoNome = document.createElement("p");
      elementoParagrafoNome.classList.add("titulo-nome-cartao");
      elementoParagrafoNome.innerText = personagem.name;

      elementoDiv.appendChild(elementoParagrafoNome);
      elementoDiv.appendChild(elementoFilhoDiv);
      elementoLi.appendChild(elementoDiv);
      elementoUlCartoes.appendChild(elementoLi);
  });
}

function iniciarInputPesquisa() {
  const inputPesquisa = document.getElementById("input-pesquisa");
  inputPesquisa.addEventListener("input", filtrarPersonagemInputPesquisa);
}

function filtrarPersonagemInputPesquisa() {
  const inputPesquisa = document.getElementById("input-pesquisa");
  const personagens = pesquisarPersonagensPorNome(inputPesquisa.value);
  carregarImagens(personagens);
}