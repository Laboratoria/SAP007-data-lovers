import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showCards = document.getElementById("cards")
const cardPrint= data.results.map((item) => {
return `<div class="card-container">
<div class="card-img">
<img src="${item.image}">
</div>
<div class="card-infos"
<p>Nome:${item.name}</p>
<p>Status:${item.status}</p>
<p>Espécie:${item.species}</p>
<p>Gênero:${item.gender}</p>
</div>
</div>
`}
)
showCards.innerHTML=cardPrint



