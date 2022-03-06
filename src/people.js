import { filterFilmByCharactersByGender, filterFilmByCharacters } from "./data.js";
import dataGhibli from "./data/ghibli/ghibli.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA IMPRIMIR NA TELA PERSONAGENS
function cardSection(array) {
    const card = document.getElementById("card")
    card.innerHTML = " "
    for (let j = 0; j < array.length; j++) {
        const cardSection = document.createElement("div");
        const cS = cardSection.setAttribute("class", "div-cards");
        //const titleElement = document.createElement("h2")
        const posterElement = document.createElement("img")
        const img = posterElement.setAttribute("class", "img-cards")
        let peopleFilm = array[j];
        posterElement.src = peopleFilm.img
            //titleElement.innerHTML = peopleFilm.name
            //cardSection.appendChild(titleElement)
        cardSection.appendChild(posterElement)
        card.appendChild(cardSection)
    }

}

function todosPersonagens(filmes) {
    const card = document.getElementById("card")
    card.innerHTML = " "

    for (let i = 0; i < filmes.length; i++) {
        for (let j = 0; j < filmes[i].people.length; j++) {
            const cardSection = document.createElement("div");
            const cS = cardSection.setAttribute("class", "div-cards");
            //const titleElement = document.createElement("h2")
            const posterElement = document.createElement("img")
            const img = posterElement.setAttribute("class", "img-people")
            let peopleFilm = filmes[i].people[j];
            posterElement.src = peopleFilm.img
                //titleElement.innerHTML = peopleFilm.name
                //cardSection.appendChild(titleElement)
            cardSection.appendChild(posterElement)
            card.appendChild(cardSection)
        }
    }
}

todosPersonagens(films)

//PARA PEGAR O VALOR DO INPUT DO SELETOR

filmes.addEventListener("change", () => {
    const optionsFilm = document.getElementById("filmes")
    const filmIndex = optionsFilm.selectedIndex;
    const filmSelected = optionsFilm[filmIndex].text;
    const filmFiltered = filterFilmByCharacters(films, filmSelected);
    todosPersonagens(filmFiltered)

})

gender.addEventListener("change", () => {
    const optionsFilm = document.getElementById("filmes")
    const filmIndex = optionsFilm.selectedIndex;
    const filmSelected = optionsFilm[filmIndex].text;
    const optionsGender = document.getElementById("gender")
    const genderIndex = optionsGender.selectedIndex;
    const genderSelected = optionsGender[genderIndex].text;
    const filmFiltered = filterFilmByCharactersByGender(films, filmSelected, genderSelected);
    cardSection(filmFiltered)
});

//PARA MAPEAR OS PERSONAGENS
// const people = films.map(films => films.people[0].age);
// console.log(people);

//const characters = dataGhibli.films.map(addPeople => addPeople.people.map(addIdade => addIdade.age));

// const arrPeople = [].concat.apply([], people)
// console.log(arrPeople)