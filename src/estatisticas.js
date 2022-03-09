import data from './data/rickandmorty/rickandmorty.js';

const dados = data.results

const vivo = dados.filter(resultado => resultado.status === "Alive");
console.log(vivo.length)
const morto = dados.filter(resultado => resultado.status === "Dead");
const desconhecido = dados.filter(resultado => resultado.status === "unknown");


const ctx = document.getElementById('myChart').getContext('2d')

new Chart(ctx, {

    type: 'pie',
    data: {
        labels: ['Vivo', 'Morto', 'Desconhecido'],
        datasets: [{
            label: 'Status', //TITULO GRAFICO
            data: [vivo.length, morto.length, desconhecido.length],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
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
