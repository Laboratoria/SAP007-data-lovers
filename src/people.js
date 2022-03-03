import dataGhibli from "./data/ghibli/ghibli.js"
import { filterDataByDirector, filterDataByProducer, filterByPeople} from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA MAPEAR OS DIRETORES
const diretor = films.map(films => films.director);
console.log(diretor);

//PARA MAPEAR OS PRODUTORES
const produtor = films.map(films => films.producer);
console.log(produtor);

//PARA MAPEAR OS PERSONAGENS
const people = films.map

//PARA IMPRIMIR NA TELA PERSONAGENS
const card = document.getElementById("card")
card.innerHTML = " "

for (let i = 0; i < dataGhibli.films.length; i++) {
    let film = dataGhibli.films[i].id

    for (let j = 0; j < dataGhibli.films[i].people.length; j++) {
        const cardSection = document.createElement("div");
        const cS = cardSection.setAttribute("class", "card-section");
        const titleElement = document.createElement("h2")
        const posterElement = document.createElement("img")
        let peopleFilm = dataGhibli.films[i].people[j]
        posterElement.src = peopleFilm.img
        titleElement.innerHTML = peopleFilm.name
        cardSection.appendChild(titleElement)
        cardSection.appendChild(posterElement)
        card.appendChild(cardSection)
    }
}

//PARA PEGAR O VALOR DO INPUT DO SELETOR
film.addEventListener("change", () => {
    const optionsFilm = document.getElementById("film")
    const filmIndex = optionsFilm.selectedIndex;
    const filmSelected = optionsFilm[filmIndex].text;
    const filmFiltered = filterByPeople(films, filmSelected);

    console.log(cardSection(filmFiltered));

});
