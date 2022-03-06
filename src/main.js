import data from './data/rickandmorty/rickandmorty.js';
import { filterData, sortBy, computeStats, filternome} from './data.js';

function aparecerCards(data) {
  document.getElementById("lista-cards").innerHTML = data.map((item) => ` 
  <div class="card">
    <div class="mostrar-cards">
      <div class="cards-frente">
        <img src="${item.image}">
        <p>Nome:${item.name}</p>
      </div>
      <div class="card-costa">
          <p>Genero:${item.gender}</p>
          <p>Status:${item.status}</p>
          <p>Especie:${item.species}</p>
          <p>Origem:${item.origin.name}</p>
          <p>Episodios que aparecem:${item.episode.length}</p>
          <p>Local onde vive:${item.location.name}</p>
          <p>Data de criação: ${item.created}</p>
          
      </div>
    </div>
  </div>
     
` ).join(''); // tirou a virgulazinha que aparecia
};
aparecerCards(data.results);

function ordenarPersonagens(evt) {
evt.preventDefault();
const selectOrdem = sortBy(data.results, evt.target.value);
aparecerCards(selectOrdem);  
}
//função do filtro;
function filtroPersonagem(evt) {
  evt.preventDefault();
  const genero = document.getElementById("selectGenero").value;
  const especie = document.getElementById("selectEspecie").value;
  const status = document.getElementById("selectStatus").value; 

  let fData = data.results

  if (genero != "") {
    fData = filterData(fData, ["gender", genero]);

    const selectPersonagens = {
      'totalLenght': data.results.length,
      'selectedLenght': fData.length
    };
    const percentualTotal = computeStats(selectPersonagens);
    document.getElementById("percentualTotal").innerHTML = `A porcentagem de personagens é: ${percentualTotal} % `  
  }
  if (status !="") {
    fData = filterData(fData, ["status", status])
    const selectPersonagens = {
      'totalLenght': data.results.length,
      'selectedLenght': fData.length
    };
    const percentualTotal = computeStats(selectPersonagens);
    document.getElementById("percentualTotal").innerHTML = `A porcentagem de personagens é: ${percentualTotal} % `  
  }

  if (especie != "") {
    fData = filterData(fData, ["species", especie]);
    const selectPersonagens = {
      'totalLenght': data.results.length,
      'selectedLenght': fData.length
    };
    const percentualTotal = computeStats(selectPersonagens);
    document.getElementById("percentualTotal").innerHTML = `A porcentagem de personagens é: ${percentualTotal} % `  
  }
  
  aparecerCards(fData);
}

function pesquisarNome(evt){
  evt.preventDefault();
  const devolveNome = filternome(data.results, evt.target.value);

  aparecerCards(devolveNome);
}

function limparFiltros(){
  window.location.reload();
}


document.getElementById("selectOrdem").addEventListener("change", ordenarPersonagens);
document.getElementById("selectStatus").addEventListener("change", filtroPersonagem);
document.getElementById("selectGenero").addEventListener("change", filtroPersonagem);
document.getElementById("selectEspecie").addEventListener("change", filtroPersonagem);
document.getElementById("pesquisarNome").addEventListener("keyup", pesquisarNome);
document.getElementById("limparFiltro").addEventListener("click", limparFiltros);















