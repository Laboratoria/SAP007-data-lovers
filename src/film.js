import data from './data/ghibli/ghibli.js';

// função find
const numMovie = window.location.search.replace("?id=", "");
const anime = data.films.find((buscaFilme) => {
	return buscaFilme.id === numMovie
});

document.getElementById("titulo").innerHTML = anime.title;
document.getElementById("poster").src = anime.poster;
document.getElementById("sinopse").innerHTML = anime.description;
document.getElementById("diretor").innerHTML = anime.director;
document.getElementById("produtor").innerHTML = anime.producer;
document.getElementById("ano").innerHTML = anime.release_date;
document.getElementById("nota").innerHTML = anime.rt_score;