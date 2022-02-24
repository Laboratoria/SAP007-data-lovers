import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

const buttonAbout = document.querySelector("#about");
const main = document.querySelector('.main')
const pageAbout = document.querySelector('#pageAbout')

buttonAbout.addEventListener('click',() => {
  main.classList.add("hidden")
  pageAbout.classList.remove("hidden")
})

console.log(example, data);
