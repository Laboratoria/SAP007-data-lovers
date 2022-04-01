export const filterDataByDirector = (films, condition) => {
    return films.filter((film) => film.director.includes(condition));
};

export const filterDataByProducer = (films, condition) => {
    return films.filter((film) => film.producer.includes(condition));
};

export const getPeopleByFilmTitleByGender = (
    films,
    filmSelected,
    genderSelected
) => {
    const filteredFilms = films
        .filter((f) => (filmSelected ? f.title.includes(filmSelected) : true))
    const filteredPeople = filteredFilms
        .map(f => {
            return f.people.filter((p) =>
                genderSelected ?
                p.gender.includes(genderSelected) :
                true
            );
        })
        .flat()

    return filteredPeople;


};

// export const filterFilmByCharacters = (films, filmSelected) => {
//   return films.filter((film) => film.title.includes(filmSelected));
// };

export const sortDataFilms = (films, order) => {
    if (order === "A - Z") {
        return films.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else return films.sort((a, b) => (a.title < b.title ? 1 : -1));
};

export const calculateAverageScore = (score) => {
    const resultado = score.reduce((acumulador, item) => {
        acumulador = acumulador + item;
        return acumulador;
    }, 0);
    return resultado / score.length;
};