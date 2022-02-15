//////////////////FUNÇÃO DE FILTRAGEM GÊNERO - filter()
export const  filtroGenero = (data, condition) => {
  const resultadoGenero = data.filter((personagem) => personagem.gender.toLowerCase() === condition.toLowerCase());
  return resultadoGenero;
};

//////////////////FUNÇÃO DE FILTRAGEM ESPÉCIE - filter()
export const  filtroEspecie = (data, condition) => {
  const resultadoEspecie = data.filter((personagem) => personagem.species.toLowerCase() === condition.toLowerCase());
  return resultadoEspecie;
};

//////////////////FUNÇÃO DE FILTRAGEM STATUS - filter()
export const  filtroStatus = (data, condition) => {
  const resultadoStatus = data.filter((personagem) => personagem.status.toLowerCase() === condition.toLowerCase());
  return resultadoStatus;
};

//////////////////ORDENAÇÃO ALFABÉTICA UTILIZANDO SORT
export const ordemAlfabetica = (data, order) => {
  if (order === "AZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  } 
};


//////////////////FUNÇÃO DE BUSCA POR NOME- FILTER()
export const  buscarNome = (data, condition) => {
  const resultadoLocalizacao = data.filter((personagem) => personagem.name.toLowerCase().includes(condition.toLowerCase()));
  return resultadoLocalizacao;
};

//////////////////CALCULO DE PORCENTAGEM POR CATEGORIA 
export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};
