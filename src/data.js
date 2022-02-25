export const filterDataByDirector = (films, condition) => {
    return films.filter(film => film.director.includes(condition))
        
}

export const filterDataByProducer = (films, condition) =>{
    return films.filter(film => (film.producer.includes(condition)))
    
}
   
  export const sortDataPeople = (people, order) =>{
    if (order === "az"){
        return people.sort((a,b)=>a.name > b.name ? 1: -1)
    }else{
        return people.sort((a,b)=>a.name > b.name ? -1: 1)
    }
};
  console.log(sortDataPeople);