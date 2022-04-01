import { selectType } from '../src/data.js';

describe('selectType, () => {
  it('Deve ser uma função', () => {
    expect(typeof selectType).toBe('function');
  });

  it('Deve retornar pokemons do tipo "bug"', () => {
    const pokemons = [
      {"num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ]},

      {"num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]},

      {"}num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let buscartipo = "bug"
    const tipo= selectType (buscartipo, pokemons);
    expect(tipo[0].name).toEqual("caterpie")
 
  });
});