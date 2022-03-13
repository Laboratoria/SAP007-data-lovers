# GHIBLI EXPLORER

![imagemghibli](src/img/studio-ghibli.jpg)

## Índice

- [1. Status do projeto](#1-status-do-projeto)
- [2. Acesso](#2-acesso)
- [3. Descrição](#3-descricao)
- [4. Histórias de usuário](#4-historias-de-usuário)
- [5. Protótipo](#5-prototipo)
- [6. Funcionalidades](#6-funcionalidades)
- [7. Tecnologias utilizadas](#7-tecnologias-utilizadas)
- [8. Pessoas desenvolvedoras](#8-pessoas-desenvolvedoras)
- [9. Referências](#9-referencias)


## 1. Status do projeto

![Bagde em desenvolvimento](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green) 

## 2. Acesso

O deploy do projeto foi realizado pelo Git Pages. Clique aqui para acessá-lo.

## 3. Descrição

O Studio Ghibli é uma companhia de cinema e animação que conquistou reconhecimento e aclamação internacional pela qualidade de seus vários longas-metragens de animação. Uma curiosidade sobre Hayao Miyazaki, co-fundador da companhia, é que ele normalmente escreve e dirige, sendo amplamente considerado um dos principais nomes da indústria de animação japonesa.

O objetivo do projeto foi construir uma página web onde os usuários pudessem visualizar os cards dos filmes do Studio Ghibli de forma simples e interativa, sendo possível filtrá-los, ordená-los e ter acesso às curiosidades do estúdio e suas animações. Para isso, foram utilizados os dados da [Ghibli API](https://ghibliapi.herokuapp.com/#section/Getting-Started), contidos em um arquivo ".js" somente com o necessário para o desenvolvimento do projeto.

## 4. Histórias de usuário

Nossa pesquisa para iniciar o projeto foi realizada com pessoas da família que assistem esse tipo de animação, além da[Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.pt-BR.md) disponibilizada pela Laboratória.

Descrevemos abaixo as duas histórias de usuário que motivaram o desenvolvimento do design, paleta de cores, filtros, e demais interatividades do projeto.

História de usuário 01
-Eu, Heloísa, 09 anos, quero entrar no site do Studio Ghibli e poder ver todos os nomes e posteres dos filmes. Eu quero saber um pouco da história pra decidir qual filme assistir.

_Definição de pronto_: Ao entrar na site, o usuário tem acesso à página de filmes. Nesta mesma página, é possível ordenar os títulos dos filmes de A a Z, selecionar um único título para que apareça somente ele na tela, filtrar pela pontuação dos filmes e pelo produtor.
_Critérios de aceitação_: Para cada filme foi montado um display contendo o poster, o título, o nome do diretor, o ano de lançamento e a descrição do filme, sendo possível conhecer a história e saber se o filme foi bem aceito.

História de usuário 02
-Eu Matheus, 25 anos,  quero entrar no site da Ghibli e poder ver todos os personagens, saber os tipos ou espécies, o gênero e a quantidade que cada um representa.

Definição de pronto: Ao entrar no site, o usuário saberá que está na página de filmes, pois no canto superior esquerdo existem três links, e o link que direciona para a página de personagens 
Critérios de aceitação:

#### Testes de usabilidade

Durante o desenvolvimento, fizemos alguns testes com os usuários para que pudessem avaliar a interatividade do site.

### Testes unitários



## 5. Protótipo

Após algumas pesquisas em sites similares e breve conversa com usuários, decidimos que o site deveria ser de fácil compreensão, com a finalidade de adultos e crianças poderem ter acessos a todas as funcionalidades.

#### Protótipo de baixa fidelidade

Depois de realizar algumas pesquisas em sites similares como: sites de desenho animado, jogos, filmes de anime e mesmo o site do [Studio Ghibli Brasil] (https://studioghibli.com.br/studioghibli/), desenhamos no papel como seria a página principal:

![Desenho em papel do protótipo de baixa fidelidade](src/img/prototipo1.jpg)

#### Protótipo de alta fidelidade

*** figma

## 6. Funcionalidades

## 7. Tecnologias utilizadas

## 8. Pessoas desenvolvedoras

Este projeto foi desenvolvido durante o Bootcamp da Laboratória, Turma 007.

## 9. Referências

- [Ghibli na Netflix](https://www.netflix.com/br/browse/genre/81227213)

- [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).

### Checklist


No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que
   necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.
4. Que a interface siga os fundamentos de _visual design_.



- [ ] Usar VanillaJS.
- [ ] Passa pelo linter (`npm run pretest`)
- [ ] Passa pelos testes (`npm test`)
- [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
      branches.
- [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [ ] Inclui histórias de usuário no `README.md`.
- [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
      `README.md`.
- [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
- [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
- [ ] UI: Permite filtrar dados com base em uma condição.
- [ ] UI: É _responsivo_.
