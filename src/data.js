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
  const copy = [...data];
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

//Calculos
export const stats_gender = {


  gender: (data, genderParameter) => {

    const totalByGender = data.reduce(function (total, character) {
      if (character.gender === genderParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const average_gender = Number(((totalByGender / data.length) * 100).toFixed(2));
    return average_gender;
  },

}

export const stats_status = {


  status: (data, statusParameter) => {

    const totalByStatus = data.reduce(function (total, character) {
      if (character.status === statusParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const average_status = Number(((totalByStatus / data.length) * 100).toFixed(2));
    return average_status;
  },

};
