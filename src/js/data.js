export function filtroDataDiretor(data, condition) {
  let filtroDiretor = data.filter((item) => item.director === condition);
  return filtroDiretor;
}

export function filtroDataLançamento(data, condition) {
  let filtroLançamento = data.filter((item) => item.release_date === condition);
  return filtroLançamento;
}

export function filtroDataGênero(data, condition) {
  let filtroGênero = data.filter((item) => item.gender === condition);
  return filtroGênero;
}

export function filtroDataEspécie(data, condition) {
  let filtroEspécie = data.filter((item) => item.specie === condition);
  return filtroEspécie;
}

export function ordenaçãoDataFilmes(data, condition) {
  if (condition === "A-Z") {
    let ordenaçãoAZ = data.sort((a, b) => (a.title > b.title ? 1 : -1));
    return ordenaçãoAZ;
  } else {
    return data.sort((a, b) => (a.title > b.title ? -1 : 1));
  }
}

export function ordenaçãoDataPersonagens(data, condition) {
  if (condition === "A-Z") {
    let ordenaçãoAZ = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    return ordenaçãoAZ;
  } else {
    return data.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
}

export function ordenaçãoDataPopularidade(data, condition) {
  if (condition === "Mais Popular") {
    let ordenaçãoPopularidade = data.sort((a, b) => (a.rt_score > b.rt_score ? -1 : 1));
    return ordenaçãoPopularidade;
  } else {
    return data.sort((a, b) => (a.rt_score > b.rt_score ? 1 : -1));
  }
}

export function ordenaçãoDataIdade(data, condition) {
  if (condition === "Mais Novo") {
    let ordenaçãoIdade = data.sort((a, b) => (a.age > b.age ? 1 : -1));
    return ordenaçãoIdade;
  } else {
    return data.sort((a, b) => (a.age > b.age ? -1 : 1));
  }
}

export function pesquisaDataTítulo (data, condition) {
  let pesquisaTítulo = data.filter((item) => item.title.toLowerCase().includes(condition.toLowerCase()));
  return pesquisaTítulo;
}

export function pesquisaDataNome (data, condition) {
  let pesquisaNome = data.filter((item) => item.name.toLowerCase().includes(condition.toLowerCase()));
  return pesquisaNome;
}