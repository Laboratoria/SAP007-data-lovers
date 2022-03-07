


export const filterMoviesByDirectors = (director) => {
  return data.films.filter((director) => {
    return director.director === target.value;
  })
}


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
  });
};*/


export const anotherExample = () => {
  return 'OMG';
};
