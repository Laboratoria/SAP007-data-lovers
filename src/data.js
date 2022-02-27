//manipulação de dados através de arrays e objetos

//Exemplo filterData(data, condition)

//export const ordemAlfabetica=;
export const filterGender = (data, condition) => {
  const resultGender = data.filter(
    (personagem) => personagem.gender.toLowerCase() === condition.toLowerCase()
  );
  return resultGender;
};

export const filterSpecies = (data, condition) => {
  const resultSpecies = data.filter(
    (personagem) => personagem.species.toLowerCase() === condition.toLowerCase()
  );
  return resultSpecies;
};
export const searchName = (data, condition) => {
  const screenSearch = data.filter((personagem) =>
    personagem.name.toLowerCase().includes(condition.toLowerCase())
  );
  return screenSearch;
};

export const orderResults = (data, orderResults) => {
  if (orderResults === "AZ") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const percentage = (total, portion) => {
  const resultPercentage = Math.round((portion * 100) / total);
  return resultPercentage;
};
