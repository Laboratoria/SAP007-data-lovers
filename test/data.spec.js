import { filterDataByDirector, filterDataByProducer, sortDataFilms, filterFilmByCharacters, filterFilmByCharactersByGender, calculateAverageScore } from '../src/data.js';

describe('filtraDataByDirector filtra diretor de acordo com o desejo do usuário', () => {
    it('Deve filtrar filmes por um diretor específico', () => {
        const semFiltro = [
            { director: "Hiromasa Yonebayashi" },
            { director: "Hayao Miyazaki" },
        ]
        const selecionada = "Hayao Miyazaki"
        const comFiltro = filterDataByDirector(semFiltro, selecionada);

        expect(comFiltro[0].director).toBe("Hayao Miyazaki");
    })
})

describe('filtraDataByProducer filtra produtor de acordo com o desejo do usuário', () => {
    it('Deve filtrar filmes por um produtor específico', () => {
        const semFiltro = [
            { producer: "Toshio Suzuki" },
            { producer: "Yoshiaki Nishimura" },
        ]
        const selecionada = "Yoshiaki Nishimura"
        const comFiltro = filterDataByProducer(semFiltro, selecionada);

        expect(comFiltro[0].producer).toBe("Yoshiaki Nishimura");
    })
})

describe('sortDataFilms ordena os filmes de a-z de z-a', () => {
    it('Deve ordenar os títulos dos filmes por ordem alfabética e vice-versa', () => {
        const semOrdenação = [
            { title: "Ponyo on the Cliff by the Sea" },
            { title: "My Neighbor Totoro" },
        ]
        const selecionada = "Z-A"
        const comOrdenação = sortDataFilms(semOrdenação, selecionada);

        expect(comOrdenação[0].title).toBe("Ponyo on the Cliff by the Sea");
    })
})

describe('filterFilmByCharacters filtra os personagens de acordo com o filme', () => {
    it('Deve filtrar os personagens de acordo com o filme', () => {
        const semFiltro = [
            { title: "Princess Mononoke" },
            { name: "Ashitaka" },
        ]
        const selecionada = "Princess Mononoke"
        const comFiltro = filterFilmByCharacters(semFiltro, selecionada);

        expect(comFiltro[0].title).toBe("Ashitaka");
    })
})

describe('filterFilmByCharactersByGender filtra os personagens de acordo com o gênero', () => {
    it('Deve filtrar os personagens de acordo com o gênero', () => {
        const semFiltro = [
            { title: "Porco Rosso" },
            { name: "Porco Rosso" },
            { gender: "Male" },
        ]
        const selecionada = "Porco Rosso"
        const comFiltro = filterFilmByCharactersByGender(semFiltro, selecionada);

        expect(comFiltro[0].people).toBe("Male");
    })
})

describe('calculateAverageScore calcula a média de nota de avaliação dos filmes', () => {
    it('Deve somar as rt-score e depois dividir pela quantidade de filmes', () => {
        const objeto = [
            { rt_score: "95" },
            { rt_score: "93" },
            { rt_score: "96" },
            { rt_score: "100" },
        ]
        const resultado = 384
        const calculo = calculateAverageScore(objeto, resultado);

        expect(calculo).toBe(96);
    })
})