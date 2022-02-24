
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
