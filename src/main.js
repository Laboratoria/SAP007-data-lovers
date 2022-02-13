import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';

/*const recebeData = data;                                                        //salva dados
recebeData["films"].forEach(function(filme) {                                      //entra obj film; percorre com foreach             
    console.log(filme["title"]);                                                  // dentro do obj films tras o title  propriedade  
    filme["people"].forEach(function(people){                                     // dentro do obj filme percorre e tras o obj people          
        console.log(people["name"]);                                              // dentro do obj peolple tras propriedade name          
    })
});

recebeData["films"][1]["title"];
console.log(recebeData["films"][1]["title"]);*/



//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies () {      
    //let filters = [{"text" : "poko"}];                                                       // passa dados pra filtro
    return filterData(data );
    
}
console.log(getMovies());

//pega elemento pelo id da lista e guarda no card
let card = document.getElementById("listaFilmes");                                     // pega id lista

//guarda no items o array de filmes
let items = getMovies();                                                                // guarda o array de obj(atributos) dos filmes
let li;                                                                                  // var de item de lista

//percorre cada item do array ; 
items.forEach(function(movie){                                                                      //percorre cada item 

    //cria item na lista
    li = document.createElement("li");                                                                 //cria elemento na lista 

    //add conteudo no item criado
    li.appendChild(document.createTextNode(movie["title"] + "(" + movie["year"] + "). " ));            // add no novo li com conteudo                 
    li.appendChild(document.createTextNode(" Nota de avaliaçāo: "+ movie["score"] + "."));
    li.appendChild(document.createTextNode(" Direçāo: " + movie["director"] + ". Produção: " + movie["producer"]+ "."));

    //add img no li; passa pra funcao de img os parametos de src e alt
    li.appendChild(displayImage(movie["poster"],movie["title"]));                                           //add no novo li a img, chama funcao da img e passa parametros

    //manda pra variavel da lista os itens criados
    card.appendChild(li);                                                                                   //add li criado na lista   

});


//funca de mostrar imagem
function displayImage(src/*, width, height*/, alt) {                                                        //pega os parametos da imagem, fonte e alt
    let picture = document.createElement("img");                                                            // cria elemento de img        
    picture.src = src;
    /*a.width = width;
    a.height = height;*/
    picture.alt = alt;
    return picture;
}







//const recebeTitulo = films.find(films.title);
//console.log(recebeTitulo);


/*let dados = data.films

 const recebeData = data.films.filter(title);
console.log(recebeData);

//console.log(example, data);*/
