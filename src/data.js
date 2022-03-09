export const filtroGenero = (data, condition) => {
  const resultadoGenero = data.filter(
    (character) => character.gender.toUpperCase() === condition.toUpperCase()
  );

  return resultadoGenero;
};
