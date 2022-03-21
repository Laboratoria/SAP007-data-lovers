
export const selectType = (selectByType, pokemons) =>
  pokemons.filter((select) => select.type.includes(selectByType));

  
export const calcType = (pokemons, selectByType) => {
  const type = pokemons.filter(search => search.type.includes(selectByType));
  return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};

    
export const ordenarPokemons = (pokemons, sortFilter) => {
  const ordenarAZ = (a, b) => (a["name"]).localeCompare(b["name"]);
  const ordenarZA = (a, b) => (a["name"]).localeCompare(b["name"]);
  const ordenarCrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));
  const ordenarDecrescente = (a, b) => Number((a["num"]).localeCompare(b["num"]));
  switch (sortFilter) {
      case "ordenar-az":
          return pokemons.sort((a, b) => ordenarAZ(a, b))
      case "ordenar-za":
          return pokemons.sort((a, b) => ordenarZA(a, b)).reverse()
      case "ordenarCrescente":
          return pokemons.sort((a, b) => ordenarCrescente(a, b))
      case "ordenarDecescente":
          return pokemons.sort((a, b) => ordenarDecrescente(a, b)).reverse();
  }
};


