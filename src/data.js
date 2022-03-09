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
  const copy = [...data];//constante que guarda uma cópia do array original, já que o sort modifica o array
  if (order === "alphabetic") {
    copy.sort((a, z) => a.name > z.name ? 1 : -1);
  } else {
    copy.sort((a, z) => a.name > z.name ? -1 : 1);
  }
  return copy;
};

//Pesquisar
export const searchName = (data, condition) => {
  const searchResult = data.filter(
    (dado) => dado.name.toLowerCase().includes(condition.toLowerCase()));
  return searchResult;
}

//includes é um método que determina se um conjunto de caracteres pode ser encontrado dentro de outra string
