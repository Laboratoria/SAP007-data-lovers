export const filterDataByDirector = (films, condition) => {
    return films.filter(film => film.director.includes(condition))
}

export const filterDataByProducer = (films, condition) => {
    return films.filter(film => (film.producer.includes(condition)))
}


export const filterByPeople = (films, condition) => {

    for (let i = 0; i < films.length; i++) {
        let peoples = films[i].people
        peoples.filter()(people => (people.gender.includes(condition)))
    }

}

export const sortDataFilms = (films, order) => {
    if (order === "az") {
        return films.sort((a, b) => a.title > b.title ? 1 : -1)
    } else {  
        return films.sort((a, b) => a.title > b.title ? -1 : 1)
        }
}
