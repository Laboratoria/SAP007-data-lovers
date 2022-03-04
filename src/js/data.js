export function filterDataDiretor(data, condition) {
  let filterDiretor = data.filter((item) => item.director === condition);
    return filterDiretor;
}

export function filterDataLançamento(data, condition) {
  let filterLançamento = data.filter((item) => item.release_date === condition);
    return filterLançamento;
}

export function filterDataGênero(data, condition) {
  let filterGênero = data.filter((item) => item.gender === condition);
    return filterGênero;
}