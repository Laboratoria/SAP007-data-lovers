import { describe } from "eslint/lib/rule-tester/rule-tester";
import {
  filtroDataDiretor,
  ordenaçãoDataFilmes,
  pesquisaDataTítulo,
} from "../src/js/data";

const filmes = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    release_date: "1986",
    rt_score: "95",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    release_date: "1995",
    rt_score: "91",
  },
];

const filmesDesordenados = [
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    release_date: "1995",
    rt_score: "91",
  },
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    release_date: "1986",
    rt_score: "95",
  },
];

describe("Testar filtro por diretor", () => {
  it("should return 2 films", () => {
    const filmesFiltrados = filtroDataDiretor(filmes, "Hayao Miyazaki");
    expect(filmesFiltrados).toHaveLength(2);
  });

  it("should return movies from director Hayao Miyazaki", () => {
    const miyazakiFilmes = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
    ];
    const filmesFiltrados = filtroDataDiretor(filmes, "Hayao Miyazaki");
    expect(filmesFiltrados).toEqual(miyazakiFilmes);
  });
});

describe("Testar ordenação pelo título do filme", () => {
  it("should sort by title", () => {
    const filmesOrdenados = ordenaçãoDataFilmes(filmesDesordenados, "A-Z");
    expect(filmesOrdenados).toEqual(filmes);
  });
});

describe("Testar pesquisa de filme", () => {
  it("should search by full title", () => {
    const filmesPesquisados = pesquisaDataTítulo(filmes, "Castle in the Sky");
    expect(filmesPesquisados).toHaveLength(1);
    expect(filmesPesquisados[0]).toEqual(filmes[0]);
  });

  it("should search by partial title", () => {
    const filmesTituloParcial = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
    ];
    const filmesPesquisados = pesquisaDataTítulo(filmes, "the");
    expect(filmesPesquisados).toHaveLength(2);
    expect(filmesPesquisados).toEqual(filmesTituloParcial);
  });
});