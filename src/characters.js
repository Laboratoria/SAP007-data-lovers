import data from './data/ghibli/ghibli.js';
import { sortAzPersons, filterSpecie, filterGender, calculoCharacters } from './data.js';


const charactersContainer = document.getElementById("charactersContainer");
function showCardsCharacters(arrCharacters) {

    charactersContainer.innerHTML = arrCharacters.map((character) =>

        `        
        <div class="innerCard"> 
            <img src="${character.img}" alt="Imagem personagem" class="cardCharacter"  id="cardCharacter"> 
            <p class="nameCharacter">${character.name} </p>   
        </div>        
        `

    ).join('')
}

const people = data.films.map(addPeople => addPeople.people)
const arrPeople = [].concat.apply([], people);


showCardsCharacters(arrPeople)

const sortOrderPersons = document.getElementById("sortAZ");

sortOrderPersons.addEventListener("change", (event) => {
    const selectedSortPerson = event.target.value;
    const filterAzPerson = sortAzPersons(arrPeople, selectedSortPerson);
    showCardsCharacters(filterAzPerson);
});

const filterSpecies = document.getElementById("selectSpecie");

filterSpecies.addEventListener("change", (event) => {
    const selectedSpecie = event.target.value;
    const getItemSpecie = filterSpecie(arrPeople, selectedSpecie);
    showCardsCharacters(getItemSpecie);
    showCardsCharacters2(getItemSpecie);
});

const filterGenders = document.getElementById("selectGender");

filterGenders.addEventListener("change", (event) => {
    const selectedGender = event.target.value;
    const getItemGender = filterGender(arrPeople, selectedGender);
    showCardsCharacters(getItemGender);
})

const selectSpecieC = document.getElementById('resultPercent') 

function showCardsCharacters2(selectedFilter) {
    selectSpecieC.innerHTML = '';

    const filterSpecieE = document.getElementById('selectSpecie').value;
    const calculo = calculoCharacters(selectedFilter);
    selectSpecieC.innerHTML =
    `
    <p> Existe um total de ${calculo} personagen(s) da espécie ${filterSpecieE} </p>
    `
    ;
    
}

//botão para recarregar a página

const buttonClean = document.getElementById("btnClean");
function cleanFilters() {
    window.location.reload();
}
buttonClean.addEventListener("click", cleanFilters);
