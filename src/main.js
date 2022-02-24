import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showCards = document.getElementById("cards")
const cardPrint= data.results.map((item) => {
return `<p>${item.name}</p>`
}
)
showCards.innerHTML=cardPrint



