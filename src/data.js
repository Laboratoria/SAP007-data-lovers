

export const filmesDiretores = (filmes, directorSelect) => {
  return filmes.films.filter((directorName) => {
    return directorName.director === directorSelect
  });
};




/*directorsSelect.addEventListener("change", (event) => {

  const filterMoviesByDirectors = data.films.filter((directorName) => {
    return directorName.director === event.target.value
  })

  console.log(filterMoviesByDirectors)
})*/



 //Ordenar de A-Z "pronto"


 export const sortMoviesByyear = (movies) => {
  return movies.films.sort((a, b) => {

    const yearA = a.release_date;
    const yearB = b.release_date;

    if (yearA > yearB) {
      return 1;
    }
    if (yearA < yearB) {
      return -1
    }
  });
};





