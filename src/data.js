// estas funciones son de ejemplo

export const filterFilms = (films, valueSelec) =>
  films.filter(item => item.title.toUpperCase().includes(valueSelec.toUpperCase()))

export const filters = (films, orderSelec) => {
  if (orderSelec === "a-z"){
    return films.sort((a,b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelec === "z-a"){
    return films.sort((a,b) => a.title > b.title ? -1 : 1)
  }

  if(orderSelec === "oldest"){
    return films.sort((a,b) => a.release_date > b.release_date ? 1 : -1)
  }

  if(orderSelec === "newest"){
    return films.sort((a,b) => a.release_date > b.release_date ? -1 : 1)
  }

  if(orderSelec === "lower"){
    return films.sort((a,b) => a.rt_score > b.rt_score ? 1 : -1)
  }

  if(orderSelec === "higher"){
    return films.sort((a,b) => a.rt_score > b.rt_score ? -1 : 1)
  }
}
