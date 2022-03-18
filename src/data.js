
 //Filtro por nome de atleta 

  
  export const filterAth = (athletes, name) => { 
    return athletes.filter(atleta => {
    return atleta.name.toLowerCase().includes (name.toLowerCase())
    });
  }
//Filtro por medalha

export const filterMedal =  (athletes, medal) => {
  return athletes.filter(medalha => {
    return medalha.medal === (medal)
  });
}
//Filtro por esporte

export const filterSport =  (athletes, sport) => {
  return athletes.filter(esporte => {
    return esporte.sport === (sport)
  });
}

//Ordenação de A-Z e Z-A

export const AZsort = (athletes, selectSort) => {
  if (selectSort === "A-Z"){
    return athletes.sort((a, b) => {
      const AlphabetA = a.name.toUpperCase();
      const AlphabetZ = b.name.toUpperCase();
      if (AlphabetA < AlphabetZ){
        return -1;
      }
      if (AlphabetA > AlphabetZ){
        return 1;
      }
      return 0;
      
    });
   } else {
    return athletes.sort((a, b) => {
      const AlphabetA = a.name.toUpperCase();
      const AlphabetZ = b.name.toUpperCase();
      if (AlphabetA < AlphabetZ){
        return 1;
      }
      if (AlphabetA > AlphabetZ){
        return -1;
      }
      return 0;
      
    });
   }
  }

 
export const sortCountry = (athletes, selectCountry) => {
  if (selectCountry === "a-z"){
    return athletes.sort((a, z) => {
      const countryA = a.team.toUpperCase();
      const countryZ = z.team.toUpperCase();
      if (countryA < countryZ) {
        return -1;
      }
      if (countryA > countryZ) {
        return 1;
      }
      return 0;
    });
  } else {
    return athletes.sort((a, z) => {
      const countryA = a.team.toUpperCase();
      const countryZ = z.team.toUpperCase();
      if (countryA < countryZ) {
        return 1;
      }
      if (countryA > countryZ) {
        return -1;
      }
      return 0;
    });
  }
}

