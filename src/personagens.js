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

// let opcao;

filmes.forEach(function(titulo){
    // opcao = document.createElement("option");
    // opcao.setAttribute("id", titulo);
    // opcao.setAttribute("value", titulo);
    // opcao.textContent = titulo;
    // filtroFilme.appendChild(opcao);
    filtroFilme.insertAdjacentHTML('beforeend',
    `<option value= "${titulo}">${titulo}</option>` )
});

function exibePersonagens(tituloEscolhido, generoEscolhido){
    //pega e salva o elemento com o id da lista na variavel cardPeople
    let cardPeolple = document.getElementById("cardPersonagens");
    let liPersonagens;  
    let characters = getCharacter(tituloEscolhido, generoEscolhido);
   // let divImagem;
   // let divInfo;

    console.log(characters);
    cardPeolple.innerHTML= " ";
    //percorre cada personagem do array 
    if (characters.length == 0){
        cardPeolple.innerHTML = "Sem resultados. Tente outros filtros."
    }
    characters.forEach(function(character){  
    liPersonagens = document.createElement("div"); 
    liPersonagens.insertAdjacentHTML("beforeend",
        `
        <div class="card">
         <div class="card-interno">
             <div class="card-frente">
                 <figure>
                 <img class="card-img" src=${character.img} alt="imagem dos personagens: ${character.name} style=" height = "240px", width= "250px
                 100%"" >
                 </figure>  
                 <div class="card-nome-frente"><p>${character.name}</p></div>
             </div>
               
             <div class= "card-verso">
              <p class="card-texto-verso">Nome: ${character.name}</p>
              <p class="card-texto-verso">Idade: ${character.age}</p>
              <p class="card-texto-verso">Gênero :${character.gender}</p>
              <p class="card-texto-verso">Espécie: ${character.specie}</p>
              <p class="card-texto-verso">Filme: ${character.title}</p>
             </div>
            </div>
        </div>
        `
        )
    cardPeolple.appendChild(liPersonagens);
    });
}

    let opcaoRecarregar = document.getElementsByClassName("opcaoSelecionar");
    opcaoRecarregar.addEventListener("click", function(){
        location.reload()
    });



