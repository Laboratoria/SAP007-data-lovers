
import {stats_gender, stats_status} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const total_calculation = {
  characters: (data) =>
  (data).length
};
const printTotalCharacters = document.getElementById("total_characters");

const total_characters = total_calculation.characters(data.results);

const printGenderAverage = document.getElementById("gender_average");

printTotalCharacters.innerHTML =
  `<p class="text">O total de figurinhas da série é:
    <span class="numberOfCharacters">${total_characters}</span>
   </p>`;

const male_average = stats_gender.gender(data.results, "Male") + "%";
const female_average = stats_gender.gender(data.results, "Female") + "%";
const genderless_average = stats_gender.gender(data.results, "Genderless") + "%";
const unknown_average = stats_gender.gender(data.results, "unknown") + "%";

printGenderAverage.innerHTML =
  `
      <p class="text">&ensp;<span>Médias:</span>&ensp;
      Masculinos: <span>${male_average}</span> &ensp;| &ensp;
      Femininos: <span>${female_average}</span> &ensp;| &ensp;
      Desconhecidos: <span>${unknown_average}</span>&ensp; | &ensp;
      Sem gênero: <span>${genderless_average}</span> &ensp;
      </p>
  `;


const printStatusAverage = document.getElementById("status_average");


const alive_average = stats_status.status(data.results, "Alive") + "%";
const dead_average = stats_status.status(data.results, "Dead") + "%";
const unknown_status_average = stats_status.status(data.results, "unknown") + "%";

printStatusAverage.innerHTML =
  `
        <p class="text">&ensp;<span>Médias:</span>&ensp;
        Vivo: <span>${alive_average}</span> &ensp;| &ensp;
        Morto: <span>${dead_average}</span> &ensp;| &ensp;
        Desconhecidos: <span>${unknown_status_average}</span>&ensp; | &ensp;
        </p>
    `;













