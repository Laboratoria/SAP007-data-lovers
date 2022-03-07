// export const printMovies = () => {
//   data.films.forEach((item) => {
// 		document.querySelector('.list').innerHTML += getElement(item);
// 		item.people.forEach((person) => {
// 			console.log(`Filme: ${item.title}| pessoa: ${person.name}`);
// 		});
// 	});
// };

// função ordenar
export const filmOrder = (data, select) => {
  if (select === "A-Z") {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
	}
	
  if (select === "Z-A") {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
	}
	
  if (select === "older") {
    return data.sort((a, b) => a.release_date > b.release_date ? 1 : -1);
  }

  if (select === "newer") {
    return data.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
  }

  if (select === "score") {
    return data.sort((a, b) => a.rt_score > b.rt_score ? -1 : 1);
	}
	
	if (select === "lowerscore") {
    return data.sort((a, b) => a.rt_score > b.rt_score ? 1 : -1);
  }
}

// função do botão de busca
export const filterMovie = (data, buscaInput) => {
	return data.filter((filme) => filme.title.toLowerCase().includes(buscaInput.toLowerCase()));
}
