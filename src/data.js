<<<<<<< HEAD


=======
//data tem q ser um array de objetos e
>>>>>>> 7007c254acb3faa0fb5b80a74c52b96258976ffd
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



