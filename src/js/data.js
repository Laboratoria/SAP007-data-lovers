import dataGhibli from "../data/ghibli/ghibli.js";
import { renderScreen } from "../js/pages/movies.js";
console.log(dataGhibli);

const sortArray = {
   filterArray() {
    let selectValueDropDown = document.getElementById("inputSelect").value;
    dataGhibli.films.sort((a, b) => {
      let titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase(),
        ratingA = parseInt(a.rt_score),
        ratingB = parseInt(b.rt_score),
        DataA = parseInt(a.release_date),
        DataB = parseInt(b.release_date);

      if (selectValueDropDown == "A-Z") {
        return ordenar(titleA, titleB);
      }
      if (selectValueDropDown == "Z-A") {
        return ordenarInvers(titleA, titleB);
      }
      if (selectValueDropDown == "highestScore") {
        return ordenarInvers(ratingA, ratingB);
      }
      if (selectValueDropDown == "lowestScore") {
        return ordenar(ratingA, ratingB);
      }
      if (selectValueDropDown == "maisnovo") {
        return ordenarInvers(DataA, DataB);
      }
      if (selectValueDropDown == "maisvelho") {
        return ordenar(DataA, DataB);
      }
    });
    console.log(dataGhibli);

    renderScreen(dataGhibli);
  }

  ordenar(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
   ordenarInvers(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  }
}
filterArray();
