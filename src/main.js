import { example } from "./data.js";
import data from "./data/pokemon/pokemon.js";

heightWindow();

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").clientHeight);
  let heightTextBox = Number(
    document.querySelector(".intro-text").clientHeight
  );
  let heightTab = Number(document.querySelector(".details-info").clientHeight);
  let sumAll = heightWindow - heightLogo - heightTextBox - heightTab;
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

screen.orientation.onchange = function (e) {
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = "";
  heightWindow();
};
