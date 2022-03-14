export const buscarNome = (data, busca) => {
  const resultadoNomes = data.filter(personagem => personagem.name.toLowerCase().includes(busca.toLowerCase()))
  return resultadoNomes
}

export const buscarEspecie = (data, especie) => {
  const resultadoEspecie = data.filter(personagem => personagem.species.toLowerCase() === especie.toLowerCase())
  return resultadoEspecie
}

export const ordenacao = (data, ordem) => {
  const copiaData = data
  const order = copiaData.sort((a, b) => (a.name.localeCompare(b.name)))
  switch (ordem) {
    case "a-z":
      return order
    case "z-a":
      return order.reverse()
  }
}

export const calculos = (total, porcento) => {
  const porcentagem = Math.round((porcento * 100) / total)
  return porcentagem
}