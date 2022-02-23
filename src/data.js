export const filterData = (data, valorEscolhido) => { //Recebe array de dados e valor escolhido de filtros
    let filmes = data["films"].map(filme => { //Mapeia o array e retorna um novo de objetos com seus atributos
        return { //Retorna um objeto para cada elemento do novo array
            //propriedade q vai usar no main: parameto[valor nome = do data]                                                             
            "title": filme["title"],
            "poster": filme["poster"],
            "release_date": filme["release_date"],
            "rt_score": filme["rt_score"],
            "director": filme["director"],
            "producer": filme["producer"],
            "description": filme["description"]
        };
    }).filter(filme => { //Filtra o novo array 
        let verificaFiltroDiretor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "diretor" && valorEscolhido[1] == filme["director"]))
        let verificaFiltroProdutor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "produtor" && valorEscolhido[1] == filme["producer"]))
        return verificaFiltroDiretor || verificaFiltroProdutor; //Caso seja true, mantém o elemento, caso false, o retira do novo array
    });
    console.log(filmes)
    return filmes
}

//filtra nome dos filmes pagina personagens
export const pegaTitulo = (data) => {
    // let dados = data["films"]
    // let titulo = dados.map(nome =>nome["title"]) 
    // return titulo

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
    //let people = [];
    //dentro dos dados; entra em filmes e percorre cada um
    let personagens = data["films"].map(film => {
        // console.log(filme["title"]);    
        film.people.map(person => {

            return {
            
            "name": person["name"],
            "age": person["age"],
            "gender": person["gender"],
            "specie": person["specie"],
            "title": film["title"],
            "img": person["img"]  
            }
        })
        console.log(film.people)
        

//(inventor => `${inventor.first} ${inventor.last}`);
        //let filtroTitulo = (tituloEscolhido.length == 0 || (tituloEscolhido == film["title"]))
        // let filtroGenero = (generoEscolhido.length == 0 || (generoEscolhido == (film["title"](person["gender"]))));
           // if(filtroTitulo) {

                //dentro de filmes; entra em pessoas e percorre cada um 
            //     film.["people"].forEach(function (person) {
            //         // console.log(people["name"]);
            //         let filtroGenero = (generoEscolhido.length == 0 || generoEscolhido == person["gender"] || (generoEscolhido == "NA" && (person["gender"] != "Male" && person["gender"] != "Female")));
            //         if (filtroGenero) {
            //             //manda pro array de people o conteudo de pessoas

            //             "name": person["name"],
            //             "age": person["age"],
            //             "gender": person["gender"],
            //             "specie": person["specie"],
            //             "title": film["title"],
            //             "img": person["img"]  
                        
            //        }
            //    });
            //}
       // }
    });
    return personagens
}

//export const ordenar = (data, condicao) => {
//     let ordenaTituloAZ = [data["title"]]
//    let teste = ordenaTituloAZ.sort((a,b) =>{
//        return a.title.localeCompare(b.title);
//    });
// console.log(teste);
// export function ordenar = (data) => {
//  const ordenarAnoAsc = (a,b)
