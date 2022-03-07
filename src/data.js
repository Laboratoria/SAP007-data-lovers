//Filtro de status
export const statusFilter = (data, condition) => {
  const statusResult = data.filter(
    (dado) => dado.status.toLowerCase() === condition.toLowerCase()
  );
  return statusResult;
};

//Filtro de gênero
export const genderFilter = (data, condition) => {
  const genderResult = data.filter(
    (dado) => dado.gender.toLowerCase() === condition.toLowerCase()
  );
  return genderResult;
};


//Ordenar
export const sortNamesFilter = (data, order) => {
  if (order === "alphabetic") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
  }
  else if (order === "descending") {
    return data.sort((a, z) => a.name > z.name ? -1 : 1);
  }
};

//Pesquisar
export const searchName = (data, condition) => {
  const searchResult = data.filter(
    (dado) => dado.name.toLowerCase().includes(condition.toLowerCase()));
  return searchResult;
}

//includes é um método que determina se um conjunto de caracteres pode ser encontrado dentro de outra string
