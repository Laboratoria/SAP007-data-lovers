import { example } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

const imagens = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;
function carrosel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imagens.style.transform = `translatex(${-idx * 500}px)`;
}
setInterval(carrosel, 4000);

console.log(example, data);
