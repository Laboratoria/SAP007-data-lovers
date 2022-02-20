import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

function showResults(event) {
  event.preventDefault();

  for (let i = 0; i < data.pokemon.length; i++) {
    let allDatas = data.pokemon[i];

    allDatas.replace(/poison/g,"veneno");

    let pokemonCard =
    `
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

document.getElementById("confirm-button").addEventListener("click", showResults);





