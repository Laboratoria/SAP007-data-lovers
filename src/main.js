import { ordemNameAA, ordemNameBB, filterStatus, filtroespecie, filterGender, calculo } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const showPersonagens = document.getElementById("card")
const arrayRickAndMorty = data.results

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
        <p><b>Origem:</b> ${item.origin.name}</a></p>
        <b>Localização:</b>${item.location.name}</p>
        <p><b>Faz parte de:</b> ${item.episode.length} Epsódios</p>
        </div>
       </div>`

  ).join('')
}

showInfos(arrayRickAndMorty)

const showStats = document.getElementById("statistics")

//filtros status
const selectGender = document.getElementById("selectFilterGender")
const selectStatus = document.getElementById("selectFilterLife")
const selectSpecies = document.getElementById("selectFilterSpecies")
document.getElementById("btn-ordemZ").addEventListener("click", ordemNameB);


selectStatus.addEventListener("change", (event) => {

  let newArrayStatus = filterStatus(arrayRickAndMorty, event.target.value)
  if (selectGender.value) {
    newArrayStatus = newArrayStatus.filter((item) => {
      let carD = item.gender === selectGender.value
      return carD
    })
  }
  if (selectSpecies.value) {
    newArrayStatus = newArrayStatus.filter((item) => {
      let carD = item.species === selectSpecies.value
      return carD
    })
  }
 let result = calculo(newArrayStatus.length, arrayRickAndMorty.length)
 showStats.innerHTML = result
  showInfos(newArrayStatus)
})
//filtroespecie

selectSpecies.addEventListener("change", (event) => {
  let newArraySpecies = filtroespecie(arrayRickAndMorty, event.target.value)
  if (selectGender.value) {
    newArraySpecies = newArraySpecies.filter((item) => {
      let carD = item.gender === selectGender.value
      return carD
    })
  }
  if (selectStatus.value) {
    newArraySpecies = newArraySpecies.filter((item) => {
      let carD = item.status === selectStatus.value
      return carD
    })
  }
  let result = calculo(newArraySpecies.length, arrayRickAndMorty.length)
  showStats.innerHTML = result
  showInfos(newArraySpecies)

})
//filtroGenero

selectGender.addEventListener("change", (event) => {
  let newArrayGender = filterGender(arrayRickAndMorty,
    event.target.value)
  if (selectStatus.value) {
    newArrayGender = newArrayGender.filter((item) => {
      let carD = item.status === selectStatus.value
      return carD
    })
  }
  if (selectSpecies.value) {
    newArrayGender = newArrayGender.filter((item) => {
      let carD = item.species === selectSpecies.value
      return carD
    })
  }

  let result = calculo(newArrayGender.length, arrayRickAndMorty.length)
  showStats.innerHTML = result
  showInfos(newArrayGender)

})

//função ordenar A a Z
function ordemNameA(event) {
  event.preventDefault()
  return showInfos(ordemNameAA(arrayRickAndMorty));
}
if (selectStatus.value) {
  arrayRickAndMorty = arrayRickAndMorty.filter((item) => {
    let carD = item.status === selectStatus.value
    return carD
  })
}
if (selectSpecies.value) {
  arrayRickAndMorty = arrayRickAndMorty.filter((item) => {
    let carD = item.species === selectSpecies.value
    return carD
  })
}
if (selectGender.value) {
  arrayRickAndMorty = arrayRickAndMorty.filter((item) => {
    let carD = item.gender === selectGender.value
    return carD
  })
}

document.getElementById("btn-ordemA").addEventListener("click", ordemNameA);
//função ordenar Z a A
function ordemNameB(event) {
  event.preventDefault()
  return showInfos(ordemNameBB(arrayRickAndMorty));
}

//função limpar
const clearFilters = document.getElementById("btn-limpar");
function clearAll() {
  window.location.reload();
}
clearFilters.addEventListener("click", clearAll);
//pesquisar por nome


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
const searchString = e.target.value.toLowerCase();
  const filteredItem = arrayRickAndMorty.filter(item => {
    return (
    item.name.toLowerCase().includes(searchString)||
    item.status.toLowerCase().includes(searchString)||
    item.gender.toLowerCase().includes(searchString)||
    item.species.toLowerCase().includes(searchString)
    )
  })
   showInfos(filteredItem);
})

const btn = document.querySelector("#voltarAoTopo");
btn.addEventListener("click", function () {
  window.scrollTo(0, 0);

})
