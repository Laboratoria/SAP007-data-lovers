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

<<<<<<< HEAD
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
=======
  describe('Realizar testes no campo de ordenação', () => {
    it('Verificar se é uma função', () => {
      expect(typeof sortAZ).toBe('function');
    });
    it('Quando o usuário acionar a função, devolve ordenado por nome (ABC)', () => {
      expect(sortAZ(arrayTest)).toBe(arrayTest);
    });
  })
 
>>>>>>> 1e3b3b19c0bb50ef82d01802b44bf43f3c138a08
