import data from './data/ghibli/ghibli.js';
import { sortAzPersons } from './data.js';

const printCharacters = data.films

const charactersContainer = document.getElementById("charactersContainer");
function showCardsCharacters(printCharacters) {
    charactersContainer.innerHTML = printCharacters.map((film) =>
        film.people.map((character) =>

            `        
        <div class="innerCard"> 
            <img src="${character.img}" alt="Imagem personagem" class="cardCharacter"  id="cardCharacter"> 
            <p class="nameCharacter">${character.name} </p>   
        </div>        
        `

        ).join('')
    )
}
showCardsCharacters(printCharacters)


// chamando a ordenação dos personagens

const characters = data.films.map(addPeople => addPeople.people.map(addName => addName.name))
// console.log(characters)
const arrPeople = [].concat.apply([],characters);
console.log(arrPeople)

const sortOrderPersons = document.getElementById("sortAZ");

sortOrderPersons.addEventListener("change", (event) => {
    const selectedSortPerson = event.target.value;
    const filterAzPerson = sortAzPersons(arrPeople, selectedSortPerson);
    showCardsCharacters(filterAzPerson);
 
});




// const people = films.map(films => films.people);
// console.log(people)

// const arrPeople = [].concat.apply([],people);
// console.log(arrPeople)