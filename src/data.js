export const filterData = (data, condition) => {
  return data.filter((personagens) => (personagens[condition[0]] == condition[1]));
};

export const filternome =  (data, buscaNome) => data.filter (personagens => {
  return personagens.name.toLowerCase().includes(buscaNome.toLowerCase());
})

export const sortBy = (data, order) => {
  if (order === "ordenarAZ") {
    return data.sort((a, b) => a.name < b.name ? -1 : 1)
  } else {
    return data.sort((a, b) => a.name > b.name ? -1 : 1)
  } 
};

export const computeStats = (data) => {
  return Math.round(100 * ( data.selectedLenght / data.totalLenght))
};
 
//   








