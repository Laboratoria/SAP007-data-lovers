import {
    filtroGenero,filtroStatus,filtroSpecies,filtroName,filtroOrder,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

///Imprimir Cards na tela///

function imprimirCardsTela(data) {
document.getElementById("infoCards").innerHTML = data.map(
(item) => `  
    <div class = "cards">
        <div class="frenteCards">
            <img class="cardImg" src="${item.image}" loading="lazy" ></img>
        </div>
        
        <div class = "telaText">
            <ul class = "telaTextCard">
                <li class="nome_personagem"><strong> </strong>${item.name}</li>
                <li><strong>Espécie: </strong>${item.species}</li>
                <li><strong>Status: </strong>${item.status}</li>
                <li><strong>Gênero: </strong>${item.gender}</li>
                <li><strong>Local de Origem: </strong>${item.origin.name}</li>
            </ul>
        </div>
    </div>
    `
    )
    .join(" ");
}
imprimirCardsTela(data.results);

///pegar O seletor do filtro ' x'

const selecaoGenero = document.querySelector("#gender-filter");
const selecaoStatus = document.querySelector("#status-filter");
const selecaoSpecies = document.querySelector("#species-filter");

const searchName = document.getElementById("text-search");
const alphaOrder = document.querySelector("#order-filter");
const btnLimpar = document.getElementById("btn_reset")

///função para imprimir o filtro 'x'

function imprimirFiltroGenero(e) {
const resultadoGenero = filtroGenero(data.results, e.target.value)
return imprimirCardsTela(resultadoGenero);
}

function imprimirFiltroSpecies(e) {
const resultadoSpecies = filtroSpecies(data.results, e.target.value);
return imprimirCardsTela(resultadoSpecies);
}

function imprimirFiltroStatus(e) {
const resultadoStatus = filtroStatus(data.results, e.target.value);
return imprimirCardsTela(resultadoStatus);
}


function imprimirFiltroName(e) {
const resultadoName = filtroName(data.results, e.target.value);
return imprimirCardsTela(resultadoName);
}

function  imprimirAlphaOrder(e) {
const resultadoOrder = filtroOrder(data.results, e.target.value);
return imprimirCardsTela(resultadoOrder);
}


function limparFiltros(){
window.location.reload();
}


/// Por uma escuta pra quando mudar pro filtro 'x', imprimir os cards filtrados
selecaoGenero.addEventListener("change", imprimirFiltroGenero);
selecaoStatus.addEventListener("change", imprimirFiltroStatus);
selecaoSpecies.addEventListener("change", imprimirFiltroSpecies);
searchName.addEventListener("keyup", imprimirFiltroName);
alphaOrder.addEventListener("change", imprimirAlphaOrder);
btnLimpar.addEventListener("click", limparFiltros)