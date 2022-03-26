

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};

export const porcMoviesDirector = (movies, directorSelect) => {
  const total = Number(movies.films.length);
  const totalFiltred = Number(directorSelect.length);
  return Number(totalFiltred / total * 100)
}

export const moviesByScore = (data, selectedRate) => {
  const moviesScores = data.films
  if (selectedRate === "lower") {
    return moviesScores.sort((a, b) => Number(a.rt_score) > Number(b.rt_score) ? 1 : -1);
  } else {
    return moviesScores.sort((a, b) => Number(a.rt_score) > Number(b.rt_score) ? -1 : 1);
    }
};

export const sortMoviesByyear = (data, orderSelect) => {
  const moviesByyear = data.films
  if (orderSelect === "oldest") {
    return moviesByyear.sort((a, b) => Number(a.release_date) > Number(b.release_date) ? 1 : -1);
  }
  else {
    return moviesByyear.sort((a, b) => Number(a.release_date) > Number(b.release_date) ? -1 : 1);
  }
};

export const sortMoviesAz = (data, orderSelect) => {
  const moviesAz = data.films
  if (orderSelect === "filmsAz") {
    return moviesAz.sort((a,b) => a.title > b.title ? 1: -1);
  }
  else {
    return moviesAz.sort((a,b) => a.title > b.title ? -1: 1);
  }
};












