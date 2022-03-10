import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { sortAz, filterTitle, filterRating, filterProducer, sortAzPersons, filterSpecie, filterGender } from '../src/data.js';

const objFilmes = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
  }
]

describe('teste sortAz filmes', () => {
  it('is a function', () => {
    expect(typeof sortAz).toBe('function');
  });

  it('retorne a ordenação A-Z', () => {
    let resposta = [objFilmes[0], objFilmes[2], objFilmes[1]];
    expect(sortAz(objFilmes, "A-Z")).toEqual(resposta);
  });

  it('retorne a ordenação Z-A', () => {
    let resposta = [objFilmes[1], objFilmes[2], objFilmes[0]];
    expect(sortAz(objFilmes, "Z-A")).toEqual(resposta);
  });
});

describe('teste filterTitle', () => {
  it('is a function', () => {
    expect(typeof filterTitle).toBe('function');
  });

  it('retorne a filtragem dos títulos', () => {
    let retorno = [objFilmes[1]];
    expect(filterTitle(objFilmes, "My Neighbor Totoro")).toEqual(retorno);
  });

});

describe('teste filterRating', () => {
  it('is a function', () => {
    expect(typeof filterRating).toBe('function');
  });

  it('retorne a filtragem dos pontuação', () => {
    let retorno = [objFilmes[1]];
    expect(filterRating(objFilmes,"93")).toEqual(retorno);
  });

});

describe('teste filterProcucer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('retorne a filtragem dos Produtores', () => {
    let retorno = [objFilmes[1], objFilmes[2]];
    expect(filterProducer(objFilmes, "Hayao Miyazaki")).toEqual(retorno)
  });
});


// testes da página de personagens

const objCharacters = [
  {
    "name": "Pazu",
    "gender": "Male",
    "specie": "Human"
  },
  {
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "specie": "Human"
  },
  {
    "name": "Dola",
    "gender": "Female",
    "specie": "Human"
  }
]

describe('test sortAz characters', () => {
  it('is a function', () => {
    expect(typeof sortAzPersons).toBe('function');
  });

  it('retorne a ordenação A-Z dos personagens', () => {
    let resposta = [objCharacters[2], objCharacters[1], objCharacters[0]];
    expect(sortAzPersons(objCharacters, "A-Z")).toEqual(resposta);
  });

  it('retorne a ordenação Z-A dos personagens', () => {
    let resposta = [objCharacters[0], objCharacters[1], objCharacters[2]];
    expect(sortAzPersons(objCharacters, "Z-A")).toEqual(resposta);
  });
});


describe('teste filterPersonSpecie', () => {
  it('is a function', () => {
    expect(typeof filterSpecie).toBe('function');
  });

  it('retorne a filtragem das espécies dos personagens', () => {
    let retorno = [objCharacters[0], objCharacters[1], objCharacters[2]];
    expect(filterSpecie(objCharacters, "Human")).toEqual(retorno);
  });
});

describe('teste filterPersonGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('retorne a filtragem dos gêneros dos personagens', () => {
    let retorno = [objCharacters[1], objCharacters[2]];
    expect(filterGender(objCharacters, "Female")).toEqual(retorno);
  });
});