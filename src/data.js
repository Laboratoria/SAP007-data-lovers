const filterData = (data, condition) => data.filter((species) => {
  return (species.Human == condition)
  
});

const btFiltroA = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

const btFiltroZ = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export {
  btFiltroA,
  btFiltroZ,
  filterData
}

// // export const sortData = (data, sortBy, sortOrder) => {
// //   return 'sortData';//};

// export const computeStats= (data) => {
//   return'computeStats';

// };

