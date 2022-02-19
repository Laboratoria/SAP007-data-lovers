import { filterData, pegaDiretores, pegaProdutores } from './data.js';
import data from './data/ghibli/ghibli.js';

exibeFilmes([]);
const filtro = document.getElementById("selecao");
filtro.addEventListener("change", function()  {
    let valorEscolhido = filtro.value;
    valorEscolhido = valorEscolhido.split(".");
    console.log(valorEscolhido)
    exibeFilmes(valorEscolhido);
})



//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies (valorEscolhido) {      
   
    return filterData(data, valorEscolhido );
    
}


//pega elemento pelo id da lista e guarda no card
                                   

//guarda no items o array de filmes

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
    option.setAttribute("id", diretor);
    option.setAttribute("value", "diretor." +diretor);
    option.textContent = diretor;
    filtroDiretor.appendChild(option)
});

//cria filtro de produtores no html
produtores.forEach(function(produtor){
    option = document.createElement("option");
    option.setAttribute("id", produtor);
    option.setAttribute("value","produtor." + produtor);
    option.textContent = produtor;
    filtroProdutor.appendChild(option)
});



function exibeFilmes (valorEscolhido){
    let card = document.getElementById("listaFilmes");  
    let items = getMovies(valorEscolhido);                                                                
    let li;   

    card.innerHTML = "";
    //cria itens dos cards dos filmes no html
//percorre cada item do array ; 
    items.forEach(function(movie){       

        //cria item na lista
        li = document.createElement("li");                                                                  

        //add conteudo no item criado
        li.appendChild(document.createTextNode(movie["title"] + "(" + movie["year"] + "). " ));                             
        li.appendChild(document.createTextNode(" Nota de avaliaçāo: "+ movie["score"] + "."));
        li.appendChild(document.createTextNode(" Direçāo: " + movie["director"] + ". Produção: " + movie["producer"]+ "."));

        //add img no li; passa pra funcao de img os parametos de src e alt
        li.appendChild(displayImage(movie["poster"],movie["title"]));                                           

        //manda pra variavel da lista os itens criados
        card.appendChild(li);                                                                                      

    });
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

