import {
  filtroSpecies,
  filtroStatus,
  filtroGenero,
  filtroOrder,
  filtroName,
  calculoPorcentagem } from '../src/data.js';

const dados = [
  {
    "name": "Bearded Lady",
    "status": "Dead",
    "species": "Alien",
    "gender": "Female",
  },
  {
    "name": "Boobloosian",
    "status": "Dead",
    "species": "Alien",
    "gender": "unknown",
  },
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  }
];

const nomes = [
  { name: "Rich Plutonian" },
  { name: "Cronenberg Morty" },
  { name: "Doom-Nomitron" },
  { name: "Million Ants" },
  { name: "Synthetic Laser Eels" },
  { name: "Hamster In Butt" },
];

const resultSortAz = [
  { name: "Cronenberg Morty" },
  { name: "Doom-Nomitron" },
  { name: "Hamster In Butt" },
  { name: "Million Ants" },
  { name: "Rich Plutonian" },
  { name: "Synthetic Laser Eels" },
];

const resultSortZa = [
  { name: "Synthetic Laser Eels" },
  { name: "Rich Plutonian" },
  { name: "Million Ants" },
  { name: "Hamster In Butt" },
  { name: "Doom-Nomitron" },
  { name: "Cronenberg Morty" },
];


describe('filtroSpecies', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroSpecies).toBe('function');
});

it('Deverá filtrar pela espécie Alien', () => {
  const expected = filtroSpecies(dados,"Alien","species");
  expect (expected[1].species).toEqual("Alien");
  expect (expected[0].species).toEqual("Alien");
  });
});

describe('filtroStatus', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroStatus).toBe('function');
});

it('Deverá filtrar pelo status Dead', () => {
  const expected = filtroStatus(dados, "Dead","status");
  expect (expected[1].status).toEqual("Dead");
  expect (expected[0].status).toEqual("Dead");
  });
});

describe('filtroGenero', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroGenero).toBe('function');
});

it('Deverá filtrar pelo genero Male', () => {
  const expected = filtroGenero(dados, "Male","gender");
  expect (expected[1].gender).toEqual("Male");
  expect (expected[0].gender).toEqual("Male");
  });
});

describe('filtroOrder', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filtroOrder).toBe('function');
});

it('Deverá ordernar de `a-z`', () => {
  const sortExpect = filtroOrder(nomes, "A-Z");
  expect(sortExpect).toStrictEqual(resultSortAz);
});
it('Deverá ordernar  de `z-a`', () => {
  const sortExpectZa = filtroOrder(nomes, "Z-A");
  expect(sortExpectZa).toStrictEqual(resultSortZa);
});
});

describe('filtroName', () => {
  it('deverá ser uma função', () => {
    expect(typeof filtroName).toBe('function');
  });

  it('deverá achar o personagem pelo nome', () => {
    const searchExpect = filtroName(dados, "Morty Smith");
    const resultSearch = [{
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    }]
    expect(searchExpect).toEqual(resultSearch);
  });
});


describe('calculoPorcentagem', () => {
  it('Deverá ser uma função', () => {
    expect(typeof calculoPorcentagem).toBe('function');
  });

  it("Deverá retornar a porcentagem dos personagens mortos", () => {
    const expected = calculoPorcentagem(dados.length, 2);
    expect(expected).toEqual(50);
});
});