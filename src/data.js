//funcao filtar filmes e retorna dados dos filmes
export const filterData = (data, valorEscolhido) => {
    console.log("FILTRANDO")
    console.log(valorEscolhido)

    //cria array pra guardar os filmes
    let movies = [];

    //acessa dados, entra em filmes, percorre cada um
    data["films"].forEach(movie => {
        let verificaFiltroDiretor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "diretor" && valorEscolhido[1] == movie["director"]))
        let verificaFiltroProdutor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "produtor" && valorEscolhido[1] == movie["producer"]))
        if (verificaFiltroDiretor || verificaFiltroProdutor) {

            //manda pro array de movies o conteudo dos filmes
            movies.push(
                {
                    //if (opcaoEscolhida ===  movie["director"] ||
                    //movie["producer"])   

                    //propriedade q vai usar no main: parameto[valor nome = do data]                                                             
                    "titulo": movie["title"],
                    "poster": movie["poster"],
                    "ano": movie["release_date"],
                    "avaliacao": movie["rt_score"],
                    "diretor": movie["director"],
                    "produtor": movie["producer"],
                }
            );
        }
    });

    return movies;
};

//filtra nome dos filmes pagina personagens
export const pegaTitulo = (data) => {
    let titulo = [];
    data["films"].forEach((nome) => {
        titulo.push(
            nome["title"])
    });
    return titulo;
};

//filtra diretores pagina filme
export const pegaDiretores = (data) => {
    let diretores = [];
    data["films"].forEach((filme) => {

        if (diretores.indexOf(filme["director"]) == -1) {
            diretores.push(
                filme["director"]
            );
        }
    });
    return diretores;
}

//Filtra produtores pagina filme
export const pegaProdutores = (data) => {
    let produtores = [];
    data["films"].forEach((produtor) => {

        if (produtores.indexOf(produtor["producer"]) == -1) {
            produtores.push(
                produtor["producer"]
            );
        }
    });
    return produtores;
}


//funcao que filtra e retorna dados de personagens
export const filterCharacter = (data, tituloEscolhido, generoEscolhido) => {
    console.log(generoEscolhido)
    console.log(tituloEscolhido)

    //cria array pra guardar personagens
    let people = [];

    //dentro dos dados; entra em filmes e percorre cada um
    data["films"].forEach(function (film) {
        // console.log(filme["title"]);       
        let filtroTitulo = (tituloEscolhido.length == 0  || (tituloEscolhido == film["title"]));
       // let filtroGenero = (generoEscolhido.length == 0 || (generoEscolhido == (film["title"](person["gender"]))));
        if (/*filtroGenero ||*/ filtroTitulo) {

            //dentro de filmes; entra em pessoas e percorre cada um 
            film["people"].forEach(function (person) {
                // console.log(people["name"]);
                let filtroGenero = (generoEscolhido.length == 0 || generoEscolhido == person["gender"] || (generoEscolhido == "NA" && (person["gender"] != "Male" && person["gender"] != "Female")));
                if (filtroGenero){

                //manda pro array de people o conteudo de pessoas
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
                }
            })
        }
        
    });

    return people;
}

//export const ordenar = (data, condicao) => {

//     let ordenaTituloAZ = [data["title"]]

//    let teste = ordenaTituloAZ.sort((a,b) =>{
//        return a.title.localeCompare(b.title);

//    });

// console.log(teste);


// export function ordenar = (data) => {
//  const ordenarAnoAsc = (a,b)
