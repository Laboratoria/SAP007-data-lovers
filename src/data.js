//manipulação de dados através de arrays e objetos

//Exemplo filterData(data, condition)

//Filtro genero
export const filterGender = (data, condition) => {
  const genderResults = data.filter(
    (personagem) => personagem.gender.toLowerCase() === condition.toLowerCase()
  );
  return genderResults;
};
//Filtro especie
export const filterSpecies = (data, condition) => {
  const resultSpecies = data.filter(
    (personagem) => personagem.species.toLowerCase() === condition.toLowerCase()
  );
  return resultSpecies;
};
//Filtro busca por nome
export const searchName = (data, condition) => {
  const screenSearch = data.filter((personagem) =>
    personagem.name.toLowerCase().includes(condition.toLowerCase())
  );
  return screenSearch;
};
//Filtro AZ/ZA
export const orderResults = (data, orderScreen) => {
  if (orderScreen === "AZ") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};
//porcentagem
export const percentage = (total, portion) => {
  const resultPercentage = Math.round((portion * 100) / total);
  return resultPercentage;
};
