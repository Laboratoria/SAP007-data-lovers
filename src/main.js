import { filterData } from './data.js';
import data from './data/ghibli/ghibli.js';


const filtro = document.getElementById("selecionaFiltro");
filtro.addEventListener("change", function()  {
    const valor = filtro.value;
    console.log(valor)
})

 function escolha (opcao){
    let escolhido = []
     switch(opcao){
         case "Diretor": document.getElementById("diretor");
         escolhido.push
         break;
         case "Produtor": document.getElementById("produtor");
         escolhido.push
         break;
     }
     //escolhido = document.forms[0].selecionaFiltro.value;
     //return escolhido;
     console.log(escolhido)
 }
 

//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies () {      
    //let filters = [{"text" : "poko"}];                                                       // passa dados pra filtro
    /*let filtro = document.getElementsByClassName("opcao").value;
    if (filtro === "Diretor"){
        return filtro = [{director: "Hayao Miyazaki" || "Isao Takahata" || "Yoshifumi Kondō" || "Hiroyuki Morita" || "Gorō Miyazaki"|| "Hiromasa Yonebayashi" || " "}]
    }*/
   
    return filterData(data, escolha );
    
}
console.log(getMovies());


let card = document.getElementById("listaFilmes");
let items = getMovies(); 
let li;                                                                                


items.forEach(function(movie){ 
    li = document.createElement("li");
    li.appendChild(document.createTextNode(movie["title"] + "(" + movie["year"] + "). " ));                 
    li.appendChild(document.createTextNode(" Nota de avaliaçāo: "+ movie["score"] + "."));
    li.appendChild(document.createTextNode(" Direçāo: " + movie["director"] + ". Produção: " + movie["producer"]+ "."));
    li.appendChild(displayImage(movie["poster"],movie["title"]));                                  
    card.appendChild(li);         

});


//funca de mostrar imagem
function displayImage(src, /*width, height*/  alt) {                                                
    let picture = document.createElement("img");                                               
    picture.src = src;
    //picture.style.width= "250px";
    /*picture.style.height = "250px";*/
    picture.alt = alt;
    return picture;
}