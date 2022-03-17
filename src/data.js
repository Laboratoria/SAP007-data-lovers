// estas funciones son de ejemplo

export const filterFilms = (films, valueSelec) =>
  films.filter(item => item.title.toUpperCase().includes(valueSelec.toUpperCase()))

/*export const filters = (films, orderSelec) => {
  if (orderSelec === "A-Z"){
    return films.sort((a,b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelec === "Z-A"){
    return films.sort((a,b) => a.title > b.title ? -1 : 1)
  }
}*/
