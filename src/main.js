//import { example } from './data.js';
import data from './data/athletes/athletes.js';


const cartasAtletas = data.athletes.map((atletas)=>{
  return `<div class="flex-item-atleta"><ol class = "atletas-conteiner"><li class="conteudo-atletas">${atletas.name}
  </li> <li class="conteudo-atletas">${atletas.team}</li>
  <li class="conteudo-atletas">${atletas.sport}</li>
  <li class="conteudo-atletas">${atletas.medal}</li></ol></div>`})

document.getElementById("cards-atletas").innerHTML = cartasAtletas;