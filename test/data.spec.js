import { sortAz, filterTitle } from '../src/data.js';


describe('ordenar de A a Z', () => {
  it('is a function', () => {
    expect(typeof sortAz).toBe('function');
  });

  it('returns `example`', () => {
    expect(sortAz()).toBe('example');
  });
});


describe('filtrar por título', () => {
  it('is a function', () => {
    expect(typeof filterTitle).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(filterTitle()).toBe('OMG');
  });
});
