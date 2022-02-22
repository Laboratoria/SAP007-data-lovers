import { example } from "./data.js";
import data from "./data/pokemon/pokemon.js";

heightWindow();
screen.orientation.onchange = function (e) {
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = "";
  heightWindow();
};

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

//console.log(typeof(data));

document
  .getElementById("confirm-button")
  .addEventListener("click", showResults);

function showResults(event) {
  event.preventDefault();

  for (let i = 0; i < data.pokemon.length; i++) {
    let allDatas = data.pokemon[i];
    console.log(typeof allDatas);

    /*Primeira letra do nome maiuscula - deixar para fazer no final para nao atrapalhar o sort() 
    const alteredName = allDatas.name[0].toUpperCase() + allDatas.name.substring(1);*/

    let arrayPokemon = new Array();
    arrayPokemon = [
      allDatas.name,
      allDatas.num,
      allDatas.type,
      allDatas.weaknesses,
    ];
    console.log(typeof arrayPokemon);

    // card dos pokemons string
    const pokemonCard = `
    <section class="show-the-cards">
      <div class="img-box">
        <img src= "${allDatas.img}" alt=${allDatas.name}>
      </div>
         
      <div class="text-box">
        <p class="poke-name">Nome ${allDatas.name} </p>
        <p class="poke-number">N° ${allDatas.num} </p>
        <p class="poke-type">Tipo ${allDatas.type}</p>
        <p class="poke-weaknesses">Fraqueza ${allDatas.weaknesses}</p>
      </div>
    </section>
    `;

    const sectionResults = document.createElement("section");
    document.getElementById("result").appendChild(sectionResults);
    sectionResults.innerHTML = pokemonCard;
  }
}

/*const sectionResults = document.createElement("section");
    document.getElementById("result").appendChild(sectionResults);
    sectionResults.innerHTML = pokemonCard;*/
