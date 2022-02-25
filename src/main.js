//DOM, event listeners, event handlers

import { filterGender, filterSpecie, searchName } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function cardShow(data) {
  document.getElementById("cards").innerHTML = data.map((item) =>
        `<div class="background-card">
   <div class="img-card">
   <div class="img-personagem" src="${item.image}">
   </div>
   <ul class="front-text-card">
          <li><strong>Nome:</strong>${item.name}</li>
          <li><strong>Gênero:</strong>${item.gender}</li>      
          <li><strong>Status:</strong>${item.status}</li>
          <li><strong>Espécie:</strong>${item.species}</li>
          <li><strong>Origem:</strong>${item.origin.name}</li>
          <li><strong>Localização:</strong></li>
            <p> ${item.location.name} </p>
            <h4> Aparece em: </h4>
            <p>${item.episode.length} episódios</p>
        </ul>
      </div> 
      </div> 
   
   `
    )
    .join("");
}
cardShow(data.results);



const genderFilters = document.getElementById("filters-gender");
genderFilters.addEventListener("change", (event) => {
  console.log(event.target.value);
});

const speciesFilters = document.getElementById("filters-specie");
speciesFilters.addEventListener("change", (event) => {
  console.log(event.target.value);
});









//function getName(e){
//const namesFilters = searchName (data.results,e.target.value)
//return (namesFilters);
//});

//function buscarNomePersonagens(e) {
//const nomePersonagens = buscarNome(data.results, e.target.value)
//return infoCardsTela(nomePersonagens);
//}
