
// import { } from './data.js';
// import data from './data/ghibli/ghibli.js'

// const filmes = data.filmes

// const titulosFilmes = films.map(film => film.title)
// const avaliacaoFilmes = films.map(film => film["rt_score"])


// new Chart(chartAvaliacao, {
//     type: 'bar',
//     data: {
//       labels: titulosFilmes,
//       datasets: [{
//         label: "Notas Por Filme",
//         data: avaliacaoFilmes,
//         backgroundColor: "rgb(100, 145, 60, 0.5)",
//         fill: true
//       }]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           min: 40
//         }
//       },
//       plugins: {
//         legend: {
//           labels: {
//             font: {
//               size: 14
//             }
//           }
//         }
//       },
//     }
  
//   })
  


// const notaDeAvaliacao = (dataFilmes) => {
//     let avaliacaoFilmes = []
//     for (let filme of dataFilmes) {
//       let numeroDeAvaliacao = parseInt(filme["rt_score"])
//       avaliacaoFilmes.push(numeroDeAvaliacao)
  
//     }
//     const printNumeroDeAvaliacao = document.getElementById("dadosDeAvaliacao")
//     printNumeroDeAvaliacao.innerHTML =
//       `<div class="">
//               <div class="">
//                   <p>A média de notas dos filmes é <strong class="data">${(avaliacaoFilmes)}</strong></p>
//               </div>
//           </div>`
//   }
//   notaDeAvaliacao(filmes)