//teste função sort/ordenar filmes
import { filmFilter } from '../src/data.js';


describe('orderMovies', () => {
  it('is a function', () => {
    expect(typeof filmFilter).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
