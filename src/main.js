import data from "./data/pokemon/pokemon.js";

//startPageHome();

/*
 Pegar os dados importantes
 Exibir os dados na tela
 Criar template do card (html)
 Passar esse template para dentro do loop
 Jogar de volta para o document a string criada
*/
let confirmationButton = document.getElementById("confirm-button");
confirmationButton.addEventListener("click", formData);

function formData(e) {
  e.preventDefault();
  const formCheck = document.querySelector(".full-checkbox").elements;
  let result = "";
  for (let i = 0; i < formCheck.length; i++) {
    if (formCheck[i].checked) {
      result = result + formCheck[i].value + " ";
    }
  }
  document.getElementById("resultado").innerHTML =
    "Valor(es) selecionado(s) = " + result;
  //console.log(form.weakness.value);
  //form.reset();
}

/*
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

/*
function startPageHome() {
  heightWindow();
  screen.orientation.onchange = function (e) {
    location.reload();
  };
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightTextBox = Number(
    document.querySelector(".intro-text").offsetHeight
  );
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - heightLogo - heightTextBox - heightTab;
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}
*/
