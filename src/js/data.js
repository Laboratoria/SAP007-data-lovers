import dataGhibli from "../data/ghibli/ghibli.js";
import { renderScreen } from "../js/pages/movies.js";
console.log(dataGhibli);

export const sortArray = {
  filterArray(inputValue) {
    let selectValueDropDown = inputValue;

    dataGhibli.films.sort((a, b) => {
      let titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase(),
        ratingA = parseInt(a.rt_score),
        ratingB = parseInt(b.rt_score),
        DataA = parseInt(a.release_date),
        DataB = parseInt(b.release_date);

      if (selectValueDropDown == "A-Z") {
        return sortArray.ordenar(titleA, titleB);
      }
      if (selectValueDropDown == "Z-A") {
        return sortArray.ordenarInvers(titleA, titleB);
      }
      if (selectValueDropDown == "highestScore") {
        return sortArray.ordenarInvers(ratingA, ratingB);
      }
      if (selectValueDropDown == "lowestScore") {
        return sortArray.ordenar(ratingA, ratingB);
      }
      if (selectValueDropDown == "Newest") {
        return sortArray.ordenarInvers(DataA, DataB);
      }
      if (selectValueDropDown == "Oldest") {
        return sortArray.ordenar(DataA, DataB);
      }
    });

    renderScreen(dataGhibli);
  },
  ordenar(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  },
  ordenarInvers(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  },
};

export const searchMovies = {
  filterMovies(e, dataGhibli) {
    const searchString = e.target.value.toLowerCase();
    const data = {
      films: dataGhibli.films.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(searchString) ||
          movie.producer.toLowerCase().includes(searchString) ||
          movie.director.toLowerCase().includes(searchString)
        );
      }),
    };
    console.log(data, "seen");
    renderScreen(data);
  },
};
