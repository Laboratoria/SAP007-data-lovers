export const filterData = (data, valorEscolhido) => { //Recebe array de dados e valor escolhido de filtros
    let filmes = data["films"].filter(filme => { //Filtra o novo array 
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
    let personagens = []
     //dentro dos dados; entra em filmes e percorre cada um
    data.films.map(film => { 
        film.people.map(person => {    

            personagens.push({ 
            "name": person["name"],
            "age": person["age"],
            "gender": person["gender"],
            "specie": person["specie"],
            "title": film["title"],
            "img": person["img"]  
            })
        })
    });
    
    personagens = personagens.filter(personagem =>{
        let filtroTitulo = (tituloEscolhido.length == 0 || (tituloEscolhido == personagem["title"]))
        let filtroGenero = (generoEscolhido.length == 0 || (generoEscolhido == personagem["gender"]));
        return filtroTitulo && filtroGenero
    })
    return personagens
}

// export const ordenar = (data, condicao) => {
//     let ordenaTituloAZ = [data["title"]]
//    let teste = ordenaTituloAZ.sort((a,b) =>{
//        return a.title.localeCompare(b.title);
//    });
// console.log(teste);
// export function ordenar = (data) => {
//  const ordenarAnoAsc = (a,b)


export const calculo = (getMovies) => {
    let somaNota = 0
    let retornoCalculos = []
    let somaIdade = 0
    let contadorPersonagens = 0
    let maisJovem = 0 
    let maisVelho = 0
    // let dados = data["films"];
    getMovies.map(filme =>{
        somaNota += parseFloat(filme["rt_score"])
        filme.people.map(personagem => {
            if (parseInt(personagem.age)) {
                somaIdade += parseInt(personagem.age)
                contadorPersonagens++
                maisJovem = (maisJovem > personagem.age) || maisJovem == 0 ? personagem.age : maisJovem
                maisVelho = maisVelho < personagem.age ? personagem.age : maisVelho
            }
            
        })
    });

    retornoCalculos["mediaNotas"] = (somaNota/getMovies.length).toFixed(2)
    retornoCalculos["mediaIdade"] = (somaIdade/contadorPersonagens).toFixed(0)
    retornoCalculos["maisJovem"] = maisJovem
    retornoCalculos["maisVelho"] = maisVelho
    
    // mediaNotas = notas / 2 
    return retornoCalculos
    
}
//console.log(calculo())
