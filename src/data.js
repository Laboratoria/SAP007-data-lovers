

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};


export const porcMoviesDirector = (filmes) => {
  const total = filmes.films.reduce((acc, film) => {
    const directors = film.director;
    const totalDirector = filmesDiretores(directors).length;

    console.log(directors, totalDirector)

    return {
      total: acc.total + directors.length,
      directors: acc.directors + totalDirector,
    }
  }, { total: 0, directors: 0 });

  return (total.directors / total.total * 100).toFixed(2);
}

export const moviesByScore = (data, selectedRate) => {
  const moviesScores = data.films
  if (selectedRate === "lower") {
    return moviesScores.sort((a, b) => Number(a.rt_score) > Number(b.rt_score) ? 1 : -1);
  } else {
    return moviesScores.sort((a, b) => Number(a.rt_score) > Number(b.rt_score) ? -1 : 1);
  }
};


/* Ordenar de A-Z "pronto"
export const sortMoviesByTitle = (title) => {
  return title.sort((a, b) => {

    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    if (titleA > titleB) {
      return 1;
    }
    if (titleA < titleB) {
      return -1
    }
    return 0
  });
};*/

export const sortMoviesByyear = (data, orderSelect) => {
  const moviesByyear = data.films

  if (orderSelect === "oldest") {
    return moviesByyear.sort((a, b) => Number(a.release_date) > Number(b.release_date) ? 1 : -1);
  }

  else {
    return moviesByyear.sort((a, b) => Number(a.release_date) > Number(b.release_date) ? -1 : 1);

  };

};
