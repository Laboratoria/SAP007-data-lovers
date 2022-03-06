import dados from '../data/ghibli/ghibli.js';

// export function filterDataDiretor(data, condition) {
//   let filterDiretor = data.filter((item) => item.director === condition);
//     return filterDiretor;
// }

// export function filterDataLançamento(data, condition) {
//   let filterLançamento = data.filter((item) => item.release_date === condition);
//     return filterLançamento;
// }

// export function filterDataGênero(data, condition) {
//   let filterGênero = data.filter((item) => item.gender === condition);
//     return filterGênero;
// }

// export function filterDataEspécie(data, condition) {
//   let filterEspécie = data.filter((item) => item.specie === condition);
//     return filterEspécie;
// }


export function recuperarDiretores() {
  const diretores = dados.films.map(function(item) {
    return item.director;
  });
  
  // cria um Set que é como um objeto, só que não repete os itens do array
  // converte para array usando o Array.from
  const diretoresNaoRepetido = Array.from(new Set(diretores));
  return diretoresNaoRepetido;
}

export function recuperarDataLancamento() {
  const datasLancamento = dados.films.map(function(item) {
    return item.release_date;
  });
  
  // cria um Set que é como um objeto, só que não repete os itens do array
  // converte para array usando o Array.from
  const datasLancamentoNaoRepetida = Array.from(new Set(datasLancamento));
  return datasLancamentoNaoRepetida;
}

export function ordenarPopularidade(crescente = true) {

    // cria uma comparação do array de objeto e ordena 
    dados.films.sort(function(a, b)  {
      const scoreA = crescente ? parseInt(a.rt_score) : parseInt(b.rt_score);
      const scoreB = crescente ? parseInt(b.rt_score) : parseInt(a.rt_score);

      if(scoreA < scoreB) {
        return -1;
      }
      else if(scoreA > scoreB) {
        return 1;
      }
      else {
        return 0;
      }
    });
    return dados.films;
}

export function ordenarOrdemAlfabetica(crescente ) {

  // cria uma comparação do array de objeto e ordena 
  dados.films.sort(function(a, b)  {
    const tituloA = crescente ? (a.title) : (b.title);
    const tituloB = crescente ? (b.title) : (a.title);

    if(tituloA < tituloB) {
      return -1;
    }
    else if(tituloA > tituloB) {
      return 1;
    }
    else {
      return 0;
    }
  });
  return dados.films;
}

