import dados from "../data/ghibli/ghibli.js";

export function recuperarFilmes() {
  const filmes = dados.films;
  return filmes;
}

export function recuperarPersonagens() {
  const filmes = dados.films;

  const arrayDeArraydDePersonagens = filmes.map(function (filme) {
    return filme.people;
  });

  let personagens = [];

  arrayDeArraydDePersonagens.forEach(function (itemArray) {
    personagens = personagens.concat(itemArray);
  });

  return personagens;
}

// Filmes
export function buscarFilmesPorDiretor(nomeDoDiretor) {
  const filmes = recuperarFilmes();

  const filmesFiltrados = filmes.filter(function (filme) {
    return filme.director === nomeDoDiretor;
  });

  return filmesFiltrados;
}

export function buscarFilmesPorDataLancamento(dataLancamento) {
  const filmes = recuperarFilmes();

  const filmesFiltrados = filmes.filter(function (filme) {
    return filme.release_date === dataLancamento;
  });

  return filmesFiltrados;
}

export function buscarFilmesPorPopularidade(buscarPorOrdemCrescente) {
  // cria uma comparação do array de objeto e ordena
  const filmes = recuperarFilmes();

  filmes.sort(function (a, b) {
    const scoreA = buscarPorOrdemCrescente ? parseInt(a.rt_score) : parseInt(b.rt_score);
    const scoreB = buscarPorOrdemCrescente ? parseInt(b.rt_score) : parseInt(a.rt_score);

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
  return filmes;
}

export function buscarFilmesPorOrdemAlfabetica(buscarPorOrdemCrescente) {
  // cria uma comparação do array de objeto e ordena
  const filmes = recuperarFilmes();

  filmes.sort(function(a, b)  {
    const tituloA = buscarPorOrdemCrescente ? a.title : b.title;
    const tituloB = buscarPorOrdemCrescente ? b.title : a.title;

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
  return filmes;
}

// Dados Filmes
export function buscarNomesDiretores() {
  const filmes = recuperarFilmes();

  const nomesDiretores = filmes.map(function (filme) {
    return filme.director;
  });

  const diretoresNaoRepetidos = Array.from(new Set(nomesDiretores));
  return diretoresNaoRepetidos;
}

export function buscarDatasLancamento() {
  const filmes = recuperarFilmes();

  const datasLancamento = filmes.map(function (filme) {
    return filme.release_date;
  });

  const datasNaoRepetidas = Array.from(new Set(datasLancamento));
  return datasNaoRepetidas;
}

// Personagens
export function buscarPersonagensPorGenero(generoPersonagem) {
  const personagens = recuperarPersonagens();

  const personagensFiltrados = personagens.filter(function (personagem) {
    return personagem.gender === generoPersonagem;
  });
  return personagensFiltrados;
}

export function buscarPersonagensPorEspecie(especiePersonagem) {
  const personagens = recuperarPersonagens();

  const personagensFiltrados = personagens.filter(function (personagem) {
    return personagem.specie === especiePersonagem;
  });
  return personagensFiltrados;
}

// Dados Personagens
export function buscarGenerosPersonagens() {
  const personagens = recuperarPersonagens();

  const generos = personagens.map(function (personagem) {
    return personagem.gender;
  });

  const generosNaoRepetidos = Array.from(new Set(generos));
  return generosNaoRepetidos;
}

export function buscarEspeciesPersonagens() {
  const personagens = recuperarPersonagens();

  const especies = personagens.map(function (personagem) {
    return personagem.specie;
  });

  const especiesNaoRepetidas = Array.from(new Set(especies));
  return especiesNaoRepetidas;
}

export function buscarPersonagensPorOrdemAlfabetica(buscarPorOrdemCrescente) {
  // cria uma comparação do array de objeto e ordena
  const personagens = recuperarPersonagens();

  personagens.sort(function(a, b)  {
    const nomeA = buscarPorOrdemCrescente ? a.name : b.name;
    const nomeB = buscarPorOrdemCrescente ? b.name : a.name;

    if(nomeA < nomeB) {
      return -1;
    }
    else if(nomeA > nomeB) {
      return 1;
    }
    else {
      return 0;
    }
  });
  return personagens;
}

export function recuperarPorcentagemDeFilmes(quantidadeFiltrado) {
  const filmes = recuperarFilmes();
  const porcentagemFiltrada = quantidadeFiltrado * 100 / filmes.length;
  return `Exibindo ${quantidadeFiltrado} de ${filmes.length} (${porcentagemFiltrada}%)`;
}

export function recuperarPorcentagemDePersonagens(quantidadeFiltrado) {
  const personagens = recuperarPersonagens();
  const porcentagemFiltrada = (quantidadeFiltrado * 100 / personagens.length).toFixed(2);
  return `Exibindo ${quantidadeFiltrado} de ${personagens.length} (${porcentagemFiltrada}%)`;
}