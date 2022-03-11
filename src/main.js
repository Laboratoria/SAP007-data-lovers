import dataGhibli from "./data/ghibli/ghibli.js"
import { filterDataByDirector, filterDataByProducer, sortDataFilms } from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA IMPRIMIR NA TELA O POSTER COM O TÍTULO DO FILME
function cardSection(items) {
    const card = document.getElementById("card")
    card.innerHTML = " "
    for (let i = 0; i < items.length; i++) {
        const flipCard = document.createElement("div"); //pai
        flipCard.setAttribute("class", "flip-card");
        const flipCardInner = document.createElement("div"); //mae
        flipCardInner.setAttribute("class", "flip-card-inner");
        const flipCardFront = document.createElement("div"); //filho
        flipCardFront.setAttribute("class", "flip-card-front")
        const posterElement = document.createElement("img");
        posterElement.setAttribute("class", "img-cards")
        const flipCardBack = document.createElement("div"); //filho
        flipCardBack.setAttribute("class", "flip-card-back");
        const titleElement = document.createElement("h2");
        titleElement.setAttribute("class", "title-cards");
        const releaseDate = document.createElement("h3");
        releaseDate.setAttribute("class", "release-date");
        const description = document.createElement("p");
        description.setAttribute("class", "description");
        let firstItem = items[i];
        posterElement.src = firstItem.poster;
        titleElement.innerHTML = firstItem.title;
        releaseDate.innerHTML = firstItem.release_date;
        description.innerHTML = firstItem.description;
        flipCardFront.appendChild(posterElement);
        flipCardBack.appendChild(titleElement);
        flipCardBack.appendChild(releaseDate);
        flipCardBack.appendChild(description);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        card.appendChild(flipCard);
    }
}
cardSection(films);

//PARA PEGAR O VALOR DO INPUT DO SELETOR
document.addEventListener("change", () => {
    const optionsDirector = document.getElementById("director")
    const directorIndex = optionsDirector.selectedIndex;
    const directorSelected = optionsDirector[directorIndex].text;
    const directorFiltered = filterDataByDirector(films, directorSelected);
    cardSection(directorFiltered)
});

document.addEventListener("change", () => {
    const optionsProducer = document.getElementById("producer")
    const producerIndex = optionsProducer.selectedIndex;
    const producerSelected = optionsProducer[producerIndex].text;
    const producerFiltered = filterDataByProducer(films, producerSelected);
    cardSection(producerFiltered)
});

document.addEventListener("change", () => {
    const optionsOrder = document.getElementById("order")
    const orderIndex = optionsOrder.selectedIndex;
    const orderSelected = optionsOrder[orderIndex].text;
    const orderFiltered = sortDataFilms(films, orderSelected);
    cardSection(orderFiltered)
});