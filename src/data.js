

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};

export const moviesByScore = (data, selectedRate) => {
const moviesScores = data.films
  if (selectedRate === "crescent"){
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





