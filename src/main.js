import dataGhibli from "./data/ghibli/ghibli.js"
import { filterData, filterData2 } from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;

//PARA FILTRAR OS DIRETORES
const diretor = films.map(films => films.director);
console.log(diretor);

//PARA FILTRAR OS PRODUTORES
const produtor = films.map(films => films.producer);
console.log(produtor);

//PARA FILTRAR OS FILMES
//films.map(films => films.id);
//console.log(films);

//PARA PEGAR O VALOR DO INPUT DO SELETOR

director.addEventListener("change", () => {
    const optionsDirector = document.getElementById("director")
    const valueDirector = optionsDirector.options[optionsDirector.selectedIndex].text;
    filterData(dataGhibli, valueDirector);
});

producer.addEventListener("change", () => {
    const optionsProducer = document.getElementById("producer")
    const valueProducer = optionsProducer.options[optionsProducer.selectedIndex].text;
    filterData(dataGhibli, valueProducer);
});

function cardSection() {
    for (let i = 0; i < films.length; i++) {

        const cardSection = document.createElement("div")
        const titleElement = document.createElement("h2")
        const posterElement = document.createElement("img")
        let primeiroItem = ""
        primeiroItem = films[i];
        posterElement.src = primeiroItem.poster
        titleElement.innerHTML = primeiroItem.title
        cardSection.appendChild(titleElement)
        cardSection.appendChild(posterElement)
        const card = document.getElementById("card")
        card.appendChild(cardSection)
    }
};
cardSection(films);

function exibirResposta(filterData) {
    if (director) {
        cardSection = filterData.diretor
    } else(producer)
    cardSection = filterData.produtor

};
exibirResposta();