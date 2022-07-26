import { orderAZ, orderZA, filterStatus, filtroespecie, filterGender, calculo, filteredItem } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

export const showCharacters = document.getElementById("card")
const characters = data.results

function showInfos(characters) {
  showCharacters.innerHTML = characters.map(item =>
    `<div class="card">
        <div class="front">
          <div class="name-title">
            <p class="title"> ${item.name}</p>
          </div>
          <div class="card-img">
            <img class="imgcard" src="${item.image}"  />
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
        <img class="imgcard" src="${item.image}" />
      </div>
        <p><b>Origem:</b> ${item.origin.name}</a></p>
        <b>Localização:</b>${item.location.name}</p>
        <p><b>Faz parte de:</b> ${item.episode.length} Epsódios</p>
        </div>
       </div>`

  ).join("")
}

showInfos(characters)

const showStats = document.getElementById("statistics")
const selectGender = document.getElementById("selectFilterGender")
const selectStatus = document.getElementById("selectFilterLife")
const selectSpecies = document.getElementById("selectFilterSpecies")

selectStatus.addEventListener("change", (event) => {
  let newArrayStatus = filterStatus(characters, event.target.value)
  if (selectGender.value) {
    newArrayStatus = newArrayStatus.filter((item) => {
      return item.gender === selectGender.value
    })
  }
  if (selectSpecies.value) {
    newArrayStatus = newArrayStatus.filter((item) => {
      return item.species === selectSpecies.value
    })
  }
  let result = calculo(newArrayStatus.length, characters.length)
  showStats.innerHTML = result
  showInfos(newArrayStatus)
})

selectSpecies.addEventListener("change", (event) => {
  let newArraySpecies = filtroespecie(characters, event.target.value)
  if (selectGender.value) {
    newArraySpecies = newArraySpecies.filter((item) => {
      return item.gender === selectGender.value
    })
  }
  if (selectStatus.value) {
    newArraySpecies = newArraySpecies.filter((item) => {
      return item.status === selectStatus.value
    })
  }
  let result = calculo(newArraySpecies.length, characters.length)
  showStats.innerHTML = result
  showInfos(newArraySpecies)

})

selectGender.addEventListener("change", (event) => {
  let newArrayGender = filterGender(characters,
    event.target.value)
  if (selectStatus.value) {
    newArrayGender = newArrayGender.filter((item) => {
      return item.status === selectStatus.value
    })
  }
  if (selectSpecies.value) {
    newArrayGender = newArrayGender.filter((item) => {
      return item.species === selectSpecies.value
    })
  }

  let result = calculo(newArrayGender.length, characters.length)
  showStats.innerHTML = result
  showInfos(newArrayGender)

})

function orderaz(e) {
  e.preventDefault()
  return showInfos(orderAZ(characters));
}
if (selectStatus.value) {
  characters = characters.filter((item) => {
    return item.status === selectStatus.value
  })
}
if (selectSpecies.value) {
  characters = characters.filter((item) => {
    return item.species === selectSpecies.value
  })
}
if (selectGender.value) {
  characters = characters.filter((item) => {
    return item.gender === selectGender.value
  })
}
document.getElementById("btn-ordemA").addEventListener("click", orderaz);

function orderza(e) {
  e.preventDefault()
  return showInfos(orderZA(characters));
}
document.getElementById("btn-ordemZ").addEventListener("click", orderza);


const clearFilters = document.getElementById("btn-limpar");
function clearAll(e) {
  e.preventDefault()
  window.location.reload();
}
clearFilters.addEventListener("click", clearAll);

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", (e) => {
  let searchString = filteredItem(e.target.value.toLowerCase())
  showInfos(searchString);
})

const btnBackTop = document.querySelector("#voltarAoTopo");
btn.addEventListener("click", function () {
  window.scrollTo(0, 0);

})

