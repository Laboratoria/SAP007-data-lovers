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
let option;

//cria filtro de diretores no html
diretores.forEach(function(diretor){
    option = document.createElement("option");
    option.setAttribute("value", "diretor." +diretor);
    option.textContent = diretor;
    filtroDiretor.appendChild(option)
});

//cria filtro de produtores no html
produtores.forEach(function(produtor){
    option = document.createElement("option");
    option.setAttribute("value","produtor." + produtor);
    option.textContent = produtor;
    filtroProdutor.appendChild(option)
});

function exibeFilmes (valorEscolhido){
    let listaFilmes = document.getElementById("listaFilmes");  
    let items = getMovies(valorEscolhido);                                                                
    let liCard;   
    let divImagem;
    let divInfo;

    listaFilmes.innerHTML = "";
    //cria itens dos cards dos filmes no html
//percorre cada item do array ; 
    
    items.forEach(function(movie){    
        //cria item na lista
        liCard = document.createElement("li");    
        divImagem = document.createElement("div");
        divInfo = document.createElement("div");                                                              

        //add conteudo no item criado
        //add img no li; passa pra funcao de img os parametos de src e alt
        divImagem.appendChild(displayImage(movie["poster"],movie["title"]));    
        divInfo.appendChild(textoFilme("Título: " + movie["titulo"] + "." ));   
        divInfo.appendChild(textoFilme("Data de Lançamento: "+ movie["ano"]));                                  
        divInfo.appendChild(textoFilme(" Nota de avaliaçāo: "+ movie["avaliacao"] + "."));
        divInfo.appendChild(textoFilme(" Direçāo: " + movie["diretor"] + "."));
        divInfo.appendChild(textoFilme("Produção: " + movie["produtor"]+ "."));

        
        divImagem.setAttribute("class", "posterFilme" );
        divInfo.setAttribute("class", "infoFilme info");
        liCard.setAttribute("class", "liFilme borda");

        liCard.appendChild(divImagem);                                 
        liCard.appendChild(divInfo);
        
        //manda pra variavel da lista os itens criados
        listaFilmes.appendChild(liCard);                                                                                      

    });
}

function textoFilme(texto){
    let filmeInfo = document.createElement("p");
    filmeInfo.textContent = texto;
    return filmeInfo
}

//funca de mostrar imagem
function displayImage(src, /*width, height*/  alt) {                                                        
    let picture = document.createElement("img");                                                                    
    picture.src = src;
    //picture.style.width= "250px";
    /*picture.style.height = "250px";*/
    picture.alt = alt;
    return picture;
}

