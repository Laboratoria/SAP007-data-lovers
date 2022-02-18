export const filterData = (data ) => {                                          
    let movies = [];                                                            
    data["films"].forEach(movie => {                                            

        //manda pro array de movies o conteudo dos filmes
       movies.push(                                                                                                                      {
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


//funcao que filtra e retorna dados de personagens
export const filterCharacter = (data) =>{                                  
    let people = [];                                                         
    data["films"].forEach(function(film) {                                      
        film["people"].forEach(function(person){                                     
            people.push(                                                           
                {
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

// export const ordenar = (data, condicao) => {

//     let ordenaTituloAZ = [data["title"]]

//    let teste = ordenaTituloAZ.sort((a,b) =>{
//        return a.title.localeCompare(b.title);
       
//    });
   
// console.log(teste);
    
    
// export function ordenar = (data) => {
//  const ordenarAnoAsc = (a,b)
