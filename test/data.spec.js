import { ordemNameAA, ordemNameBB, filterStatus } from '../src/data.js';

const personagensteste = [
  { "name": "Abradolf Lincler",
    "status": "unknown",
   "species": "Human",
  },
  {"name": "Adjudicator Rick",
  "status": "Dead",
  "species": "Human",
  },

  { "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",}
]

describe("filterStatus", () => {
  it("filterStatus filtrar vivos", () => {
    const expected = filterStatus(personagensteste, "Alive");
    expect(expected).toEqual([
      {
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
      },
    ]);
  });


describe('ordemNameAA', () => {
it("ordemNameAA deve ordenar de A a Z", () => {
  const naoordenado = [
    {name: "Rick Sanchez"},
    {name: "Jerry Smith"},
    {name: "Antenna Morty"}
  ]
  const ordenado = ordemNameAA(naoordenado)
  expect(ordenado).toEqual([
    {name: "Antenna Morty"},
    {name: "Jerry Smith"},
    {name: "Rick Sanchez"}
  ])
})
});

describe('ordemNameBB', () => {
  it("ordemNameBB deve ordenar de Z a A", () => {
    const naoordenado = [
      {name: "Rick Sanchez"},
      {name: "Jerry Smith"},
      {name: "Antenna Morty"}
    ]
    const ordenado = ordemNameBB(naoordenado)
    expect(ordenado).toEqual([
      {name: "Rick Sanchez"},
      {name: "Jerry Smith"},
      {name: "Antenna Morty"}
    ])
  })
  });
})
