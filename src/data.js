export const filterDataByDirector = (films, condition) => {
    return films.filter(film => film.director.includes(condition))
}

export const filterDataByProducer = (films, condition) => {
    return films.filter(film => (film.producer.includes(condition)))
}


export const filterFilmByCharactersByGender = (films, filmSelected, genderSelected) => {
    const filmSelectedes = films.filter(film => (film.title.includes(filmSelected)))
    for (let i = 0; i < filmSelectedes.length; i++) {
        let film = filmSelectedes[i]
        return film.people.filter(people => (people.gender.includes(genderSelected)))
    }
}

export const filterFilmByCharacters = (films, filmSelected) => {
    return films.filter(film => (film.title.includes(filmSelected)))
}


// export const findMovie = (dataGhibli, searchInput) => {
//     return dataGhibli.filter((films) => films.title.toLowerCase().includes(searchInput.toLowerCase()));
// }




export const sortDataFilms = (films, order) => {

    if (order === "A - Z") {
        return films.sort((a, b) => a.title > b.title ? 1 : -1)
    } else {
        return films.sort((a, b) => a.title > b.title ? -1 : 1)
    }
}