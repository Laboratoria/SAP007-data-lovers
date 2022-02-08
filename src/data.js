import dadosGhibli from "./data/ghibli/ghibli.js";
export function qualquercoisa() {
  dadosGhibli.films.map((item) => {
    let lista = document.createElement("ul");
    let title = document.createElement("h1");
    let poster = document.createElement("img");
    lista.classList.add("cards");
    lista.appendChild(poster);
    lista.appendChild(title);
    document.body.appendChild(lista);
    poster.src = item.poster;
    title.innerHTML = item.title;
  });
}
