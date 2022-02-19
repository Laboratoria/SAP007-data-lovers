//funcao filtar filmes e retorna dados dos filmes
export const filterData = (data, opcaoEscolhida ) => {                                          
    
    //cria array pra guardar os filmes
    let movies = [];                                                            
    
    //acessa dados, entra em filmes, percorre cada um
    data["films"].forEach(movie => {      


        //manda pro array de movies o conteudo dos filmes
       movies.push(                                                                 
           {            
            //if (opcaoEscolhida ===  movie["director"] ||
             //movie["producer"])   
            
               //propriedade q vai usar no main: parameto[valor nome = do data]                                                             
               "title": movie["title"],                                             
               "poster": movie["poster"],
               "year": movie["release_date"],
               "score": movie["rt_score"],
               "director": movie["director"],
               "producer": movie["producer"],
            }
        );

    });
    
    return movies;
};

export const pegaTitulo = (data) => {
    let titulo = [];
    data["films"].forEach((nome) => {
        titulo.push(
            nome["title"])
    });
    return titulo;
};

export const pegaDiretores = (data) => {
    let diretores = [];
    data["films"].forEach((filme) =>{
        
        if (diretores.indexOf(filme["director"]) == -1){
            diretores.push(
                filme["director"]
            );
        }
    });
    return diretores;
}

export const pegaProdutores = (data) => {
    let produtores = [];
    data["films"].forEach((produtor) =>{
        
        if (produtores.indexOf(produtor["producer"]) == -1){
            produtores.push(
                produtor["producer"]
            );
        }
    });
    return produtores;
}


//funcao que filtra e retorna dados de personagens
export const filterCharacter = (data) =>{                                   

    //cria array pra guardar personagens
    let people = [];                                                          

    //dentro dos dados; entra em filmes e percorre cada um
    data["films"].forEach(function(film) {                                                   
       // console.log(filme["title"]);       
       
       //dentro de filmes; entra em pessoas e percorre cada um 
        film["people"].forEach(function(person){                                               
           // console.log(people["name"]);

           //manda pro array de people o conteudo de pessoas
            people.push(                                                            
                {

                    //propriedade q vai usar no personagens js: parametro[valor da propridade, nome igual o q esta no data]
                    "name": person["name"],
                    "age": person["age"],                                               
                    "gender": person["gender"],
                    "specie": person["specie"],
                    "title": film["title"],
                    "img": person["img"], 
                }
            );
        })
    });
    return people;
}

/*export const ordenar = (data, condicao) => {

    let ordenaTituloAZ = [data["title"]]

   let teste = ordenaTituloAZ.sort((a,b) =>{
       return a.title.localeCompare(b.title);
       
   });
   
console.log(teste);
    
    
export function ordenar = (data) => {
 const ordenarAnoAsc = (a,b)




//sortData(data, sortBy, sortOrder)
//computeStats(data)

/*export const ordenar = (data) => {

    let ordenaTituloAZ = [data["title"]]

    ordenaTituloAZ.sort(function(a, b){
        let ta = a.title,
            tb = b.title;

        if (ta < tb) {
            return -1;
        }
        if (ta > tb) {
            return 1;
        }
        return 
        

    })
    ordenaTituloAZ.push
    console.log(ordenaTituloAZ)
};*/
