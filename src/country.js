import {} from './data.js';

import data from './data/athletes/athletes.js';

const groupAthletes = data.athletes;
const listCountry = groupAthletes.reduce((previousValue, currentAthlete) => {
  let country = currentAthlete.team;
  if (country in previousValue) {
    const previousAthletes = previousValue[currentAthlete.team];
    return { ...previousValue, [country]: [...previousAthletes, currentAthlete] }
  }
  else {
    return { ...previousValue, [country]: [currentAthlete] }
  }
}, {});

let cardsCountry = ""
for (const country in listCountry) {
  cardsCountry += `
    <div class="flex-item">
      <ol class="background">
        <li class="contents-country">${country}</li>
        <li class="contents-country">${listCountry[country].length} atletas participantes</li>
      </ol>
    </div>`
  };

  document.getElementById("cards-countries").innerHTML = cardsCountry;
