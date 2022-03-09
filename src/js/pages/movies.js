import data from "../../data/ghibli/ghibli.js";
import { filterMovies, sortMovies } from "../data.js";
import { menu } from "../components/header.js";

menu();

document.getElementById("form").reset();

const moviesList = data.films;

function makeMovieCards(movies) {
  document.getElementById("movieCards").innerHTML = movies
    .map(
      (item) =>
        `
      <div class="cardsMoviesContainer">
        <picture class="posterMovie">
          <img src="${item.poster}" alt="" class="poster" />
        </picture>
        <div class="infoContainer">
          <div class="mainInfoAndRating">
            <div class="mainIfoContainer">
              <h3>${item.title}</h3>
              <h4>${item.release_date}</h4>

            </div>

            <div class="ratingContainer">
              <img src="../../assets/icon/star.svg" alt="star" class="star"/>
              <p>${item.rt_score}</p>
            </div>

          </div>
          <div class="directorProducer">
            <p>Directed by: ${item.director}</p>
            <p>Produced by: ${item.producer}</p>
           </div>
          <div class="synopsisContainer">
            <p>Synopsis: ${item.description}</p>
          </div>
        </div>
      </div>
        `
    )
    .join("");
}

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  console.log(searchString);
  const filteredMovies = filterMovies(searchString, moviesList);
  makeMovieCards(filteredMovies);
});

const inputSelect = document.getElementById("inputSelect");

inputSelect.addEventListener("change", (e) => {
  const selectedOrder = e.target.value;
  const sortedMovies = sortMovies(moviesList, selectedOrder);
  makeMovieCards(sortedMovies);
});

makeMovieCards(moviesList);
