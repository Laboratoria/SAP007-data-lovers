import { statusFilter, genderFilter } from '../src/data.js';

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

  it('returns Alive for `Modern Rick`', () => {
    expect(statusFilter(characteres)).toBe(Alive);
  });
});


describe('genderFilter', () => {
  it('deverá ser uma função', () => {
    expect(typeof genderFilter).toBe('function');
  });

it('returns Male for `Rick Sanchez`', () => {
    expect(genderFilter(characteres, "name")).toBe(Male);
  });
});
