import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

function showResults(event){
    event.preventDefault();

    for(let i = 0; i < data.pokemon.length; i++){
       let allDatas = data.pokemon[i];
       let onlyNecessaryInfos = allDatas.num + allDatas.name + allDatas.type + allDatas.weaknesses + allDatas.img;
       let pokemonCard = document.createElement("div");
       pokemonCard.innerText = onlyNecessaryInfos;
       document.body.appendChild(pokemonCard);
       pokemonCard.classList.add(".style-para-o-elemento-recem-criado");
       console.log(typeof(onlyNecessaryInfos));
    }   
}   

document.getElementById("confirm-button").addEventListener("click",showResults);


    /*const pokemonNumber = allDatas.num;
    console.log(pokemonNumber);
    const pokemonName = allDatas.name;
    console.log(pokemonName);
    const pokemonType = allDatas.type;
    console.log(pokemonType);
    const pokemonWeaknesses = allDatas.weaknesses;
    console.log(pokemonWeaknesses);*/


