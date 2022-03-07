
import { filterMoviesByDirectors } from './data.js';
 import data from './data/ghibli/ghibli.js';

const directorsSelect = document.getElementById("director");

console.log(filterMoviesByDirectors(data));

directorsSelect.addEventListener("change", (event) => {
 console.log(event.target.value)

})

console.log(directorsSelect)

console.log(data)
