

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









 //Ordenar de A-Z "pronto"


/*export const ordeMovies = (movies) => {
  return movies.films.sort((a, b) => {
  console.log()
    const movieA = a.title;
    const movieB = b.title;

    if (movieA > movieB) {
      return 1;
    }
    if (movieA < movieB) {
      return -1

    }

  });
};




/*directorsSelect.addEventListener("change", (event) => {

  const filterMoviesByDirectors = data.films.filter((directorName) => {
    return directorName.director === event.target.value
  })

  console.log(filterMoviesByDirectors)
})*/




