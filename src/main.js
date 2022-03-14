import { ordemNameAA, ordemNameBB } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showPersonagens = document.getElementById("card")
const arrayRickAndMorty = data.results

function showInfos(arrayRickAndMorty) {
  showPersonagens.innerHTML = arrayRickAndMorty.map(item =>
    `<div class="card">
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
          </div>`

  ).join('')
}

showInfos(arrayRickAndMorty)
//filtros status
const selectStatus = document.getElementById("selectFilterLife")

selectStatus.addEventListener("change", (event) => {
  const newArrayStatus = arrayRickAndMorty.filter((item) => {
    return item.status === event.target.value
  })
  showInfos(newArrayStatus)
})
//filtroespecie
const selectSpecies = document.getElementById("selectFilterSpecies")

selectSpecies.addEventListener("change", (event) => {
  const newArraySpecies = arrayRickAndMorty.filter((item) => {
    return item.species === event.target.value
  })
  showInfos(newArraySpecies)
})
//filtroGenero
const selectGender = document.getElementById("selectFilterGender")

selectGender.addEventListener("change", (event) => {
  const newArrayGender = arrayRickAndMorty.filter((item) => {
    return item.gender === event.target.value
  })
  showInfos(newArrayGender)
})
//função ordenar A a Z
function ordemNameA() {
  return showInfos(ordemNameAA(arrayRickAndMorty));
}

document.getElementById("btn-ordemA").addEventListener("click", ordemNameA);
//função ordenar Z a A
function ordemNameB() {
  return showInfos(ordemNameBB(arrayRickAndMorty));
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

console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  const filteredCharacteres = arrayRickAndMorty.filter(item => {
    return item.name.includes(searchString) ||
      item.status.includes(searchString) ||
      item.species.includes(searchString) ||
      item.gender.includes(searchString)
  });
  console.log(filteredCharacteres)
  showInfos(filteredCharacteres)
});

var btn = document.querySelector("#voltarAoTopo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
