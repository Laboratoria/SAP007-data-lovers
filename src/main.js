import { filterData, pegaDiretores, pegaProdutores } from './data.js';
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
    // option = document.createElement("option");
    // option.setAttribute("value", "diretor." +diretor);
    // option.textContent = diretor;
    // filtroDiretor.appendChild(option)
    filtroDiretor.innerHTML += `<option value= "diretor.${diretor}">${diretor}</option>`
});

//cria filtro de produtores no html
produtores.forEach(function(produtor){
    // option = document.createElement("option");
    // option.setAttribute("value","produtor." + produtor);
    // option.textContent = produtor;
    filtroProdutor.insertAdjacentHTML('beforeend',
    `<option value= "produtor.${produtor}"> ${produtor}</option>`)
    //filtroProdutor.appendChild(option)
});

function exibeFilmes ( valorEscolhido){
    let listaFilmes = document.getElementById("listaFilmes");  
    let items = getMovies(valorEscolhido);                                                                
    let liCard;   

    listaFilmes.innerHTML = "";
    //percorre cada item do array ; 
    
    //items.forEach(function(movie){    
        //cria item na lista
        liCard = document.createElement("li");    
           
        liCard.insertAdjacentHTML("beforeend",
        `${items.map(movie =>
        `<figure class="">
            <img class="poster-filme" src=${movie.poster} alt="">
         </figure>
         <div class="informacoes-filme">
            <p>Título: ${movie.title}</p>
            <p>Ano de lançamento: ${movie.release_date}</p>
            <p>Avaliação: ${movie.rt_score}</p>
            <p>Diretor: ${movie.director}</p>
            <p>Produtor: ${movie.producer}</p>
         </div>
         <div class="sinopse-filme" >
            <p class="texto-sinpose">Sinopse: ${movie.description}</p>
         </div>`)}`);
        liCard.setAttribute("class", "li-filme borda")
       listaFilmes.appendChild(liCard);                                                                                      
      //  });
}



