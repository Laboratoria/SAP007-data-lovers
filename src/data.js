export const filterData = (data, condition) => {
  return data.filter((personagens) => (personagens[condition[0]] == condition[1]));
}

export const sortBy = (data, order) => {
  if (order === "ordenarAZ") {
    return data.sort((a, b) => a.name < b.name ? -1 : 1)
  } else {
    return data.sort((a, b) => a.name > b.name ? -1 : 1)
  } 
};

 export const computeStats = (data) => {
   return data.reduce ((personagens, totalPersonagens) => personagens[0] + totalPersonagens[1] , 0)
  }

   //{}








