export const filterData = (dataGhibli, condition) => {
    const filterDirector = dataGhibli.films.filter(film => (film.director.includes(condition)))
    console.log(filterDirector)


}
export const filterDataDois = (dataGhibli, condition) => {
    const filterProducer = dataGhibli.films.filter(film => (film.producer.includes(condition)))
    console.log(filterProducer)
}




//const filterData = (data, prop, name) => {
//const filterData = data.filter(data => data[prop] === name)
//  return filterData;
//};