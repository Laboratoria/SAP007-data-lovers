export const ascAlphabeth = (data) => data.sort((a,b) =>
((a.name > b.name) ? 1: -1));

export const descAlphabeth = (data) => data.sort((a,b) =>
  ((a.name > b.name) ? -1: 1));


  export const statusFilter = (allCharacters, statusOption) => {
    //console.log (allCharacters, statusOption);
    return allCharacters.filter(character => character.status === statusOption)
  };

  export const speciesFilter = (allCharacters, speciesOption) => {
     return allCharacters.filter(character => character.species === speciesOption)
  };

  export const genderFilter = (allCharacters, genderOption) => {
   return allCharacters.filter(character => character.gender === genderOption)
};
