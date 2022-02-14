// estas funciones son de ejemplo

export const pokemonNameData = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// Mostrar quantidade de Pokémons que quisermos selecionar
export const pokemonsData = (pokemonsCont) => pokemonsCont.slice(0, 251);

export const filterByName = (pokemonsCont, pokemonsName) => {
  const lowerCaseName = pokemonsName.toLowerCase();
  return pokemonsList
    .filter((pokemon) => pokemon.name.toLowerCase().startsWith(lowerCaseName))
    .slice(0, 251);
};