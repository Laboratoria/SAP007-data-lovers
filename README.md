# Data Lovers

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios mínimos de aceitação do
  projeto](#5-critérios-mínimos-de-aceitação-do-projeto)

---

## 1. Preâmbulo

Segundo a
[Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
90% dos dados que existem hoje foram gerados durante os últimos dois anos. A
cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes
quantidades de dados se convertam em **informação** compreensível para os
usuários, precisamos entender e processar estes dados. Uma forma simples de
fazer isso é criando _interfaces_ e _visualizações_.

Na imagem seguinte, você pode ver como os dados que estão na parte esquerda
podem ser usados para construir a interface amigável e compreensível que está na
parte direita.

![json-interface](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumo do projeto

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

O objetivo principal deste projeto é que aprenda a desenhar e construir uma
interface web onde se possa visualizar e manipular dados, entendendo o que o
usuário necessita.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

## 5. Critérios mínimos de aceitação do projeto

Os critérios considerados para que tenha terminado este projeto são:

### Definição de produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório,
contando como foi o processo de desenho e como você acredita que o produto possa
resolver o problema (ou problemas) de seu usuário.

### Histórias de usuário

Uma vez que entenda a necessidade dos usuários, escreva as [Historias de
Usuario](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_usu%C3%A1rio) que
representem tudo que o usuário precisa fazer/ver. As **histórias de usuário**
devem ser o resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (_definition of done_) e os
critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a
seguinte (cumpra com as definições de pronto + critérios de aceitação).

### Desenho de interface do usuário

#### Protótipo de baixa fidelidade

Durante seu trabalho você deverá fazer e iterar rascunhos de sua solução usando
lápis e papel. Recomendamos que fotografe todas as iterações que fizer, suba
para seu repositório e as mencione no `README.md`.

#### Protótipo de alta fidelidade

O passo seguinte é desenhar sua Interface de Usuário (UI - _User Interface_).
Para isso você deverá aprender a usar alguma ferramenta de _visual design_. Nós
recomendamos [Figma](https://www.figma.com/) que é uma ferramenta que funciona
no navegador e no qual é possível criar uma conta gratuita. Mas você é livre
para usar outros editores gráficos como Illustrator, Photoshop, PowerPoint,
Keynote, etc. Lembre-se de usar a identidade gráfica correspondente ao arquivo
de dados que escolher.

O protótipo deve apresentar o que seria _ideal_ em sua solução. Digamos que é o
que desejaria implementar se tivesse tempo ilimitado para hackear. Não se
esqueça de incluir em seu protótipo os fundamentos de _visual design_.

#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que
   necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.
4. Que a interface siga os fundamentos de _visual design_.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que
escrever seus próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).
