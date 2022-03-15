# GHIBLI EXPLORER

![Imagem ghibli](src/img/studio-ghibli.jpg)

## Índice

- [1. Status do projeto](#1-status-do-projeto)
- [2. Acesso](#2-acesso)
- [3. Descrição](#3-descricao)
- [4. Planejamento](#4-planejamento)
- [5. Histórias de usuário](#5-historias-de-usuário)
- [6. Protótipo](#6-prototipo)
- [7. Funcionalidades](#7-funcionalidades)
- [8. Tecnologias utilizadas](#8-tecnologias-utilizadas)
- [9. Pessoas desenvolvedoras](#9-pessoas-desenvolvedoras)
- [10. Referências](#10-referencias)


## 1. Status do projeto

- ![Bagde em desenvolvimento](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green) 

## 2. Acesso

O deploy do projeto foi realizado pelo Git Pages. [Clique aqui](https://elizenai.github.io/SAP007-data-lovers/index.html) para acessá-lo.

### Como usar
Você precisará:

- Instalar o Node.js e clonar o projeto.

- Instalar as dependências:  npm install

- Iniciar a aplicação:  npm start

- Realizar os testes unitários: npm test 

## 3. Descrição

O Studio Ghibli é uma companhia de cinema e animação que conquistou reconhecimento e aclamação internacional pela qualidade de seus vários longas-metragens de animação. Uma curiosidade sobre Hayao Miyazaki, co-fundador da companhia, é que ele normalmente escreve e dirige, sendo amplamente considerado um dos principais nomes da indústria de animação japonesa.

O objetivo do projeto foi construir uma página web onde os usuários pudessem visualizar os cards dos filmes do Studio Ghibli de forma simples e interativa, sendo possível filtrá-los, ordená-los e ter acesso às curiosidades do estúdio e suas animações. Para isso, foram utilizados os dados da [Ghibli API](https://ghibliapi.herokuapp.com/#section/Getting-Started), contidos em um arquivo ".js" somente com o necessário para o desenvolvimento do projeto.

## 4. Planejamento

Escolhemos o [Trello](https://trello.com/b/52ngg64M/data-lovers) como ferramenta para o planejamento.

![Planejamento](src/img/planejamento.JPG)

## 5. Histórias de usuário

Nossa pesquisa para iniciar o projeto foi realizada com pessoas da família que assistem esse tipo de animação, além da Pesquisa com seguidores de Studio Ghibli disponibilizada no projeto.

Abaixo estão as quatro histórias de usuário que motivaram o desenvolvimento do design, paleta de cores, filtros, e demais interatividades do projeto.


- História de usuário 01

-Eu, usuário de sites de anime, quero entrar no site do Studio Ghibli e poder ver todos os nomes das animações. 

_Critérios de aceitação_: Ao entrar na site, o usuário tem acesso à página de filmes, com título e poster em destaque.

_Definição de pronto_: O mapeamento dos objetos da API está retornando todos os cards e títulos corretamente.

- História de usuário 02

-Eu, usuário de sites de anime, quero entrar no site e ter acesso às descrições dos filmes para decidir qual assistir.

_Critérios de aceitação_: Para cada filme foi montado um display contendo poster, título, nome do diretor, ano de lançamento e descrição do filme.

_Definição de pronto_: O mapeamento dos objetos da API está retornando todos os valores necessários para apresentação das informações acima.

- História de usuário 03

-Eu, usuário de sites de anime, quero entrar no site e poder saber se o filme que eu pretendo assistir foi bem aceito.  

_Critérios de aceitação_: Ao entrar no site, o usuário pode utilizar o filtro "Pontuação" e saber quais filmes tem as maiores e menores pontuações.

_Definição de pronto_: A função que está filtrando a pontuação dos filmes passou em 100% dos testes.

- História de usuário 04

-Eu, que sou fã de animes, quero entrar no site da Ghibli e poder ver todos os personagens, saber os tipos ou espécies, e a quantidade que essa categoria representa meio às animações.

_Critérios de aceitação_: Navegando pelo menu no lado superior esquerdo do site, o usuário tem a opção de clicar na pagina de personagens, que contém todas as imagens e nomes dos personagens dos filmes Ghibli. Utilizando o filtro "Espécie",ele pode obter os personagens da espécie selecionada e ao mesmo tempo a quantidade que essa categoria representa meio às animações.

_Definição de pronto_: A função que está filtrando as espécies e calculando o tamanho dessa categoria está passando em 100% dos testes.

- História de usuário 05

-Eu, que sou fã de animes, quero entrar no site da Ghibli e poder ver todos os personagens esaber a quantidade de cada gênero existente.

_Critérios de aceitação_: Na página de personagens, o usuário pode utilizar o filtro "Gênero" e obter os personagens por gênero, bem como a quantidade que cada um representa. 

_Definição de pronto_: A função que está filtrando o gênero e calculando o tamanho dessa categoria está passando em 100% dos testes.
### Testes de usabilidade

Durante o desenvolvimento, fizemos alguns testes com os usuários para que pudessem avaliar a interatividade do site, então decidimos adicionar no canto direito da tela um botão para limpar os filtros antes de fazer uma nova pesquisa.

### Testes unitários

Para os testes unitários, utilizamos as funções Describe e It, da biblioteca do [Jest](https://jestjs.io/pt-BR/docs/using-matchers). Apenas as funções escritas no arquivo data.js foram testadas, pois é neste arquivo que estão os escopos das funções que ordenam e filtram. Essas funções são chamadas na main.js e characters.js para serem executadas com os parâmetros estabelecidos para a pesquisa. 

![Testes](src/img/testes-unitarios.JPG)

## 6. Protótipo

Após algumas pesquisas em sites similares como: sites de desenho animado, jogos, filmes de anime e mesmo o site do [Studio Ghibli Brasil](https://studioghibli.com.br/studioghibli/), desenhamos os protótipos:
#### Protótipo de baixa fidelidade

![Desenho em papel do protótipo de baixa fidelidade](src/img/prototipo1.jpg)
#### Protótipo de alta fidelidade

![Desenho no figma](src/img/prototipo2.JPG)

- [Protótipo no figma](https://www.figma.com/file/y63N4eDBrqPoQr6J6SY9q3/Data-Lovers?node-id=0%3A1)

## Paleta de cores

Utilizamos o [Adobe Colors](https://color.adobe.com/pt/create/color-wheel) para extrair as cores através da imagem escolhida.

![Paleta de cores](src/img/paleta.adobe.JPG)
## 7. Funcionalidades

Facilidade de navegação entre páginas e opções de filtros para pesquisa.

![Layout responsivo](src/img/pag-responsiva.JPG)

## 8. Tecnologias utilizadas

- JavaScript
- HTML 5
- CSS
- Node.JS
- Figma
- Jest

## 9. Pessoas desenvolvedoras

Este projeto foi desenvolvido durante o Bootcamp da Laboratória, Turma 007 pelas colaboradoras: 

- [Elizenai Silva](https://www.linkedin.com/in/elizenai/)

![Elizenai](src/img/Elizenai.JPG)

- [Lidianne Barbosa](https://www.linkedin.com/in/lromao/)

![Lidianne](src/img/Lidianne.JPG)
## 10. Referências

- [Ghibli na Netflix](https://www.netflix.com/br/browse/genre/81227213)
- [Studio Ghibli](https://ghiblicollection.com/)

