import { buscarNome, buscarEspecie, sortOrdem, calculos} from '../src/data.js';

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
  {"name": "Bearded Lady"},
  {"name": "Rick Sanchez"},
  {"name": "Morty Smith"},
  {"name": "Boobloosian"},
]

/////////////////////////TESTE PARA CAMPO DE BUSCA NOME
describe('buscarNome', () => {
  it('Deverá ser uma função', () => {
    expect(typeof buscarNome).toBe('function');
  });
  it('Deverá buscar por um nome', () => {
    const expected = buscarNome(nomes, 'banana')
    expect (expected).toEqual([])
  });
  it('Deverá buscar por um nome', () => {
    const expected = buscarNome(nomes, 'Rick')
    expect (expected).toEqual([{"name": "Rick Sanchez"}])
  });
});

/////////////////////TESTE PARA FILTRAR A ESPÉCIE 
describe('buscarEspecie', () => {
  it('Deverá ser uma função', () => {
  expect(typeof buscarEspecie).toBe('function');
});

it('Deverá filtrar pela espécie Alien', () => {
  const especieAlien = "Alien"
  const expected = buscarEspecie(dados, especieAlien)
  expect (expected.length).toEqual(2)
  expect (expected[0].species).toEqual(especieAlien)
  expect (expected[1].species).toEqual(especieAlien)
  });
});

/////////////////////TESTE PARA ORDENAÇÃO ALFABÉTICA
describe('sortOrdem', () => {
  it('Deverá ser uma função', () => {
  expect(typeof sortOrdem).toBe('function');
});

  it('Deverá retornar em ordem A-Z', () => {
    expect(sortOrdem(nomes, "a-z")).toEqual([nomes[0], nomes[3], nomes[2], nomes[1]]);
  });
  it('Deverá retornar em ordem Z-A', () => {
    expect(sortOrdem(nomes, "z-a")).toEqual([nomes[1], nomes[2], nomes[3], nomes[0]]);
  });
});

/////////////////////TESTE PARA CALCULAR A PORCENTAGEM
describe('calculos', () => {
  it('Deverá ser uma função', () => {
  expect(typeof calculos).toBe('function');
});

it('Deverá retornar 50% de personagens masculinos', () => {
  const expected = calculos(dados.length, 2)
  expect (expected).toEqual(50)
  });
});

