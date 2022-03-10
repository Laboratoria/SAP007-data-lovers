import data from './data/rickandmorty/rickandmorty.js';

const dados = data.results
//Status
const vivo = dados.filter(resultado => resultado.status === "Alive")
const morto = dados.filter(resultado => resultado.status === "Dead")
const desconhecido = dados.filter(resultado => resultado.status === "unknown")

//Genero
const masculino = dados.filter(resultado => resultado.gender === "Male")
const feminino = dados.filter(resultado => resultado.gender === "Female")
const indefinido = dados.filter(resultado => resultado.gender === "unknown")
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


const myStatus = document.getElementById('myStatus').getContext('2d')
const myGenero = document.getElementById('myGenero').getContext('2d')
const myEspecie = document.getElementById('myEspecie').getContext('2d')


new Chart(myStatus, {

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

new Chart(myGenero, {

    type: 'pie',
    data: {
        labels: ['Masculino', 'Feminino', 'Indefinido'],
        datasets: [{
            label: 'Status', //TITULO GRAFICO
            data: [masculino.length, feminino.length, indefinido.length],
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
            text: "GÊNERO"
        }
    }

});

new Chart(myEspecie, {

    type: 'pie',
    data: {
        labels: ['Alien', 'Animal', 'Cronenberg', 'Doença', 'Humano', 'Humanóide', 'Mytholog', 'Parasita', 'Poopybutthole', 'Robô', 'Vampiro', 'unknown'],
        datasets: [{
            label: 'Status', //TITULO GRAFICO
            data: [alien.length, animal.length, cronenberg.length, doença.length, humano.length, humanóide.length, mytholog.length, parasita.length, poopybutthole.length, robo.length, vampiro.length, unknown.length],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
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

