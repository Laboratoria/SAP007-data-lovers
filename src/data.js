export const filtroGenero = (data, condition) => {
  const resultadoGenero = data.filter(
(character) => character.gender.toUpperCase() === condition.toUpperCase()
);

  return resultadoGenero;
};

export const filtroStatus = (data, condition) => {
  const resultadoStatus = data.filter(
    (character) => character.status.toUpperCase() === condition.toUpperCase()
  );

  return resultadoStatus;
};
export const filtroSpecies = (data, condition) => {
  const resultadoSpecies = data.filter(
    (character) => character.species.toUpperCase() === condition.toUpperCase()
  );

  return resultadoSpecies;
};


export const filtroName = (data, condition) => {
  const resultadoName = data.filter((character) =>
  character.name.toLowerCase().includes(condition.toLowerCase())
  );
  return resultadoName;
};

export const filtroOrder  = (data, order) => {
  
  if (order === "Z-A") {
      return data.sort((a, b) => a.name > b.name ? -1 : 1)
  } else if (order === "A-Z") {
      return data.sort((a, b) => a.name > b.name ? 1 : -1)
  }
}
export const calculoPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};
