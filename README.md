# Studio Ghibli
![imagemghibli](src/img/studio-ghibli.jpg)

![Bagde em desenvolvimento](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green)

## Índice

- [2. Descrição do projeto](#2-descricao-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios mínimos de aceitação do
  projeto](#5-critérios-mínimos-de-aceitação-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
- [8. Pistas, dicas e leituras
  complementares](#8-pistas-dicas-e-leituras-complementares)
- [9. Checklist](#9-checklist)

---

## 2. Descrição do projeto

Neste projeto você **construirá uma _página web_ para visualizar um _conjunto
(set) de dados_** que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**. Por cálculo agregado
nos referimos aos diversos cálculos que podem ser feitos com os dados para
mostrar a informação mais relevante para os usuários (médias, valores máximos e
mínimos, etc).

Para este projeto trazemos uma série de dados de _temáticas diferentes_ para que
você explore e decida com qual delas deseja trabalhar. Escolhemos
especificamente estes conjuntos de dados porque cremos que se adequem bem a esta
etapa de sua aprendizagem.

Uma vez que você defina sua área de interesse, busque entender quem é seu
usuário e o que exatamente ele necessita saber ou ver, para que assim possa
construir a interface que o ajude a interagir e entender melhor os dados.

Este são os dados que propomos:


- [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).
  - [Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.pt-BR.md)



## 3. Objetivos de aprendizagem



- [ ] **Manipular objects (key | value)**

    <details><summary>Links</summary><p>

  - [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/05-objects/01-objects)
  </p></details>




## 4. Considerações gerais



### Definição de produto

Após algumas pesquisas em sites similares e breve conversa com usuários, decidimos que o site deveria ser de fácil compreensão, com a finalidade de adultos e crianças poderem ter acessos a todas as funcionalidades.


### Histórias de usuário

Nossa pesquisa para iniciar o desenvolvimento foi realizada com pessoas da família que assistem desenhos de anime e também através de buscas de comunidades que falam sobre esse tipo de animação. Iremos descrever as duas histórias de usuário que serviram como direcionamento para a elaboração dos filtros, definição de cores e demais informações.

História de usuário 01
-Eu, Heloísa, 09 anos, quero entrar no site do Studio Ghibli e poder ver todos os posteres dos filmes para decidir que filme assistir.  Gostaria de encontrar os títulos, saber quais são os melhores e poder ler a descrição.

Definição de pronto:
Critérios de aceitação:

História de usuário 02
-Eu Matheus, 10 anos,  quero entrar no site da Ghibli e poder ver todos os personagens, saber os tipos, o gênero e a quantidade que cada um representa.

Definição de pronto:
Critérios de aceitação:


#### Protótipo de baixa fidelidade

Depois de realizar algumas pesquisas em sites similares como: sites de desenho animado, jogos, filmes de anime e mesmo o site do [Studio Ghibli Brasil] (https://studioghibli.com.br/studioghibli/), desenhamos no papel como seria a página principal:

![Desenho em papel do protótipo de baixa fidelidade](src/img/prototipo.jpeg)


#### Protótipo de alta fidelidade



#### Testes de usabilidade

Durante o desenvolvimento, fizemos alguns testes com os usuários para que pudessem avaliar a interatividade do site.


### Implementação da interface de usuário (HTML/CSS/JS)


No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que
   necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.
4. Que a interface siga os fundamentos de _visual design_.

### Testes unitários


## 7. Considerações técnicas



### Conteúdo de referência

#### Organização do trabalho

- [Histórias de Usuário](https://www.youtube.com/watch?v=sEtiCJfXTE8)
- [Definição de pronto](https://www.youtube.com/watch?v=Kfss63Q42F8)
- [Critérios de
  aceitação](https://medium.com/@karladiasn/user-stories-e-crit%C3%A9rios-de-aceita%C3%A7%C3%A3o-317c48403fcd)
- [Guia para Data
  Lovers](https://docs.google.com/presentation/d/1bOq8ns5wsvXdksdqYL3aQoxzFQsXTVlyvlV-yxI2oBM/present?token=AC4w5VhHBbEEA9u2w8bm3Ey1Cse349frbg%3A1567540902700&includes_info_params=1&eisi=CM_ytPW4teQCFQrJgQodeTcEZg#slide=id.g5282e1a53f_1_106)

---

## 9. Checklist

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
