import { describe } from "eslint/lib/rule-tester/rule-tester";
import {
  filtroDataDiretor,
  ordenaçãoDataFilmes,
  pesquisaDataTítulo,
  filtroDataEspécie,
  ordenaçãoDataPersonagens,
  pesquisaDataNome
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

const personagens = [
  {
    name: "Aiko",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Heen",
    gender: "Male",
    specie: "Dog",
  },
  {
    name: "Pazu",
    gender: "Male",
    specie: "Human",
  },
];

const personagensDesordenados = [
  {
    name: "Pazu",
    gender: "Male",
    specie: "Human",
  },
  {
    name: "Heen",
    gender: "Male",
    specie: "Dog",
  },
  {
    name: "Aiko",
    gender: "Female",
    specie: "Human",
  },
];

describe("Testar filtro por espécie", () => {
  it("should return 2 characters", () => {
    const personagensFiltrados = filtroDataEspécie(personagens, "Human");
    expect(personagensFiltrados).toHaveLength(2);
  });

  it("should return human characters", () => {
    const personagensHumanos = [
      {
        name: "Aiko",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
    ];
    const personagensFiltrados = filtroDataEspécie(personagens, "Human");
    expect(personagensFiltrados).toEqual(personagensHumanos);
  });
});

describe("Testar ordenação pelo nome do personagem", () => {
  it("should sort by name", () => {
    const personagensOrdenados = ordenaçãoDataPersonagens(personagensDesordenados, "A-Z");
    expect(personagensOrdenados).toEqual(personagens);
  });
});

describe("Testar pesquisa de nome", () => {
  it("should search by full name", () => {
    const nomesPesquisados = pesquisaDataNome(personagens, "Pazu");
    expect(nomesPesquisados).toHaveLength(1);
    expect(nomesPesquisados[0]).toEqual(personagens[2]);
  });

  it("should search by partial name", () => {
    const personagensNomeParcial = [
      {
        name: "Heen",
        gender: "Male",
        specie: "Dog",
      },
    ];
    const nomesPesquisados = pesquisaDataNome(personagens, "He");
    expect(nomesPesquisados).toHaveLength(1);
    expect(nomesPesquisados).toEqual(personagensNomeParcial);
  });
});