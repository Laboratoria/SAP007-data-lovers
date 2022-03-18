import { AZsort, filterAth, filterMedal, filterSport} from './data.js';
import data from './data/athletes/athletes.js';

//Mostrando os cards na tela

function showCards(data){
const cartasAtletas = data.map((atletas)=>{
    return `<div class="flex-item-atleta"><ol class = "cards-atletas"><li class="conteudo-atletas">${atletas.name}
    </li> <li class="conteudo-atletas">${atletas.team}</li>
    <li class="conteudo-atletas">${atletas.sport}</li>
    <li class="conteudo-atletas">${atletas.medal}</li></ol></div>`})
  
  document.getElementById("cards-atletas").innerHTML = cartasAtletas.join("");
}

showCards(data.athletes)


//Função para que o card apareça assim que o usuário escrever o nome do atleta 

document.getElementById("filterAth").addEventListener("keypress", changeFilter)
function changeFilter(evento){
const nome = evento.target.value
const resultado = filterAth(data.athletes, nome)
showCards(resultado)
}
//Função para que o card apareça de acordo com o esporte escolhido

document.getElementById("filterSport").addEventListener("change", changeFilterSport)
function changeFilterSport(evento){
const esporte = evento.target.value
const resultadoEsporte = filterSport(data.athletes, esporte)
showCards(resultadoEsporte)
}
//Função para que o card apareça assim que clicar nas opções de A-Z ou Z-A

document.getElementById("AZsort").addEventListener("change", changeSelect)
function changeSelect(evento){
const selectSort = evento.target.value
const Resultsort = AZsort(data.athletes, selectSort)
showCards(Resultsort)
}

// Função para selecionar medalha

document.getElementById("ordering-medal").addEventListener("change", selectMedal)
function selectMedal (evento){
  const medalhaSelect = evento.target.value
  const resultadoMedal = filterMedal(data.athletes, medalhaSelect)
  showCards(resultadoMedal)
}
//Botão limpar

const clearOrderandFilter = document.getElementById("refresh");
function clearAll(){
  window.location.reload();
}
clearOrderandFilter.addEventListener("click", clearAll);