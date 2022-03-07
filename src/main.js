import {filtroGenero} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

///Imprimir Cards na tela///

function imprimirCardsTela (data) {
    document.getElementById('infoCards').innerHTML = data.map(
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
).join(' ')
}
imprimirCardsTela(data.results);

const seletorFiltroStatus = document.getElementById("seletorStatus")

seletorFiltroStatus.addEventListener("change", (event) => {


const resultadoStatus = data.results.filter((item) => {
    return item.status === event.target.value
});
    console.log(resultadoStatus)
});
