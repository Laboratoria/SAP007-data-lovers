import { filterCharacter, pegaTitulo } from './data.js';

import data from './data/ghibli/ghibli.js';

//funcao manda pra filtro de personagens os dados; recebe array com os personagens
function getCharacter(){                                                    //manda dados pro filtro
    return filterCharacter(data);
}

//pega e salva o elemento com o id da lista na variavel cardPeople
let cardPeolple = document.getElementById("cardPeople");                                // pega id da lista de personagens

//salva o array de personagens q veio do filtro
let characters = getCharacter();                                                        // pega resultado(array de personagens) do filtro
let li;                                                                                  // var de item da lista   
let filmes = pegaTitulo(data);
console.log(filmes);
const filtroFilme = document.getElementById("selecioneFilme");
let opcao;

filmes.forEach(function(titulo){
    opcao = document.createElement("option");
    opcao.setAttribute("id", titulo);
    opcao.setAttribute("value", titulo);
    opcao.textContent = titulo;
    filtroFilme.appendChild(opcao);
});


//percorre cada personagem do array 
characters.forEach(function(character){                                                     // percorre o array de todos os personagens

    //cria um item da lista
    li = document.createElement("li");                                                                              // cria item da lista

    //preenche cada item da lista com o conteudo 
    li.appendChild(document.createTextNode("Nome: "+ character["name"]+ ". " + "Idade: " + character["age"]));          // preenche item criado com nome e idade
    li.appendChild(document.createTextNode(". Gênero: " + character["gender"] + ". Espécie: " + character["specie"]));      // poe no item genero e especie
    li.appendChild(document.createTextNode(". Filme: " + character["title"]));                                                 // poe o titulo 

    //chama funcao da img; passa parametros e manda img pro item
    li.appendChild(displayImage(character["img"], character["name"]));                                                          //chama a funca da imagem e passa os parametos e passa pro item 
    
    //manda pra lista o item q foi criado e preenchido com os dados
    cardPeolple.appendChild(li);                                                                                                // passa o item criado e preenchido pra lista
});

//funcao pra pegar a fonte e a descricao da imagem
function displayImage(src, alt) {                                                        //pega os parametos da imagem, fonte e alt
    let picture = document.createElement("img");                                                            // cria elemento de img        
    picture.src = src;
    picture.style.width= "250px";
    picture.style.height = "250px";
    picture.alt = alt;
    return picture;
}


//page js pra personagens