export const ascAlphabeth = (data) => data.sort((a, b) =>
  ((a.name > b.name) ? 1 : -1));

export const descAlphabeth = (data) => data.sort((a, b) =>
  ((a.name > b.name) ? -1 : 1));


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

export const nameFilter = (allCharacters, searchByName) => allCharacters.filter(character => {
  return character.name.toLowerCase().includes(searchByName.toLowerCase());
});

export const calculator =  (allCharacters, categoryResult) => {
  const percentage = Math.round((categoryResult * 100) / allCharacters);
  return percentage;
};
