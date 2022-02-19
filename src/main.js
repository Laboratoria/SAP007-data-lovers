import {filterName,filterStatus,filterSpecie,filterGender} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function showCards(data) {
    let personage = "";
    for (let elemento of data) {
        personage += `
        <div class="card">
            <div class="card-informa">
                <div class="card-frente">
                <p><strong> Nome: ${elemento.name}</strong></p>
          </div>
          <div class="card-verso">
            <ul class="info-por-valor">
            <li> Nome: ${elemento.name}</li>
            <li> Status de vida: ${elemento.status}</li>
            <li> Espécie: ${elemento.species}</li>
            <li> Tipo: ${elemento.type}</li>
            <li> Gênero: ${elemento.gender}</li>
            <li> Localização: ${elemento.location.name}</li>
          </div>
        </div>
      </div>
      `
    }
    return document.getElementById("listagem".innerHTML=personage)    
}
// console.log(example, data);
showCards(data.results);

function apresentaNome() {
    const seletorNome = document.getElementById("name").value;
    const nomeEscolhido = filterName(data.results, seletorNome);
    return showCards(nomeEscolhido);
  }
  showCards(data.results);
  document.getElementById("btn-name").addEventListener("click", apresentaNome);
  
  function apresentaStatus() {
    let seletorStatus = document.getElementById("status").value;
    let statusEscolhido = ""
    if (seletorStatus == "all-status") {
      return showCards(data.results);
    } else {
      statusEscolhido = filterStatus(data.results, seletorStatus);
    }
    return showCards(statusEscolhido);
  }
  document.getElementById("status").addEventListener("change", apresentaStatus);
  