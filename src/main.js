import data from "./data/pokemon/pokemon.js";

startPageHome();

function startPageHome() {
  heightWindow();
  screen.orientation.onchange = function (e) {
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
    heightWindow();
  };
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  console.log(heightWindow);
  let heightLogo = Number(document.querySelector(".header-home").scrollHeight);
  console.log(heightLogo);
  let heightText = Number(document.querySelector(".intro-text").scrollHeight);
  console.log(heightText);
  let heightTab = Number(document.querySelector(".details-info").scrollHeight);
  console.log(heightTab);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  console.log(sumAll);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}
