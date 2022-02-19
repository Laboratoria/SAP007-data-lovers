import { filterCharacter, pegaTitulo } from './data.js';

import data from './data/ghibli/ghibli.js';

//funcao manda pra filtro de personagens os dados; recebe array com os personagens

const filmes = pegaTitulo(data);
console.log(filmes);

//salva o array de personagens q veio do filtro                                                        
exibePersonagens([],[]);  


const filtroFilme = document.getElementById("selecioneFilme");
filtroFilme.addEventListener("change", function(){
    const tituloEscolhido = filtroFilme.value;
    console.log(tituloEscolhido)
    exibePersonagens(tituloEscolhido, []);
})

const filtroGenero = document.getElementById("selecioneGenero");
filtroGenero.addEventListener("change", function(){
    const generoEscolhido = filtroGenero.value;
    console.log(generoEscolhido);
    exibePersonagens([], generoEscolhido);
})

function getCharacter(tituloEscolhido, generoEscolhido){                                                  
    return filterCharacter(data, tituloEscolhido, generoEscolhido);
}



let opcao;

filmes.forEach(function(titulo){
    opcao = document.createElement("option");
    opcao.setAttribute("id", titulo);
    opcao.setAttribute("value", titulo);
    opcao.textContent = titulo;
    filtroFilme.appendChild(opcao);
});

function exibePersonagens(tituloEscolhido, generoEscolhido){
    //pega e salva o elemento com o id da lista na variavel cardPeople
    let cardPeolple = document.getElementById("cardPeople");
    let li;  
    let characters = getCharacter(tituloEscolhido, generoEscolhido);

    cardPeolple.innerHTML = "";
    //percorre cada personagem do array 
    characters.forEach(function(character){                                                     

        //cria um item da lista
        li = document.createElement("li");                                                                             

        //preenche cada item da lista com o conteudo 
        li.appendChild(document.createTextNode("Nome: "+ character["name"]+ ". " + "Idade: " + character["age"]));          
        li.appendChild(document.createTextNode(". Gênero: " + character["gender"] + ". Espécie: " + character["specie"]));      
        li.appendChild(document.createTextNode(". Filme: " + character["title"]));                                                 

        //chama funcao da img; passa parametros e manda img pro item
        li.appendChild(displayImage(character["img"], character["name"]));                                                          
        
        //manda pra lista o item q foi criado e preenchido com os dados
        cardPeolple.appendChild(li);                                                                                                
    });
}

//funcao pra pegar a fonte e a descricao da imagem
function displayImage(src, alt) {                                                        
    let picture = document.createElement("img");                                                              
    picture.src = src;
    picture.style.width= "250px";
    picture.style.height = "250px";
    picture.alt = alt;
    return picture;
}
