import data from './data/ghibli/ghibli.js';

const personagens = data.films

export const charactersContainer = document.getElementById("charactersContainer");
function showCardsCharacters(personagens) {
    charactersContainer.innerHTML = personagens.map((film) =>
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
showCardsCharacters(personagens)

