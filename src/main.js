import { ordemNameAA, ordemNameBB } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showPersonagens = document.getElementById("card")
const arrayRickAndMorty = data.results
let cardsAtuais = arrayRickAndMorty

function showInfos(arrayRickAndMorty) {
  showPersonagens.innerHTML = arrayRickAndMorty.map(item =>
    `<div class="card">
        <div class="front">
          <div class="name-title">
            <p class="title"> ${item.name}</p>
          </div>
          <div class="card-img">
            <img src="${item.image}" class="imgcard" position="center" width="174px" height="170px" border-radius="5%" />
          </div>
          <div class="card-infos">
           <p> <b>Status:</b> ${item.status}</p>
            <p> <b>Espécie:</b>${item.species}</p>
            <p> <b>Gênero:</b>${item.gender}</p>
          </div>
       </div>
       <div class="back">
       <div class="name-title">
       <p class="title"> ${item.name}</p>
        </div>
        <div class="card-img">
        <img src="${item.image}" class="imgcard" position="center" width="174px" height="170px" border-radius="5%" />
      </div>
        <b>Origem:</b> ${item.origin.url}</a>
        <b>Localização:</b>${item.location.url}</p>
        <p><b>Epsódios que aparece:</b> ${item.episode.lenght}</p>
        </div>
       </div>`

  ).join('')

}

showInfos(cardsAtuais)
//filtros status
const selectStatus = document.getElementById("selectFilterLife")

selectStatus.addEventListener("change", (event) => {
  cardsAtuais = cardsAtuais.filter((item) => {
    return item.status === event.target.value
  })

  showInfos(cardsAtuais)
})

//filtroespecie
const selectSpecies = document.getElementById("selectFilterSpecies")

selectSpecies.addEventListener("change", (event) => {
  cardsAtuais = cardsAtuais.filter((item) => {
    return item.species === event.target.value
  })
  showInfos(cardsAtuais)
})
//filtroGenero
const selectGender = document.getElementById("selectFilterGender")

selectGender.addEventListener("change", (event) => {
  cardsAtuais = cardsAtuais.filter((item) => {
    return item.gender === event.target.value
  })
  showInfos(cardsAtuais)
})
//função ordenar A a Z
function ordemNameA(event) {
  event.preventDefault()
  return showInfos(ordemNameAA(cardsAtuais));
}

document.getElementById("btn-ordemA").addEventListener("click", ordemNameA);
//função ordenar Z a A
function ordemNameB(event) {
  event.preventDefault()
  return showInfos(ordemNameBB(cardsAtuais));
}
document.getElementById("btn-ordemZ").addEventListener("click", ordemNameB);
//função limpar
const clearFilters = document.getElementById("btn-limpar");
function clearAll() {
  window.location.reload();
}
clearFilters.addEventListener("click", clearAll);
//pesquisar por nome

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  cardsAtuais = cardsAtuais.filter(item => {
    return item.name.includes(searchString) ||
      item.status.includes(searchString) ||
      item.species.includes(searchString) ||
      item.gender.includes(searchString)
  });
  showInfos(cardsAtuais)
});

//const calculoStatus = document.getElementById("calculoAgreStatus");
//calculoStatus.innerHTML = ${item.status.reduce((acc,curr) => acc+curr} 0)
// return acc + curr.
// return calculoStatus/cardsAtuais.length
//${item.status.reduce((acc,curr) => acc+curr, 0)}</h2><h3> A média de personagens é: ${item.status.reduce((acc,curr) => acc+curr, 0)/cardsAtuais.length}`
