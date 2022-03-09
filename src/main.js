import {
    filtroGenero,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

///Imprimir Cards na tela///

function imprimirCardsTela(data) {
  document.getElementById("infoCards").innerHTML = data
    .map(
      (item) => ` 
        
    <div class = "cards">
        <div class="frenteCards">
            <img class="cardImg" src="${item.image}" ></img>
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



///FILTRAGEM
///coloca o dom pra ouvir o evento
const seletorGenero = getElementById("gender-filter");

//pega 'seletor' que é o evento. todo event listner primeiro recebe o TIPO de evento (change)
/// e depois uma FUNÇÃO(arrow function) e um EVENTO como parametro
seletorGenero.addEventListner("change", (event) =>{

console.log(event.target.value);

const resultado= data.results.filter((item) =>{ 
    /// se mudar o === 'item' pelo event.target.value
    return item.gender === event.target.value
 });
 console.log(resultado)
});

function imprimirFiltroGenero(e) {
    const resultadoGenero = filtroGenero(data.results, e.target.value); 
    //e.target.value -> esse evento vai atrás do "alvo" selecionado no input do select
    return imprimirCardsTela(resultadoGenero);
  }
  //selecaoGenero.addEventListener("change", imprimirFiltroGenero);


  


