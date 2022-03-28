
export const ordemNameAA = (data) => data.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  return 0;
});

export const ordemNameBB = (data) => data.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
});

export const filterStatus = (data, value) => {

return data.filter((item) => {
  let carD = item.status === value
  return carD
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
  let statS = numero/numero2 * 100;
  let estatistica = `${statS.toFixed(1)}% dos personagens corresponde a categoria escolhida`
  return estatistica
}
