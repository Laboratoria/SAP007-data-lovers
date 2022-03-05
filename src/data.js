// FILTRO PARA BUSCAR PELO NOME DO FILME
export const searchName = (data, animantion) => 
data.filter(item => item.title.toUpperCase().includes(animantion.toUpperCase()))
console.log(searchName);


//FILTRO PARA BUSCAR O FILME POR ORDEM ALFABÉTICA
export const filterSort = (data, title) => {
  console.log(title);
  if(title === "a-z") {
    return data.sort((a, b) => (a.title > b.title ? 1 : -1));
} else {
  return data.sort((a, b) => (a.title > b.title? -1 : 1));
  }
}

//FILTRO DE SELECIONAR O TÍTULO POR DIRETOR
export const directorFilter = (animation, selectedValue) => {
  return animation.filter(films => films.director.includes(selectedValue));
}  