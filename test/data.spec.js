//teste função sort/ordenar filmes
import { filmOrder } from '../src/data.js';

describe("filmOrder ordena uma lista de filmes", () => {
  it("deve ordenar os filmes mais novos", () => {
    const naoOrdenado = [
      {release_date: "1992"},
      {release_date: "2002"},
    ]
    const select = "newer"
    const ordenado = filmOrder(naoOrdenado, select);

    expect (ordenado[0].release_date).toBe("2002");
  })
})

describe("filmOrder ordena uma lista de filmes", () => {
  it("deve ordenar os filmes mais avaliados", () => {
    const naoOrdenado = [
      {rt_score: "89"},
      {rt_score: "95"},
    ]
    const select = "score"
    const ordenado = filmOrder(naoOrdenado, select);

    expect (ordenado[0].rt_score).toBe("95");
  })
})

describe("filmOrder ordena uma lista de filmes", () => {
  it("deve ordenar os filmes menos avaliados", () => {
    const naoOrdenado = [
      {rt_score: "95"},
      {rt_score: "89"},
    ]
    const select = "lowerscore"
    const ordenado = filmOrder(naoOrdenado, select);

    expect (ordenado[0].rt_score).toBe("89");
  })
})