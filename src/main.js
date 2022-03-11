//import { showPersonagens } from './data.js';
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
            <img src="${item.image}" class="imgcard">
          </div>
          <div class="card-infos">
           <p> <b>Status:</b> ${item.status}</p>
            <p> <b>Espécie:</b>${item.species}</p>
            <p> <b>Gênero:</b>${item.gender}</p>
            <b>Origem:</b><a href="${item.origin.url}"> ${item.origin.name}</a>
            <p><b>Localização:</b><a href="${item.location.url}"> ${item.location.name}</a></p>
          </div>
          </div>`

    ).join('')
}
showInfos(arrayRickAndMorty)


const selectStatus = document.getElementById("selectFilterLife")

selectStatus.addEventListener("change", (event) => {
  const newArrayStatus = arrayRickAndMorty.filter((item)=> {
   return item.status === event.target.value
  })
  console.log(event.target.value)
  console.log(newArrayStatus)
  showInfos(newArrayStatus)
})

const selectSpecies = document.getElementById("selectFilterSpecies")

selectSpecies.addEventListener("change", (event) => {
  const newArraySpecies = arrayRickAndMorty.filter((item)=> {
  return item.species === event.target.value
 })
  console.log(event.target.value)
  console.log(newArraySpecies)
  showInfos(newArraySpecies)
})

const selectGender = document.getElementById("selectFilterGender")

selectGender.addEventListener("change", (event)=> {
  const newArrayGender = arrayRickAndMorty.filter((item)=> {
    return item.gender === event.target.value
    })
   console.log(event.target.value)
   console.log(newArrayGender)
  showInfos(newArrayGender)
})



const btn = document.querySelector("#refresh")

btn.addEventListener('click', () => {
  location.reload()
})

const searchBar = document.getElementById('searchBar');


console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  const filteredCharacteres = arrayRickAndMorty.filter( item =>{
   return item.name.includes(searchString) ||
    item.status.includes(searchString) ||
    item.species.includes(searchString) ||
    item.gender.includes(searchString)
  });
  console.log(filteredCharacteres)
  showInfos(filteredCharacteres)
});


