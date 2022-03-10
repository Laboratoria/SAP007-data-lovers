import { calculateAverageScore } from "./data.js";
import dataGhibli from "./data/ghibli/ghibli.js"

const score = dataGhibli.films.map(films => films.rt_score);
const scoreNumber = score.map(elem => parseInt(elem,10))
document.querySelector("#news-curiosity").innerHTML = calculateAverageScore(scoreNumber);