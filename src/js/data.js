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

export const sortMovies = (data, order) => {
  if (order == "A-Z") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else if (order == "Z-A") {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
  } else if (order == "Highest-Score") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else if (order == "Lowest-Score") {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
  } else if (order == "Newest") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else if (order == "Oldest") {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
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
