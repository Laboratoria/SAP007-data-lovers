
export const orderAZ = (data) => data.sort((a, z) => {
  const nameA = a.name.toUpperCase();
  const nameZ = z.name.toUpperCase();
  if (nameA > nameZ) {
    return 1;
  }
  if (nameA < nameZ) {
    return -1;
  }
  return 0;
});

export const orderZA = (data) => data.sort((a, z) => {
  const nameA = a.name.toUpperCase();
  const nameZ = z.name.toUpperCase();
  if (nameA > nameZ) {
    return -1;
  }
  if (nameA < nameZ) {
    return 1;
  }
  return 0;
});

export const filterStatus = (data, value) => {
  return data.filter((item) => {
    return item.status === value
  })
}

export const filtroespecie = (data, value) => {
  return data.filter((item) => {
    return item.species === value
  })
}

export const filterGender = (data, value) => {
  return data.filter((item) => {
    return item.gender === value
  })
}

export function calculo(numero, numero2) {
  let statS = numero / numero2 * 100;
  let estatistica = `${statS.toFixed(1)}% dos personagens corresponde a categoria escolhida`
  return estatistica
}

export const filteredItem = (data, value) => {
  return data.filter((item) => {
    (item.name.toLowerCase().includes(searchString) ||
      item.status.toLowerCase().includes(searchString) ||
      item.gender.toLowerCase().includes(searchString) ||
      item.species.toLowerCase().includes(searchString)
    )
    return filteredItem;
  })
}


