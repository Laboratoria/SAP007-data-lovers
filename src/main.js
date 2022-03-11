import { filmOrder, filterMovie } from './data.js';
import data from './data/ghibli/ghibli.js';

// printar os filmes na tela
const filmes = data.films;
function printTela(data) {
    document.getElementById("filmes").innerHTML = data.map((item) => `
    <div class="item">
        <div class="img-te" href="/filme">
            <a href="/selectfilm?id=${item.id}">
                <img src="${item.poster}" />
            </a>
        </div>
    </div>
  `).join("")
}

printTela(filmes);

//chamando evento seletor ordenar
const order = document.getElementById("order")

order.addEventListener("change", (event) => {
    const selectOrder = event.target.value;
    if (selectOrder !== "") {
        const filterAz = filmOrder(filmes, selectOrder);
        printTela(filterAz);
    }
});

// botão de busca
document.getElementById('btnBusca').addEventListener('click', function () {
    event.preventDefault();
    const buscaInput = document.getElementById("txtBusca").value;
    
    const filmesEncontrados = filterMovie(filmes, buscaInput);
    
    printTela(filmesEncontrados);
});

// botão para recarregar a página
const btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {
    location.reload();
});