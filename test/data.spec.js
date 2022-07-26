import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { ordemNameAA, ordemNameBB, filterStatus, filtroespecie, filterGender, calculo } from '../src/data.js';

const personagensteste = [
  {
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Bootleg Portal Chemist Rick",
    status: "Dead",
    species: "Human",
    gender:"Male",
  },
  {
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  }
]


describe("filterStatus", () => {
  it("filterStatus filtrar vivos" ,() => {
    const expected = filterStatus(personagensteste, "Alive");
    expect(expected).toEqual([
      {
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        gender: "Female",
      },
    ]);

describe('functon ordernar a a z', () => {
  it('ordenar de A a Z', () => {
    expect(typeof ordemNameAA).toBe('function');

  });

  describe("filtroespecie", () => {
    it("filtroespecie filtrar humanos", () => {
      const expected = filtroespecie(personagensteste, "Human");
      expect(expected).toEqual([
        {
          name: "Abradolf Lincler",
          status: "unknown",
          species: "Human",
          gender: "Male",
        },
        {
          name: "Adjudicator Rick",
          status: "Dead",
          species: "Human",
          gender: "Male",
        },
        {
          name: "Bootleg Portal Chemist Rick",
          status: "Dead",
          species: "Human",
          gender:"Male",
        },
        {
          name: "Summer Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
        },
      ]);
    });
  });

  describe("filterGender", () => {
    it("filterGender filtrar mulheres", () => {
      const expected = filterGender(personagensteste, "Female");
      expect(expected).toEqual([
        {
          name: "Summer Smith",
          status: "Alive",
          species: "Human",
          gender: "Female",
        },
      ]);
    });
  });

  describe('ordemNameAA', () => {
    it("ordemNameAA deve ordenar de A a Z", () => {
      const naoordenado = [
        { name: "Rick Sanchez" },
        { name: "Jerry Smith" },
        { name: "Antenna Morty" }
      ]
      const ordenado = ordemNameAA(naoordenado)
      expect(ordenado).toEqual([
        { name: "Antenna Morty" },
        { name: "Jerry Smith" },
        { name: "Rick Sanchez" }
      ])
    })
  });

  describe('ordemNameBB', () => {
    it("ordemNameBB deve ordenar de Z a A", () => {
      const naoordenado = [
        { name: "Rick Sanchez" },
        { name: "Jerry Smith" },
        { name: "Antenna Morty" }
      ]
      const ordenado = ordemNameBB(naoordenado)
      expect(ordenado).toEqual([
        { name: "Rick Sanchez" },
        { name: "Jerry Smith" },
        { name: "Antenna Morty" }
      ])
    })
  });
})

describe('calculo', () => {
  it("retorna 75% dos personagens machos", () => {
    const calculoPorce = calculo(personagensteste.length, 3);
    expect(calculoPorce).toEqual(75);
  })
})
  })
})
