
export const selectType = (selectByType, pokemons) =>
  pokemons.filter((select) => select.type.includes(selectByType));

  
export const calcType = (pokemons, selectByType) => {
  const type = pokemons.filter(search => search.type.includes(selectByType));
  return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};



