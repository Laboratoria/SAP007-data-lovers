import data from './data/ghibli/ghibli.js';
import { sortAzPersons } from './data.js';


const charactersContainer = document.getElementById("charactersContainer");
function showCardsCharacters(arrCharacters) {
    // console.log(arrCharacters)
    charactersContainer.innerHTML = arrCharacters.map((character) =>
        
            `        
        <div class="innerCard"> 
            <img src="${character.img}" alt="Imagem personagem" class="cardCharacter"  id="cardCharacter"> 
            <p class="nameCharacter">${character.name} </p>   
        </div>        
        `

    ).join('')
}

// chamando a ordenação dos personagens
const characters = data.films.map(addPeople => addPeople.people)
//  console.log(characters, "filme")
const arrPeople = [].concat.apply([],characters);
// console.log(arrPeople, "xx")
showCardsCharacters(arrPeople)

const sortOrderPersons = document.getElementById("sortAZ");

sortOrderPersons.addEventListener("change", (event) => {
    const selectedSortPerson = event.target.value;
    const filterAzPerson = sortAzPersons(arrPeople, selectedSortPerson);
    // console.log(filterAzPerson, "xx")
    showCardsCharacters(filterAzPerson);
 
});

//botão para recarregar a página
const buttonClean = document.getElementById("btnClean");
function cleanFilters() {
    window.location.reload(); 
}
buttonClean.addEventListener("click", cleanFilters);
