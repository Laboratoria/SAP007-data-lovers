import dataGhibli from "./data/ghibli/ghibli.js"
import { filterData } from "./data.js"

//PARA CHAMAR A ARRAY
const films = dataGhibli.films;


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

//let resposta = document.getElementById("resposta");

//let film1 = dataGhibli.filterData(0, "filme 1");

//resposta.innerHTML = film1;

//PARA IMPRIMIR NA TELA O POSTER COM O TÍTULO DO FILME


//console.log("cardSection", cardSection, "title", titleElement, "poster", posterElement);

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







///console.log(dataGhibli.films.title);

//const films = dataGhibli.films
//for (let i = 0; i <= films.length; i++) {
// console.log(films[i]);
//}


//////////////////////////////////////////////////////

//let filtro = data.map(data=>data.id);

//console.log(filtro);

////////////////////////////////////////////////////////////////////


//let director = document.querySelector(".director");

//director.addEventListener("click", () => {
//  director.value = filterData(data, director);
//});