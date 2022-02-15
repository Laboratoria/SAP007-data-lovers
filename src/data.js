/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

//funcao filtar filmes e retorna dados dos filmes
export const filterData = (data ) => {                                          //exporta a funcao; recebe os dados

    //cria array pra guardar os filmes
    let movies = [];                                                            //cria array pra filmes
    
    //acessa dados, entra em filmes, percorre cada um
    data["films"].forEach(movie => {                                            //acessa os filmes dos dados; percorre cada um

        //manda pro array de movies o conteudo dos filmes
       movies.push(                                                                // manda pro let de movies o conteudo abaixo 
           {               
               //propriedade q vai usar no main: parameto[valor nome = do data]                                                             
               "title": movie["title"],                                             // propriedade: parameto  e o valor [nome = a q ta no data]
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

//testeFiltrobranch

//funcao que filtra e retorna dados de personagens
export const filterCharacter = (data) =>{                                   // exporta a funcao; recebe dados

    //cria array pra guardar personagens
    let people = [];                                                          // cria array de pessoas

    //dentro dos dados; entra em filmes e percorre cada um
    data["films"].forEach(function(film) {                                      //entra obj film; percorre com foreach             
       // console.log(filme["title"]);       
       
       //dentro de filmes; entra em pessoas e percorre cada um 
        film["people"].forEach(function(person){                                     // dentro do obj filme percorre e tras o obj people          
           // console.log(people["name"]);

           //manda pro array de people o conteudo de pessoas
            people.push(                                                            //mando pro array de pessoas o conteudo abaixo:
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
