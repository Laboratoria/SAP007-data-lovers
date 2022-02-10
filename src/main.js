import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

const recebeData = data;                                                        //salva dados
recebeData["films"].forEach(function(filme) {                                      //entra obj film; percorre com foreach             
    console.log(filme["title"]);                                                  // dentro do obj films tras o title  propriedade  
    filme["people"].forEach(function(people){                                     // dentro do obj filme percorre e tras o obj people          
        console.log(people["name"]);                                              // dentro do obj peolple tras propriedade name          
    })
});


recebeData["films"][1]["title"];
console.log(recebeData["films"][1]["title"]);




//const recebeTitulo = films.find(films.title);
//console.log(recebeTitulo);


/*let dados = data.films

 const recebeData = data.films.filter(title);
console.log(recebeData);

//console.log(example, data);*/
