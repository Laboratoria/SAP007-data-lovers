
export const searchByName = (name, pokemons) => {
  return pokemons.filter((select) => select.name.includes(name.toLowerCase()));
};

export const selectType = (selectByType, pokemons) =>
  pokemons.filter((select) => select.type.includes(selectByType));

export const calcType = (pokemons, selectByType) => {
  const type = pokemons.filter(search => search.type.includes(selectByType));
  return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};

export const sortAZ = (pokemon) => {
  return pokemon.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUppercase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;

  });

}

export const sortZA = (pokemon) => {
  return pokemon.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUppercase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });
}
