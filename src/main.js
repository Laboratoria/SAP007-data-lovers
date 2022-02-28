import { filterData, pegaDiretores, pegaProdutores, calculo } from './data.js';
import data from './data/ghibli/ghibli.js';

exibeFilmes([]);
const filtro = document.getElementById("selecao");
filtro.addEventListener("change", function()  {
    let valorEscolhido = filtro.value;
    valorEscolhido = valorEscolhido.split("."); //["diretor" "nome"]
    console.log(valorEscolhido)
    exibeFilmes(valorEscolhido);
})

//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies (valorEscolhido) {      
    return filterData(data, valorEscolhido );
}

let diretores = pegaDiretores(data);   
console.log(diretores)
let produtores = pegaProdutores(data);
console.log(produtores)                                                                            
const filtroDiretor = document.getElementById("diretorOptgroup");
const filtroProdutor = document.getElementById("produtorOptgroup")
//let option;

//cria filtro de diretores no html
diretores.forEach(function(diretor){
    filtroDiretor.innerHTML += `<option value= "diretor.${diretor}">${diretor}</option>`
});

//cria filtro de produtores no html
produtores.forEach(function(produtor){
    filtroProdutor.insertAdjacentHTML('beforeend',
    `<option value= "produtor.${produtor}"> ${produtor}</option>`)
});

function exibeFilmes ( valorEscolhido){
    let listaFilmes = document.getElementById("listaFilmes");  
    let items = getMovies(valorEscolhido);                                                                
    let liCard;   

    exibeContas(items);

    listaFilmes.innerHTML = "";
    //percorre cada item do array ; 
    items.forEach(function(movie){    
        //cria item na lista
        liCard = document.createElement("div");    
           
        liCard.insertAdjacentHTML("beforeend",
        `
        <section class="caixa-filmes" id=${movie.id} >  
        <figure>
            <img class="filme-img" src=${movie.poster} alt="imagens dos filmes: ${movie.title}">
         </figure>
         <div class="filme-informacoes">
            <p>Título: ${movie.title}</p>
            <p>Ano de lançamento: ${movie.release_date}</p>
            <p>Avaliação: ${movie.rt_score}</p>
            <p>Diretor: ${movie.director}</p>
            <p>Produtor: ${movie.producer}</p>
         </div>
         <div class="caixa-sinopse" >
            <p class="titulo-sinpose">Sinopse:</p> 
            <p class="texto-sinpose">${movie.description}</p>
         </div>
         </section>
         `)
        liCard.setAttribute("class", "lista-filme")
       listaFilmes.appendChild(liCard);                                                                                      
    });
    
}

// function ordenaItem(){
//     let opcao= document.getElementsByClassName("opcaoOrdem");
//     let opcao= opcao.value
//     opcao.addEventListener("click",)
// }

// function grafico (){
//     return calculo(data);
// }

// grafico();

// function exibeGrafico(){
//     let resultado = document.getElementById("resultadoCalculo");
//     let valor= grafico()
//     resultado.innerHTML= `${valor}`
// }

// exibeGrafico();


function exibeContas(items){
    let resultado = document.getElementById("resultadoCalculo");
    let valor= calculo(items)
    console.log(valor)
    resultado.innerHTML= `<p> A média da avaliação dos filmes é ${valor["mediaNotas"]}
    .</p><p> A média de idade dos personagens é ${valor["mediaIdade"]} anos.</p><p> O personagem mais novo tem ${valor["maisJovem"]} anos.</p><p> E o personagem mais velho tem ${valor["maisVelho"]} anos.</p>` 
    return resultado
}