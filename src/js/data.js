export function filterData(data, condition) {
  let filter = data.filter((item) => item.director === condition);
  return filter;
}
