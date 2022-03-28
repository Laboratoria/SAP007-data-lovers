import { selectType, sortAZ} from '../src/data.js';


describe('selectType', () => {
  describe('Verificar a função que filtra por tipo', () => {
    it('Verificar se é uma função', () => {
      expect(typeof searchFilter).toBe('function');
    });
    it('Quando usuário colocar o valor, retornar posição da array correta', () => {
      const typePokemon = 'water';
      const result = searchFilter(arrayTest, typePokemon);
      expect(result).toStrictEqual(typeWater)
    });
  })
})

describe('sortAZ', () => {
  describe('Realizar testes no campo de ordenação', () => {
    it('Verificar se é uma função', () => {
      expect(typeof crescent).toBe('function');
    });
    it('Quando o usuário acionar a função, devolve ordenado por nome (ABC)', () => {
      expect(crescent(arrayTest)).toBe(arrayTest);
    });
  })
});
