export const buscarNome = (data, busca) => {
  const resultadoNomes = data.filter((personagem) =>
    personagem.name.toLowerCase().includes(busca.toLowerCase())
  );
  return resultadoNomes;
};

export const buscarEspecie = (data, especie) => {
  const resultadoEspecie = data.filter(
    (personagem) => personagem.species.toLowerCase() === especie.toLowerCase()
  );
  return resultadoEspecie;
};

export const ordem = (data) => {
  const resultadoOrdem = data.sort(function (a, z) {
    if (a.name < z.name) return -1;
    if (a.name > z.name) return 1;
  });

  return resultadoOrdem;
};

/*
export const buscarNome = (data, condition) => {
  return 'example';
};

export const example = () => {
  return 'example';
};
*/

/*
filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.
 */
