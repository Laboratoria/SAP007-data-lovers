import data from "../data/ghibli/ghibli.js";
import { recuperarPersonagens, recuperarGeneros, recuperarEspecies } from "./data.js";

// FILMES
function iniciarPagina() {
  iniciarSeletoresGenero();
  iniciarSeletoresEspecies();
  
  const personagens = recuperarPersonagens();
  carregarPoster(personagens);
}

iniciarPagina();

function carregarPoster(personagens) {
  const cartoes = document.getElementById("grupo-cartoes");
  cartoes.innerHTML = null;
  personagens.forEach(function(personagem){
      const elementoLi = document.createElement("li");
      elementoLi.classList.add("itens-cartao");
      
      const elementoDiv = document.createElement("div");
      elementoDiv.classList.add("cartao");
      elementoDiv.style.backgroundImage = "url(" + personagem.img + ")";
      
      elementoLi.appendChild(elementoDiv);
      cartoes.appendChild(elementoLi);
  });
}

// PERSONAGENS
function iniciarSeletoresGenero() {
  const generos = recuperarGeneros();
  const seletorGeneros = document.getElementById("seletor-genero");
  seletorGeneros.addEventListener("change", filtrarGenero);
  generos.forEach(function(generoDoPersonagem) {
    const tagOption = document.createElement("option");
      tagOption.innerText = generoDoPersonagem;
      tagOption.value = generoDoPersonagem;
      seletorGeneros.appendChild(tagOption);
  });
}

function filtrarGenero() {
  const nodeListOption = document.querySelectorAll("#seletor-genero option");
  // filter devolve um array, o find devolve apenas um item
  const optionSelecionada = Array.from(nodeListOption).find(function(option) { 
      return option.selected == true;
  });
  const personagens = recuperarPersonagens();
  const personagensFiltrados = personagens.filter(function(filme){
      return personagens.gender == optionSelecionada.value;
  });
  carregarPoster(personagensFiltrados);
}

function iniciarSeletoresEspecies() {
  const especies = recuperarEspecies();
  const seletorEspecies = document.getElementById("seletor-especie");
  seletorEspecies.addEventListener("change", filtrarEspecies);
  especies.forEach(function(especiesDoPersonagem) {
    const tagOption = document.createElement("option");
      tagOption.innerText = especiesDoPersonagem;
      tagOption.value = especiesDoPersonagem;
      seletorEspecies.appendChild(tagOption);
  });
}
function filtrarEspecies() {
  const nodeListOption = document.querySelectorAll("#seletor-especie option");
  // filter devolve um array, o find devolve apenas um item
  const optionSelecionada = Array.from(nodeListOption).find(function(option) { 
      return option.selected == true;
  });
  const personagens = recuperarPersonagens();
  const personagensFiltrados = personagens.filter(function(personagem){
      return personagem.specie == optionSelecionada.value;
  });
  carregarPoster(personagensFiltrados);
}

const btnOrdemCrescente = document.getElementById('personagens-nome-crescente');
btnOrdemCrescente.addEventListener("click", function() {
    const personagens = recuperarPersonagens(true);
    carregarPoster(personagens);
});

const btnOrdemDecrescente = document.getElementById('personagens-nome-decrescente');
btnOrdemDecrescente.addEventListener("click", function() {
    const personagens = recuperarPersonagens(false);
    carregarPoster(personagens);
});