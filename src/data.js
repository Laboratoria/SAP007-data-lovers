//filtros dos filmes
export const sortAz = (data, order) => {
  if (order === "A-Z") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1);
  } else {
    return data.sort((a, z) => a.title > z.title ? -1 : 1);
  }
};


export const filterTitle = (films, selectedFilm) => {
  return films.filter(film => film.title === selectedFilm)
};

export const filterRating = (films, selectedRating) => {
  return films.filter(film => film.rt_score === selectedRating)

};

export const filterProducer = (films, selectedProducer) => {
  return films.filter(film => film.producer === selectedProducer)
};

//FILTROS PERSONAGENS

export const sortAzPersons = (data, order) => {
 
  if (order == "A-Z") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1);
  }
};



export const filterSpecie = (films, selectedSpecie) => {
  return films.filter(person => person.specie === selectedSpecie);    
}; 

export const filterGender = (films, selectedGender) => {
  return films.filter(person => person.gender === selectedGender);    
}; 

