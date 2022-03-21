

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};

export const moviesByScore = (data, selectedRate) => {
const moviesScores = data.films
  if (selectedRate === "crescente"){
    return moviesScores.sort((a, b) => a.rt_score > b.rt_score ? 1 : -1);
  } else {
    return moviesScores.sort((a, b) => a.rt_score > b.rt_score ? -1 : 1);
  }
};


/*export const moviesByScore = (movies) => {
  return movies.films.sort((a, b) => {

    const scoreA = a.rt_score
    const scoreB = b.rt_score

    if (scoreA > scoreB) {
      return 1
    }
    if (scoreA < scoreB) {

      return -1
    }
    return 0
  })
}*/


/*export const moviesByMinScore = (movies) => {
  return movies.films.sort((b, a) => {

    const scoreA = a.rt_score
    const scoreB = b.rt_score

    if (scoreA < scoreB) {
      return 1
    }
    if (scoreA > scoreB) {
      return -1
    }
    return 0
  })
}*/

/*directorsSelect.addEventListener("change", (event) => {

  const filterMoviesByDirectors = data.films.filter((directorName) => {
    return directorName.director === event.target.value
  })

  console.log(filterMoviesByDirectors)
})



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





