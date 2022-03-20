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


  showInfos(arrayRickAndMorty)
}
showInfos(cardsAtuais)


function calculo(numero, numero2){
  let statS = numero/ numero2 *100;
  document.getElementById("statistics").innerText = `${statS.toFixed(1)}% dos personagens corresponde a categoria escolhida`
  console.log(showStats)


}
  //filtros status
  const selectStatus = document.getElementById("selectFilterLife")

  selectStatus.addEventListener("change", (event) => {

    const newArrayStatus = arrayRickAndMorty.filter((item) => {
      let carD = item.status === event.target.value
      return carD
    })
    calculo(newArrayStatus.length, arrayRickAndMorty.length)
    showInfos(newArrayStatus)

    cardsAtuais = cardsAtuais.filter((item) => {
      return item.status === event.target.value
    })



  //filtroespecie
  const selectSpecies = document.getElementById("selectFilterSpecies")

  selectSpecies.addEventListener("change", (event) => {
    cardsAtuais = cardsAtuais.filter((item) => {
      return item.species === event.target.value
    })

    calculo(newArraySpecies.length, arrayRickAndMorty.length)
    showInfos(newArraySpecies)

    showInfos(cardsAtuais)

  })
  //filtroGenero
  const selectGender = document.getElementById("selectFilterGender")

  selectGender.addEventListener("change", (event) => {
    cardsAtuais = cardsAtuais.filter((item) => {
      return item.gender === event.target.value
    })

    calculo(newArrayGender.length, arrayRickAndMorty.length)
    showInfos(newArrayGender)

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


  var btn = document.querySelector("#voltarAoTopo");
  btn.addEventListener("click", function() {
      window.scrollTo(0, 0);

  });
