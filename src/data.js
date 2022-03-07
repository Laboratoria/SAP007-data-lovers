export const buscarNome = (data, busca) => {
  const resultadoNomes = data.filter(personagem => personagem.name.toUpperCase().includes(busca.toUpperCase()))
  return resultadoNomes
};

export const buscarEspecie = (data, especie) => {
  const resultadoEspecie = data.filter(personagem => personagem.species.toLowerCase() === especie.toLowerCase())
  return resultadoEspecie
}

export const SortOrdem = (data, ordemValue) => {
  const order = data.sort((a, b) => (a.name.localeCompare(b.name)))
  switch (ordemValue) {
    case "az":
      return order
    case "za":
      return order.reverse()
  }
}

export const calculos = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total)
  return porcentagem
};