import { filterFilmByCharactersByGender, filterFilmByCharacters } from "./data.js";
import dataGhibli from "./data/ghibli/ghibli.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA IMPRIMIR NA TELA PERSONAGENS
function cardSection(array) {
    const card = document.getElementById("card")
    card.innerHTML = " "
    for (let j = 0; j < array.length; j++) {
        const flipCard = document.createElement("div"); //pai
        flipCard.setAttribute("class", "flip-card");
        const flipCardInner = document.createElement("div"); //mae
        flipCardInner.setAttribute("class", "flip-card-inner");
        const flipCardFront = document.createElement("div"); //filho
        flipCardFront.setAttribute("class", "flip-card-front");
        const photo = document.createElement("img");
        photo.setAttribute("class", "img-people");
        const flipCardBack = document.createElement("div"); //filho
        flipCardBack.setAttribute("class", "flip-card-back");
        const name = document.createElement("h2");
        name.setAttribute("class", "people");
        const age = document.createElement("p");
        age.setAttribute("class", "people");
        const hair = document.createElement("p");
        hair.setAttribute("class", "people");
        const eye = document.createElement("p");
        eye.setAttribute("class", "people");
        const specie = document.createElement("p");
        specie.setAttribute("class", "people");
        let peopleFilm = array[j];
        photo.src = peopleFilm.img;
        name.innerHTML = peopleFilm.name;
        age.innerHTML = "Idade: " + peopleFilm.age;
        hair.innerHTML = "Cor do cabelo: " + peopleFilm.hair_color;
        eye.innerHTML = "Cor dos olhos: " + peopleFilm.eye_color;
        specie.innerHTML = "Especie: " + peopleFilm.specie;
        flipCardFront.appendChild(photo);
        flipCardBack.appendChild(name);
        flipCardBack.appendChild(age);
        flipCardBack.appendChild(hair);
        flipCardBack.appendChild(eye);
        flipCardBack.appendChild(specie);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        card.appendChild(flipCard);
    }
}

function todosPersonagens(filmes) {
    const card = document.getElementById("card")
    card.innerHTML = " "
    for (let i = 0; i < filmes.length; i++) {
        for (let j = 0; j < filmes[i].people.length; j++) {
            const flipCard = document.createElement("div"); //pai
            flipCard.setAttribute("class", "flip-card");
            const flipCardInner = document.createElement("div"); //mae
            flipCardInner.setAttribute("class", "flip-card-inner");
            const flipCardFront = document.createElement("div"); //filho
            flipCardFront.setAttribute("class", "flip-card-front");
            const photo = document.createElement("img");
            photo.setAttribute("class", "img-people");
            const flipCardBack = document.createElement("div"); //filho
            flipCardBack.setAttribute("class", "flip-card-back");
            const name = document.createElement("h2");
            name.setAttribute("class", "name-people");
            const age = document.createElement("p");
            age.setAttribute("class", "people");
            const hair = document.createElement("p");
            hair.setAttribute("class", "people");
            const eye = document.createElement("p");
            eye.setAttribute("class", "people");
            const specie = document.createElement("p");
            specie.setAttribute("class", "people");
            let peopleFilm = filmes[i].people[j];
            photo.src = peopleFilm.img;
            name.innerHTML = peopleFilm.name;
            age.innerHTML = "Idade: " + peopleFilm.age;
            hair.innerHTML = "Cor do cabelo: " + peopleFilm.hair_color;
            eye.innerHTML = "Cor dos olhos: " + peopleFilm.eye_color;
            specie.innerHTML = "Especie: " + peopleFilm.specie;
            flipCardFront.appendChild(photo);
            flipCardBack.appendChild(name);
            flipCardBack.appendChild(age);
            flipCardBack.appendChild(hair);
            flipCardBack.appendChild(eye);
            flipCardBack.appendChild(specie);
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            card.appendChild(flipCard);
        }
    }
}
todosPersonagens(films)

document.addEventListener("change", () => {
    const optionsFilm = document.getElementById("filmes")
    const filmIndex = optionsFilm.selectedIndex;
    const filmSelected = optionsFilm[filmIndex].text;
    const filmFiltered = filterFilmByCharacters(films, filmSelected);
    todosPersonagens(filmFiltered)
})

document.addEventListener("change", () => {
    const optionsFilm = document.getElementById("filmes")
    const filmIndex = optionsFilm.selectedIndex;
    const filmSelected = optionsFilm[filmIndex].text;
    const optionsGender = document.getElementById("gender")
    const genderIndex = optionsGender.selectedIndex;
    const genderSelected = optionsGender[genderIndex].text;
    const filmFiltered = filterFilmByCharactersByGender(films, filmSelected, genderSelected);
    cardSection(filmFiltered)
});