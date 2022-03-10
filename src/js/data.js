//MoviesPage

export const filterMovies = (searchString, dataGhibli) => {
  const search = searchString.toLowerCase();
  const data = dataGhibli.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search) ||
      movie.producer.toLowerCase().includes(search) ||
      movie.director.toLowerCase().includes(search)
    );
  });

  return data;
};

export const sortMovies = (data, order) => {
  const copy = [...data];
  if (order == "A-Z") {
    return copy.sort((a, z) => (a.title > z.title ? 1 : -1));
  }
  if (order == "Z-A") {
    return copy.sort((a, z) => (a.title > z.title ? -1 : 1));
  }
  if (order == "Highest-Score") {
    return copy.sort((a, z) =>
      Number(a.rt_score) > Number(z.rt_score) ? -1 : 1
    );
  }
  if (order == "Lowest-Score") {
    return copy.sort((a, z) =>
      Number(a.rt_score) > Number(z.rt_score) ? 1 : -1
    );
  }
  if (order == "Oldest") {
    return copy.sort((a, z) =>
      Number(a.release_date) > Number(z.release_date) ? 1 : -1
    );
  } else {
    return copy.sort((a, z) =>
      Number(a.release_date) > Number(z.release_date) ? -1 : 1
    );
  }
};

//CharactersPage

export const filterCharacters = (searchTitle, films) => {
  const search = searchTitle.toLowerCase();
  const filteredfilms = films.filter((film) => {
    return film.title.toLowerCase().includes(search);
  });
  const characters = getCharacters(filteredfilms);

  return characters;
};

export function getCharacters(films) {
  const copy = [...films];
  const charactersAll = copy.map((film) => {
    return film.people;
  });

  const people = charactersAll.flat();
  return people;
}

export const alphabeticalSort = (data, order) => {
  const copy = [...data];
  if (order == "A-Z") {
    return copy.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return copy.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const filterByGender = (data, item) => {
  const copy = [...data];
  const filteredByGender = copy.filter((film) => film.gender === item);
  return filteredByGender;
};
