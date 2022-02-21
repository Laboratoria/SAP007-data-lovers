import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';



console.log(data.info["count"]);
console.log(data.info["pages"]);
console.log(data.info["next"]);
console.log(data.info["prev"]);
console.log(data.results[0].name); //Nome <<<<<<<<<<
console.log(data.results); //Devolve o Array com todas as informações
//console.log(data.results[""]);






const dados = data.results;

for (let i = 0; i < dados.length; i++) { // For percorre todos os elementos do Array
    console.log(dados[i].species);


}








// function retornaGender (value){
//     if (value.gender == "male")
//     return value;
// }
// var genderMale = nomePersonagem.filter(retornaGender);
// genderMale.forEach(malePersonagem => {
//     console.log(malePersonagem);
// })





// function genderPersonagem(gender) {
//     if (gender === "male" ){
//         return true
//     } else {
//         return false

//     }

// }





//console.log(data.results[0].gender);

// const personagem = data.results["image"]
// let mostrarPersonagem = document.getElementById("printPersonagem");
// let mostrarPersonagem2 = document.getElementById("printParagrafo");


// function mostrarCoisas() {
//     personagem.forEach(value) => {
//         if (value === personagem[0]) {
//             mostrarPersonagem.insertAdjacentHTML("afterbegin", '<img src="${value.image}" class="print">')
//             for (let personagem of value.name){
//                 mostrarPersonagem2.textContent= (personagem["gender"] + personagem["status"])
//             }

//         }
//     })

// }

//mostrarCoisas()

