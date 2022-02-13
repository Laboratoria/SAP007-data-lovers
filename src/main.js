import { example } from "./data.js";

import data from "./data/ghibli/ghibli.js";

console.log(example, data);

let toggleButton = document.getElementById("toggleButton");
let navList = document.getElementById("navList");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
