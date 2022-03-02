//import data from "./data/pokemon/pokemon.js";

/*
 Pegar os dados importantes
 Exibir os dados na tela
 Criar template do card (html)
 Passar esse template para dentro do loop
 Jogar de volta para o document a string criada
 Filtrar os dados por tipo
 Filtrar os dados por fraqueza
 Filtrar por nome usando regex
 Não permitir que tipos e fraquezas estejam disponíveis ao escrever o nome
 Ordenar os dados por número da pokédex
 Ordenar os dados por ordem alfabética crescente
 Ordenar os dados por ordem alfabética decrescente
 Ordenar por maior quantidade de fraqueza
 Ordenar por menor quantidade de fraqueza
 Resetar o filtro
*/
var confirmPage = false;
startPageHome();

function formDataCheckbox(e) {
  e.preventDefault();
  const formCheck = document.querySelector(".full-checkbox").elements;
  let result = "";
  for (let i = 0; i < formCheck.length; i++) {
    if (formCheck[i].checked) {
      result = result + formCheck[i].value + " ";
      console.log(typeof formCheck[i]);
    }
  }
  document.getElementById("resultado").innerHTML =
    "Valor(es) selecionado(s) = " + result;
  //console.log(form.weakness.value);
  //form.reset();
}

function startPageFilters() {
  window.location.href = "filters.html";
  document
    .getElementById("confirm-button")
    .addEventListener("click", formDataCheckbox);
}

function startPageHome() {
  do {
    heightWindow();
  } while (confirmPage == false);
  const clickPokedex = document.getElementsByClassName("pokedex-close").onclick;
  if (clickPokedex == true) {
    startPageFilters();
  }
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").scrollHeight);
  let heightText = Number(document.querySelector(".intro-text").scrollHeight);
  let heightTab = Number(document.querySelector(".details-info").scrollHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
  screen.orientation.onchange = function (e) {
    confirmPage == true;
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
  };
}
