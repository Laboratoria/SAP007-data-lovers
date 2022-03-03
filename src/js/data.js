// import dataGhibli from "../data/ghibli/ghibli.js";
// import { renderScreen } from "../js/pages/movies.js";
// import { makeCharacterCards } from "../js/pages/characters.js";

// console.log(dataGhibli);

export const sortArray = {
  filterArray(inputValue, dataGhibli) {
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

    // renderScreen(dataGhibli);
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

export const filterMovies = (searchString, dataGhibli) => {
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
  return data;
};

export const filterCharacters = (searchTitle, films) => {
  const filteredfilms = films.filter((film) => {
    console.log(film.title.toLowerCase().includes(searchTitle), "//////");
    return film.title.toLowerCase().includes(searchTitle);
  });
  const characters = getCharacters(filteredfilms);
  // console.log(data, "characters");
  console.log(characters, "characters");
  return characters;
  // makeCharacterCards(data);
};

export function getCharacters(films) {
  const charactersAll = films.map((film) => {
    return film.people;
  });

  const people = charactersAll.flat();
  return people;
}

// export const sortNamesFilter = (data, order) => {
//   if (order == "alphabetic") {
//     console.log("A-Z")
//     return data.sort((a, z) => a.name > z.name ? 1 : -1);
//   } else {
//     console.log("Z-A")
//     return data.sort((a, z) => a.name > z.name ? -1 : 1);
//   }
// };
