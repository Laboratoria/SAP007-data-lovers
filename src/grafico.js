import data from './data/rickandmorty/rickandmorty.js'; 

const dados = data.results

const vivo = dados.filter(resultado => resultado.status === "Alive");
const morto = dados.filter(resultado => resultado.status === "Dead");
const desconhecido = dados.filter(resultado => resultado.status === "unknown");


const ctx = document.getElementById('myChart').getContext('2d')

new Chart(ctx, {
  
  type: 'pie',
  data: {
      labels: ['Vivo', 'Morto', 'Desconhecido'],
      datasets: [{
          label: 'Status', //TITULO GRAFICO
          data: [vivo, morto, desconhecido],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
          ],
          hoverOffset: 4
      }]
  },

});
