

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

export const sortMoviesByyear = (data, orderSelect) => {
  const moviesByyear = data.films

  if (orderSelect === "Crescente")
    {
    return moviesByyear.sort((a,b) => Number(a.release_date) > Number(b.release_date) ? 1: -1); }

  else{  return moviesByyear.sort((a,b) => Number(a.release_date) > Number(b.release_date) ? -1: 1);

    };

};



/*export const sortMoviesByyear = (movies) => {
  return movies.films.sort((a, b) => {

    const yearA = Number(a.release_date);
    const yearB = Number(b.release_date);

    if (yearA < yearB) {
      return 1;
    }
    if (yearA > yearB) {
      return -1
    }
  });
};


export const yearDescending =(movies) => {
  return movies.films.sort((b, a) => {

    const yearA = Number(a.release_date);
    const yearB = Number(b.release_date);

    if (yearA > yearB) {
      return 1;
    }
    if (yearA < yearB) {
      return -1
    }
  });
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




