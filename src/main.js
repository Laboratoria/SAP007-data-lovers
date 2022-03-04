import {} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

/////IMPRIMIR CARDS NA TELA
function imprimirCardsTela (data) {
    document.getElementById('infoCards').innerHTML = data.map((item) => `
    <div class = "cards">
        <div class="frenteCards">
            <img class="cardImg" src="${item.image}"></img>
        </div>
        
        <div class = "telaText">
            <ul class = "telaTextCard">
                <li><strong>Nome:</strong>${item.name}</li>
                <li><strong>Espécie:</strong>${item.species}</li>
                <li><strong>Status:</strong>${item.status}</li>
                <li><strong>Gênero:</strong>${item.gender}</li>
            </ul>
        </div>
    </div>`
).join(' ')
}
imprimirCardsTela(data.results);
