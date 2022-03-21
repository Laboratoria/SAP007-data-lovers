
//busca nome
export const searchByName = (name, data) => {
  return data.filter((select) => select.name.includes(name.toLowerCase()));
 const searchByName = (name, pokemons) => {
  return pokemons.filter((select) => select.name.includes(name.toLowerCase()));
}}


export const selectType = (selectByType, pokemons) =>
  pokemons.filter((select) => select.type.includes(selectByType));

  
export const calcType = (pokemons, selectByType) => {
  const type = pokemons.filter(search => search.type.includes(selectByType));
  return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};


export const sortAZ = (data, order) => {
  const copy = [...data]
  if (order === "A-Z") {
    return copy.sort((a, z) => a.name > z.name ? 1 : -1);
  } else {
    return copy.sort((a, z) => a.name > z.name ? -1 : 1);
  }
};

