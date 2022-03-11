import data from './data/ghibli/ghibli.js';

const directorsSelect = document.getElementById("director");

directorsSelect.addEventListener("change", (event) => {

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
  });
};*/


export const anotherExample = () => {
  return 'OMG';
};
