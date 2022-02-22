
const btFiltroA = (data) => data.sort((a, b) => (a.name < b.name) ? - 1 : 1);

const btFiltroZ = (data) => data.sort((a, b) => (a.name > b.name) ? - 1 : 1);

export {
  btFiltroA,
  btFiltroZ,
}

// // export const sortData = (data, sortBy, sortOrder) => {
// //   return 'sortData';//};

// export const computeStats= (data) => {
//   return'computeStats';

// };

