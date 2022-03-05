// import dataGhibli from "../data/ghibli/ghibli.js";
// import { renderScreen } from "../js/pages/movies.js";
// import { makeCharacterCards } from "../js/pages/characters.js";

// console.log(dataGhibli);

//MoviesPage

export const filterMovies = (searchString, dataGhibli) => {
  const data = dataGhibli.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchString) ||
      movie.producer.toLowerCase().includes(searchString) ||
      movie.director.toLowerCase().includes(searchString)
    );
  });

  console.log(data, "seen");
  return data;
};

function strtoNumber(film) {
  return Number(film.rt_score);
}

export const sortMovies = (data, order) => {
  if (order == "A-Z") {
    return data.sort((a, z) => (a.title > z.title ? 1 : -1));
  }
  if (order == "Z-A") {
    return data.sort((a, z) => (a.title > z.title ? -1 : 1));
  }
  if (order == "Highest-Score") {
    return data.sort((a, z) => (strtoNumber(a) > strtoNumber(z) ? -1 : 1));
  }
  if (order == "Lowest-Score") {
    return data.sort((a, z) => (strtoNumber(a) > strtoNumber(z) ? 1 : -1));
  }
  if (order == "Oldest") {
    return data.sort((a, z) => (a.release_date > z.release_date ? 1 : -1));
  }
  if (order == "Newest") {
    return data.sort((a, z) => (a.release_date > z.release_date ? -1 : 1));
  }
};

//CharactersPage

export const filterCharacters = (searchTitle, films) => {
  const filteredfilms = films.filter((film) => {
    // console.log(film.title.toLowerCase().includes(searchTitle), "//////");
    return film.title.toLowerCase().includes(searchTitle);
  });
  const characters = getCharacters(filteredfilms);
  // console.log(data, "characters");
  console.log(characters, "characters");
  return characters;
  // makeCharacterCards(data);
};

export function getCharacters(films) {
  const charactersAll = films.map((film) => {
    return film.people;
  });

  const people = charactersAll.flat();
  return people;
}
