import data from "../../data/ghibli/ghibli.js";
import { filterMovies, sortMovies } from "../data.js";
import { menu } from "../components/header.js";

menu();

const moviesList = data.films;

function makeMovieCards(movies) {
  document.getElementById("movieCards").innerHTML = movies
    .map(
      (item) =>
        `
        <div class="cardsMoviesContainer">
          <picture class="posterMovie">
            <img src="${item.poster}" alt="" class="poster"/>
          </picture>
          <div class="infoContainer">
            <h3>${item.title}</h3>
            <p>${item.release_date}</p>
            <p>Directed by: ${item.director}</p>
            <p>Produced by: ${item.producer}</p>
            <p>Sinopse: ${item.description}</p>
          </div>
          <div class="ratingContainer">
            <p>${item.rt_score}</p>
          </div>
        </div>
        `
    )
    .join("");
}

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  const filteredMovies = filterMovies(searchString, moviesList);
  makeMovieCards(filteredMovies);
});

const inputSelect = document.getElementById("inputSelect");

inputSelect.addEventListener("change", (e) => {
  const selectedOrder = e.target.value;
  const sortedMovies = sortMovies(selectedOrder, moviesList);
  makeMovieCards(sortedMovies);
});
makeMovieCards(moviesList);
