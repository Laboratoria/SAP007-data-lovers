import data from "../data/ghibli/ghibli.js";

let filmesData = data.films;

export const filterMovies = (diretor) => {
  const filtrarDiretor = filmesData.filter(
    (filtrando) => filtrando.director === diretor.target.value
  );
  return filtrarDiretor;
};

