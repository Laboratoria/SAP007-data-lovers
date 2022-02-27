export const dataPokemon = () => {
  fetch("data/pokemon.json")
    .then((data) => data.json())
    .then((objectData) => {
      return objectData;
    });
  return false;
};
