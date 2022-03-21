import { describe, it } from "eslint/lib/rule-tester/rule-tester";
import {
  recuperarFilmes,
  buscarFilmesPorDiretor,
  buscarFilmesPorDataLancamento,
  recuperarPersonagens,
  buscarPersonagensPorOrdemAlfabetica,
  recuperarPorcentagemDeFilmes,
  buscarPersonagensPorGenero,
  buscarPersonagensPorEspecie,
  buscarFilmesPorPopularidade,
  buscarNomesDiretores,
  buscarEspeciesPersonagens,
  buscarGenerosPersonagens,
  recuperarPorcentagemDePersonagens,
  pesquisarFilmesPorNome,
  pesquisarPersonagensPorNome
} from "../src/js/data";

describe("Filmes", () => {
  it("É esperado retornar 20 filmes", () => {
    const filmes = recuperarFilmes();
    expect(filmes).toHaveLength(20);
  });

  it("Filtra filmes por diretor", () => {
    const filmes = buscarFilmesPorDiretor("Hiromasa Yonebayashi");
    expect(filmes).toHaveLength(2);
  });

  it("Recuperar nome dos diretores", () => {
    const nomes = buscarNomesDiretores();
    expect(nomes).toHaveLength(6);
  });

  it("Filtra filmes por data de lançamento", () => {
    const filmes = buscarFilmesPorDataLancamento("1986");
    expect(filmes[0].title).toEqual("Castle in the Sky");
  }); 

  it("Filtra filmes por data de lançamento 2", () => {
    const filmes = buscarFilmesPorDataLancamento("1986");
    expect(filmes[0].title).not.toEqual("Castle in the Sky 2");
  });

  it("Filtra filmes por data de lançamento 3", () => {
    const filmes = buscarFilmesPorDataLancamento("1996");
    expect(filmes[0]).toEqual(undefined);
  });

  it("Pesquisar filme por nome", () => {
    const filmes = pesquisarFilmesPorNome("kik");
    expect(filmes[0].title).toEqual("Kiki's Delivery Service");
  });
});

describe("Personagens", () => {
  it("É esperado retornar 171 personagens", () => {
    const personagens = recuperarPersonagens();
    expect(personagens).toHaveLength(171);
  });

  it("Filtra por ordem alfabetica", () => {
    const personagens = buscarPersonagensPorOrdemAlfabetica(true);
    expect(personagens[0].name.charAt(0)).toEqual("A");
  });
  
  it("Filtra por ordem alfabetica 2", () => {
    const personagens = buscarPersonagensPorOrdemAlfabetica(false);
    expect(personagens[0].name.charAt(0)).toEqual("Ō");
  });

  it("Filtra por popularidade", () => {
    const personagens = buscarFilmesPorPopularidade(false);
    expect(personagens[0].title).toEqual("Only Yesterday");
  });

  it("Filtra por popularidade 2", () => {
    const personagens = buscarFilmesPorPopularidade(true);
    expect(personagens[0].title).toEqual("Tales from Earthsea");
  });

  it("Buscar personagens por gênero", () => {
    const personagens = buscarPersonagensPorGenero("Male");
    expect(personagens).toHaveLength(87);
  });
  
  it("Buscar personagens por espécie", () => {
    const personagens = buscarPersonagensPorEspecie("Cat");
    expect(personagens).toHaveLength(9);
  });

  it("Recuperar especies dos personagens", () => {
    const especies = buscarEspeciesPersonagens();
    expect(especies).toHaveLength(21);
  });

  it("Recuperar genero dos personagens", () => {
    const especies = buscarGenerosPersonagens();
    expect(especies).toHaveLength(4);
  });

  it("Pesquisar personagem por nome", () => {
    const personagens = pesquisarPersonagensPorNome("tsu");
    expect(personagens).toHaveLength(17);
  });
});

describe("Calculo agregado", () => {
  it("Recuperar porcentagem de filmes", () => {
    const filmes = buscarFilmesPorDiretor("Hayao Miyazaki");
    const porcentagemDeFilmes = recuperarPorcentagemDeFilmes(filmes.length);
    expect(porcentagemDeFilmes).toEqual("Exibindo 9 de 20 (45%)");
  });

  it("Recuperar porcentagem de personagens", () => {
    const porcentagemDePersonagens = recuperarPorcentagemDePersonagens(1);
    expect(porcentagemDePersonagens).toEqual("Exibindo 1 de 171 (0.58%)");
  });
});