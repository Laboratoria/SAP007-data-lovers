import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


//Um objeto é um conjunto de pares “chave: valor”, dentro de chaves {  }

console.log(data.info["count"]);
console.log(data.info["pages"]);
console.log(data.info["next"]);
console.log(data.info["prev"]);

console.log(data.results[0]);


document.getElementById("teste").innerHTML = data.info["next"] 




// const x = Object.values(data.info);
// document.getElementById("teste").innerHTML = x;



//document.getElementById("mobile-menu").addEventListener("click", navbar); 



// console.log(data.info["next"]); // IMPRIME NO CONSOLE 


//document.getElementById("teste").innerHTML = data.results["id"]   // CHAMA A FUNÇÃO em data.js