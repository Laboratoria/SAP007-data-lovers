import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

//console.log(example, data);

function showResults(event){
    event.preventDefault();

    for(let i = 0; i < data.pokemon.length; i++){
       let allDatas = data.pokemon[i];
       
       <section class="show-the-cards">
      <div class="img-box">
        <img src="naosei.img" alt=""></img>
      </div>
         
      <div class="text-box">
        <p class="poke-name">Nome</p>
        <p class="poke-number">N°</p>
        <p class="poke-type">Tipo</p>
        <p class="poke-weaknesses">Fraqueza</p>
      </div>
    </section>
       
       allDatas.num
       allDatas.name
       allDatas.type
       allDatas.weaknesses
       allDatas.img
    }   
}   

document.getElementById("confirm-button").addEventListener("click",showResults);


    


