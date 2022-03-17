
export const searchByName = (name, pokemons) => {
    return pokemons.filter((select) => select.name.includes(name.toLowerCase()));
  };
  
  export const selectType = (selectByType, pokemons) =>
      pokemons.filter((select) => select.type.includes(selectByType));
  
      export const calcType = (pokemons, selectByType) => {
        const type = pokemons.filter(search => search.type.includes(selectByType));
        return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
    };
    
  export const orderBy = (orderBy, pokemons) => {
    if (orderBy === 'order-az') {
      pokemons.sort(function(a, b) {
        var textA = a.name.toLowerCase();
        var textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      })
    }
  
    if (orderBy === 'order-za') {
      pokemons.sort(function(a, b) {
        var textA = a.name.toLowerCase();
        var textB = b.name.toLowerCase();
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      })
    }
    return pokemons;
  };
