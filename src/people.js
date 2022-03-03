import dataGhibli from "./data/ghibli/ghibli.js"
import {} from "./data.js"




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