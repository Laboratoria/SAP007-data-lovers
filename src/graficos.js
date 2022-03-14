
import { stats } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const totalCalculation = {
  characters: (data) =>
    (data).length
};
const printTotalCharacters = document.getElementById("total-characters");
const totalCharacters = totalCalculation.characters(data.results);
const printGenderAverage = document.getElementById("gender-average");

printTotalCharacters.innerHTML =
  `<p class="text">O total de figurinhas da série é:
    <span class="numberOfCharacters">${totalCharacters}</span>
   </p>`;

const maleAverage = stats.gender(data.results, "Male") + "%";
const femaleAverage = stats.gender(data.results, "Female") + "%";
const genderlessAverage = stats.gender(data.results, "Genderless") + "%";
const unknownAverage = stats.gender(data.results, "unknown") + "%";

printGenderAverage.innerHTML =
  `
      <p class="text">&ensp;<span>Médias:</span>&ensp;
      Masculinos: <span>${maleAverage}</span> &ensp;| &ensp;
      Femininos: <span>${femaleAverage}</span> &ensp;| &ensp;
      Desconhecidos: <span>${unknownAverage}</span>&ensp; | &ensp;
      Sem gênero: <span>${genderlessAverage}</span> &ensp;
      </p>
  `;

const printStatusAverage = document.getElementById("status-average");
const aliveAverage = stats.status(data.results, "Alive") + "%";
const deadAverage = stats.status(data.results, "Dead") + "%";
const unknownStatusAverage = stats.status(data.results, "unknown") + "%";

printStatusAverage.innerHTML =
  `
        <p class="text">&ensp;<span>Médias:</span>&ensp;
        Vivo: <span>${aliveAverage}</span> &ensp;| &ensp;
        Morto: <span>${deadAverage}</span> &ensp;| &ensp;
        Desconhecidos: <span>${unknownStatusAverage}</span>&ensp; | &ensp;
        </p>
    `;
