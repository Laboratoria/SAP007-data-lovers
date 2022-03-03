import data from './data/ghibli/ghibli.js';

const getElement = (movie) => {
	const element = `
  	<div class="item">
			<div class="img-te" href="/filme">
				<a href="/selectfilm" target="_blank">
					<img src="${movie.poster}" />
				</a>
      </div>
    </div>
  `;
  
  return element;
}

export const printMovies = () => {
  data.films.forEach((item) => {
		document.querySelector('.list').innerHTML += getElement(item);
	});
};

// export const printMovies = () => {
//   data.films.forEach((item) => {
// 		document.querySelector('.list').innerHTML += getElement(item);
// 		item.people.forEach((person) => {
// 			console.log(`Filme: ${item.title}| pessoa: ${person.name}`);
// 		});
// 	});
// };

// const getElement2 = (movie) => {
// 	const element = `
// 		<div class="item">
// 			<p class="film">${movie.title}</p>
// 		</div>
//   `;
  
//   return element;
// }

// export const ordemMovies = () => {
//   data.films.forEach((item) => {
// 		document.querySelector('.ordem').innerHTML += getElement2(item);
// 	});
// };


// const id = "112c1e67-726f-40b1-ac17-6974127bb9b9";
// const movie = data.films.find((movie) => {
// 	return movie.id === id
// });
// document.querySelector('.specific').innerHTML = getElement(movie);

export const filmFilter = (data, select) => {
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
}