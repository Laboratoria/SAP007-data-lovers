/* global Chart */
import data from './data/rickandmorty/rickandmorty.js';
import { filtrarPorChaveEValor } from './data.js';

const dados = data.results


//Status
const vivo = filtrarPorChaveEValor (dados, "status", "Alive")
const morto = filtrarPorChaveEValor (dados, "status",  "Dead")
const desconhecido = filtrarPorChaveEValor (dados, "status", "unknown")

//Genero
const masculino = filtrarPorChaveEValor (dados, "gender", "Male")
const feminino = filtrarPorChaveEValor (dados, "gender", "Female")
const indefinido = filtrarPorChaveEValor (dados, "gender", "unknown")

//Especie
const alien = dados.filter(resultado => resultado.species === "Alien")
const animal = dados.filter(resultado => resultado.species === "Animal")
const cronenberg = dados.filter(resultado => resultado.species === "Cronenberg")
const doença = dados.filter(resultado => resultado.species === "Disease")
const humano = dados.filter(resultado => resultado.species === "Human")
const humanóide = dados.filter(resultado => resultado.species === "Humanoid")
const mytholog = dados.filter(resultado => resultado.species === "Mytholog")
const parasita = dados.filter(resultado => resultado.species === "Parasite")
const poopybutthole = dados.filter(resultado => resultado.species === "Poopybutthole")
const robo = dados.filter(resultado => resultado.species === "Robot")
const vampiro = dados.filter(resultado => resultado.species === "Vampire")
const unknown = dados.filter(resultado => resultado.species === "unknown")

const graficoStatus = document.getElementById('graficoStatus')
const graficoGenero = document.getElementById('graficoGenero')
const graficoEspecie = document.getElementById('graficoEspecie')

new Chart(graficoStatus, {  type: 'pie',
  data: {
    labels: ['Vivo', 'Morto', 'Desconhecido'],
    datasets: [{
      label: 'Status', //TITULO GRAFICO
      data: [vivo.length, morto.length, desconhecido.length],
      backgroundColor: [
        'rgb(19, 176, 201)',
        'rgb(104, 44, 70)',
        'rgb(255, 206, 86)',
      ],
    }]
  },
  options: {
    title: {
      display: true,
      text: "STATUS"
    }
  }
});

new Chart(graficoGenero, {

  type: 'pie',
  data: {
      labels: ['Masculino', 'Feminino', 'Indefinido'],
      datasets: [{
          label: 'Status', //TITULO GRAFICO
          data: [masculino.length, feminino.length, indefinido.length],
          backgroundColor: [
              'rgb(81, 91, 38)',
              'rgb(215, 109, 85)',
              'rgb(255, 206, 86)',
          ],
      }]
  },

  options: {
      title: {
          display: true,
          text: "GÊNERO"
      }
  }

});

new Chart(graficoEspecie, {

  type: 'pie',
  data: {
      labels: ['Alien', 'Animal', 'Cronenberg', 'Doença', 'Humano', 'Humanóide', 'Mytholog', 'Parasita', 'Poopybutthole', 'Robô', 'Vampiro', 'unknown'],
      datasets: [{
          label: 'Status', //TITULO GRAFICO
          data: [alien.length, animal.length, cronenberg.length, doença.length, humano.length, humanóide.length, mytholog.length, parasita.length, poopybutthole.length, robo.length, vampiro.length, unknown.length],
          backgroundColor: [
              'rgb(26, 98, 60)',
              'rgb(224, 73, 124)',
              'rgb(212, 140, 84)',
              'rgb(114, 67, 45)',
              'rgb(68, 71, 161)',
              'rgb(104, 44, 70)',
              'rgb(67, 72, 163)',
              'rgb(54, 162, 235)',
              'rgb(188, 243, 238)',
              'rgb(165, 187,105)',
              'rgb(54, 162, 235)',
              'rgb(221, 114, 93)',
          ],
      }]
  },

  options: {
      title: {
          display: true,
          text: "ESPÉCIE"
      }
  }

});