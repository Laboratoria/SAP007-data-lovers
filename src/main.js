import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

function showResults(event){
    event.preventDefault();

    for(let i = 0; i < data.pokemon.length; i++){
       let allDatas = data.pokemon[i];
       
       allDatas.num
       allDatas.name
       allDatas.type
       allDatas.weaknesses
       allDatas.img
    }   
}   

document.getElementById("confirm-button").addEventListener("click",showResults);


    


