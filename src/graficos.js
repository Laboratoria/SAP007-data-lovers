
import data from "./data/rickandmorty/rickandmorty.js";

const stats_gender = {

  characters: (data) => (data).length,

  gender: (data, genderParameter) => {

    const totalByGender = data.reduce(function (total, character) {
      if (character.gender === genderParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const average_gender = Number(((totalByGender / data.length) * 100).toFixed(2));
    return average_gender;
  },

};
const printTotalCharacters = document.getElementById("total_characters");
const printGenderAverage = document.getElementById("gender_average");

const total_characters = stats_gender.characters(data.results);

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

const stats_status = {

  characters: (data) => (data).length,

  status: (data, statusParameter) => {

    const totalByStatus = data.reduce(function (total, character) {
      if (character.status === statusParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const average_status = Number(((totalByStatus / data.length) * 100).toFixed(2));
    return average_status;
  },

};
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













