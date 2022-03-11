import data from './data/ghibli/ghibli.js';

// função find
const numMovie = window.location.search.replace("?id=", "");
const anime = data.films.find((buscaFilme) => {
    return buscaFilme.id === numMovie
});

document.getElementById("titulo").innerHTML = anime.title;
document.getElementById("poster").src = anime.poster;
document.getElementById("sinopse").innerHTML = anime.description;
document.getElementById("diretor").innerHTML = "DIRETOR: " + anime.director;
document.getElementById("produtor").innerHTML = "PRODUTOR: " + anime.producer;
document.getElementById("ano").innerHTML = "LANÇAMENTO: " + anime.release_date;
document.getElementById("nota").innerHTML = "NOTA: " + anime.rt_score;

anime.people.forEach((person) => {
    document.querySelector(".personagens").innerHTML += `
    <div class="character">
        <p class="name">${person.name}</p>
        <div class="imgwrapper">
            <img class="foto" src="${person.img}"/>
        </div>
        <p class="text-person">Gênero: ${person.gender}</p>
        <p class="text-person">Idade: ${person.age}</p>
        <p class="text-person">Espécie: ${person.specie}</p>
    </div>
    `
});