import { example } from './data.js';

import data from '../data/ghibli/ghibli.js';


console.log(example, data);

// Aqui começa o Slide //
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Troque a imagem a cada 5 segundos
}
// Aqui termina o Slide // 