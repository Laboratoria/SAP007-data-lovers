//manipulação de dados através de arrays e objetos

//Exemplo filterData(data, condition)

//export const ordemAlfabetica=;
export const filterGender = (data, condition) => {
  const resultGender = data.filter(
    (personagem) => personagem.gender.toLowerCase() === condition.toLowerCase()
  );
  console.log(resultGender);
};

export const filterSpecie = (data, condition) => {
  const resultSpecies = data.filter(
    (personagem) => personagem.species.toLowerCase() === condition.toLowerCase()
  );
  console.log(resultSpecies);
};
export const searchName = (data, condition) => {
  const resultNames = data.filter((personagem) =>
    personagem.name.toLowerCase().includes(condition.toLowerCase())
  );
  console.log(resultNames);
};
export const  buscarNome = (data, condition) => {
  const resultadoLocalizacao = data.filter((personagem) => personagem.name.toLowerCase().includes(condition.toLowerCase()));
  return resultadoLocalizacao;
};