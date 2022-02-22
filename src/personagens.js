import { filterCharacter, pegaTitulo } from './data.js';

import data from './data/ghibli/ghibli.js';

//funcao manda pra filtro de personagens os dados; recebe array com os personagens

const filmes = pegaTitulo(data);
console.log(filmes);

//salva o array de personagens q veio do filtro                                                        



const filtroFilme = document.getElementById("selecioneFilme");
const filtroGenero = document.getElementById("selecioneGenero");

let filtroGeral = function(){
    let tituloEscolhido = filtroFilme.value;
    let generoEscolhido = filtroGenero.value;
    console.log(tituloEscolhido)
    exibePersonagens(tituloEscolhido, generoEscolhido);
}

filtroGeral()

filtroFilme.addEventListener("change", filtroGeral)

filtroGenero.addEventListener("change", filtroGeral)

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
    let liPersonagens;  
    let characters = getCharacter(tituloEscolhido, generoEscolhido);
    let divImagem;
    let divInfo;


    cardPeolple.innerHTML = "";
    //percorre cada personagem do array 
    if (characters.length == 0){
        cardPeolple.innerHTML = "Sem resultados. Tente outros filtros."
    }
    characters.forEach(function(character){                                                     
        //cria um item da lista
        liPersonagens = document.createElement("li"); 
        divImagem = document.createElement("div");
        divInfo = document.createElement("div");                                                                            

        //preenche cada item da lista com o conteudo 
        //li.setAttribute(class = "personagem"// "class", nomeclasse)
        //divInfo.appendChild(document.createTextNode("Nome: "+ character["name"]+ ". " + "Idade: " + character["age"]));
        
        divInfo.appendChild(textoPersonagem("Nome: "+ character["name"]));
        divInfo.appendChild(textoPersonagem("Idade: " + character["age"]));        
        divInfo.appendChild(textoPersonagem("Gênero: " + character["gender"])); 
        divInfo.appendChild(textoPersonagem("Espécie: " + character["specie"]));     
        divInfo.appendChild(textoPersonagem("Filme: " + character["title"]));                                                 

        //chama funcao da img; passa parametros e manda img pro item
        divImagem.appendChild(displayImage(character["img"], character["name"]));                                                          
        
        divImagem.className = "imagemPersonagem";
        divInfo.setAttribute("class", "info-personagem info");
        liPersonagens.setAttribute("class", "li-personagem borda")

        liPersonagens.appendChild(divImagem);
        liPersonagens.appendChild(divInfo);

        //manda pra lista o item q foi criado e preenchido com os dados
        cardPeolple.appendChild(liPersonagens);                                                                                                
    });
}

function textoPersonagem(texto) {
    let personagemInfo = document.createElement("p");
    personagemInfo.textContent = texto;

    return personagemInfo;
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
