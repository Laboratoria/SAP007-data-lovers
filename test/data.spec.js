import { filterCharacter, sortNamesFilter, searchName, stats } from '../src/data.js';
const charactersMock = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male"
  },
  {
    "id": 17,
    "name": "Annie",
    "status": "Alive",
    "species": "Human",
    "gender": "Female"
  },
  {
    "id": 131,
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "type": "Zombodian",
    "gender": "Male"
  },
  {
    "id": 485,
    "name": "Modern Rick",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male"
  }
]

describe('data.filterCharacter', () => {
  it('deverá ser uma função', () => {
    expect(typeof filterCharacter).toBe('function');
  });

  it('deverá filtrar os personagens pelo Status', () => {
    const statusExpect = filterCharacter(charactersMock, "Alive", "status");
    expect(statusExpect[0].name).toEqual("Rick Sanchez");
    expect(statusExpect[1].name).toEqual("Annie");
    expect(statusExpect[2].name).toEqual("Modern Rick");
  });
});

describe('filterCharacter', () => {
  it('deverá ser uma função', () => {
    expect(typeof filterCharacter).toBe('function');
  });

  it('deverá filtrar os personagens pelo Gender', () => {
    const genderExpect = filterCharacter(charactersMock, "Male", "gender");
    expect(genderExpect[0].name).toEqual("Rick Sanchez");
    expect(genderExpect[1].name).toEqual("Gar Gloonch");
    expect(genderExpect[2].name).toEqual("Modern Rick");
  });
});
describe('sortNamesFilter', () => {
  it('deverá ser uma função', () => {
    expect(typeof sortNamesFilter).toBe('function');
  });

  const resultSortAz = [
    {
      "id": 17,
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    },
    {
      "id": 131,
      "name": "Gar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Zombodian",
      "gender": "Male"
    },
    {
      "id": 485,
      "name": "Modern Rick",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    }]

  const resultSortZa = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    },
    {
      "id": 485,
      "name": "Modern Rick",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"
    },
    {
      "id": 131,
      "name": "Gar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Zombodian",
      "gender": "Male"
    },
    {
      "id": 17,
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    }]


  it('Deverá ordernar em ordem de `a-z`', () => {
    const sortExpect = sortNamesFilter(charactersMock, "alphabetic");
    expect(sortExpect).toStrictEqual(resultSortAz);
  });
  it('Deverá ordernar em ordem de `z-a`', () => {
    const sortExpectZa = sortNamesFilter(charactersMock, "descending");
    expect(sortExpectZa).toStrictEqual(resultSortZa);
  });
});
describe('searchName', () => {
  it('deverá ser uma função', () => {
    expect(typeof searchName).toBe('function');
  });

  it('deverá achar o personagem pelo nome', () => {
    const searchExpect = searchName(charactersMock, "Gar");
    const resultSearch = [{
      "id": 131,
      "name": "Gar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Zombodian",
      "gender": "Male"
    }]
    expect(searchExpect).toEqual(resultSearch);
  });
});

describe('stats', () => {
  it('deverá ser um objeto', () => {
    expect(typeof stats).toBe('object');
  });

  it('deverá retornar a porcentagem de personagens `Male`', () => {
    const genderStatsExpect = stats.gender(charactersMock, "Male") + "%";
    const genderStatsResult = "75%";
    expect(genderStatsExpect).toEqual(genderStatsResult);
  })
});

it('deverá retornar a porcentagem de personagens `Alive`', () => {
  const statusStatsExpect = stats.status(charactersMock, "Alive") + "%";
  const statusStatsResult = "75%";
  expect(statusStatsExpect).toEqual(statusStatsResult);
});
