const filterData = (data, condition) => {
  return data.filter((element) => (element[condition[0]] == condition[1]));
}



const btFiltroA = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

const btFiltroZ = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export {
  btFiltroA,
  btFiltroZ,
  filterData,
}

// // export const sortData = (data, sortBy, sortOrder) => {
// //   return 'sortData';//};

// export const computeStats= (data) => {
//   return'computeStats';

// };

