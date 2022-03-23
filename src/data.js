

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};

export const sortMoviesByyear = (data, orderSelect) => {
  const moviesByyear = data.films

  if (orderSelect === "Crescente") {
   return moviesByyear.sort((a,b) => Number(a.release_date) > Number(b.release_date) ? 1: -1);

  } //operador de condiçao

  else {

    return moviesByyear.sort((a,b) => Number(a.release_date) > Number(b.release_date) ? -1: 1);

  };

};


export const sortMoviesAz = (data, orderSelect) => {
  const moviesAz = data.films

  if (orderSelect === "filmsAz") {

    return moviesAz.sort((a,b) => a.title > b.title ? 1: -1);
  }
  else {

    return moviesAz.sort((a,b) => a.title > b.title ? -1: 1);

  };

};












