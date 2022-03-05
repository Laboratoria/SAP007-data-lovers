import {searchName, filterSort, directorFilter }from './data.js'
import data from './data/ghibli/ghibli.js';

const films =data.films;

//MOSTRAR FILMES NA TELA
function showFilms(data){
  document.getElementById('cards').innerHTML = data.map((item) => `

  <div class="card">
    <div class="flip-card">
    <p class="title-card"><strong>${item.title}</strong></p>
      <img  class='img-card' src='${item.poster}'alt="poster filmes"> 
    </div>
  </div>
`).join('');  
}

showFilms(data.films);

//SELETORES
const sortAz = document.getElementById('sortAlfa');  
const title = document.getElementById('searchTitle');
const directorSelect = document.getElementById('director');
const clear = document.getElementById('btnClear').addEventListener('click', cleanFilters);
//const calculator = document.getElementById('addedValue')

//BUSCAR PELO TÍTULO DO FILME
title.addEventListener('keyup', ( ) => {
  const typedTitle = document.querySelector('#searchTitle').value;
  console.log(document.querySelector('#searchTitle').value);

    const selectedMovie = searchName(films, typedTitle);
    console.log(selectedMovie);

  showFilms(selectedMovie);
});

//BUSCAR POR ORDEM ALFÁBETICA
sortAz.addEventListener('change',(event)=> {
  const sortSelect = event.target.value;
  console.log(event.target.value);

  const titleAz = filterSort(films, sortSelect);
  console.log(titleAz);
 
showFilms(titleAz);
});

//MOSTRAR FILMES POR DIRETOR
directorSelect.addEventListener('change', (event) => {
  const optionSelected = event.target.value;
  console.log(event.target.value);

  const selectedFilmDirector = directorFilter(films, optionSelected);
  console.log(selectedFilmDirector);

showFilms(selectedFilmDirector);
});

//IMPAR CAMPOS PARA RECOMEÇAR A PESQUISA
 function cleanFilters () {
   title.value ="";
   sortAz.value ="";
   directorSelect.value ="";
 }