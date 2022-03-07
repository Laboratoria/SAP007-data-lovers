import { statusFilter, genderFilter, sortNamesFilter, searchName} from '../src/data.js';

const characteres = [
          {"id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "gender": "Male"},
          {"id": 17,
          "name": "Annie",
          "status": "Alive",
          "species": "Human",
          "gender": "Female" },
          {"id": 131,
          "name": "Gar Gloonch",
          "status": "Dead",
          "species": "Alien",
          "type": "Zombodian",
          "gender": "Male"},
          {"id": 485,
          "name": "Modern Rick",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male"}
]


describe('statusFilter', () => {
  it('deverá ser uma função', () => {
    expect(typeof statusFilter).toBe('function');
  });

  it('deverá retornar a quantidade de personagens `Alive`', () => {
    const status_expect = statusFilter(characteres, "Alive").length;
    const result_status = 3;
    expect(status_expect).toEqual(result_status);
  });
});


describe('genderFilter', () => {
  it('deverá ser uma função', () => {
    expect(typeof genderFilter).toBe('function');
  });

it('deverá retornar a quantidade de personagens `Male`', () => {
   const gender_expect = genderFilter(characteres, "Male").length;
   const result_gender = 3;
    expect(gender_expect).toEqual(result_gender);
  });
});
describe('sortNamesFilter', () => {
  it('deverá ser uma função', () => {
    expect(typeof sortNamesFilter).toBe('function');
  });

  const result_sort_az = [
    {"id": 17,
    "name": "Annie",
    "status": "Alive",
    "species": "Human",
    "gender": "Female" },
    {"id": 131,
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "type": "Zombodian",
    "gender": "Male"},
    {"id": 485,
    "name": "Modern Rick",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male"},
    {"id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male"}]

   const result_sort_za = [
     {"id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"},
      {"id": 485,
      "name": "Modern Rick",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"},
      {"id": 131,
     "name": "Gar Gloonch",
     "status": "Dead",
     "species": "Alien",
     "type": "Zombodian",
     "gender": "Male"},
     {"id": 17,
     "name": "Annie",
     "status": "Alive",
     "species": "Human",
     "gender": "Female"}]


  it('Deverá ordernar em ordem de `a-z`', () => {
    const sort_expect = sortNamesFilter(characteres, "alphabetic");
    expect(sort_expect).toStrictEqual(result_sort_az);
  });
  it('Deverá ordernar em ordem de `z-a`', () => {
    const sort_expect_za = sortNamesFilter(characteres, "descending");
    expect(sort_expect_za).toStrictEqual(result_sort_za);
  });
});
describe('searchName', () => {
  it('deverá ser uma função', () => {
    expect(typeof searchName).toBe('function');
  });

  it('deverá achar o personagem pelo nome', () => {
    const search_expect = searchName(characteres, "Gar");
    const result_search = [{"id": 131,
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "type": "Zombodian",
    "gender": "Male"}]
    expect(search_expect).toEqual(result_search);
  });
});
