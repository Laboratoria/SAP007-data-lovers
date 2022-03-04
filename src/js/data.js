export function filterDataDiretor(data, condition) {
  let filterDiretor = data.filter((item) => item.director === condition);
    return filterDiretor;
}

export function filterDataLançamento(data, condition) {
  let filterLançamento = data.filter((item) => item.release_date === condition);
    return filterLançamento;
}