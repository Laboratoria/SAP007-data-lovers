import dados from "./data/rickandmorty/rickandmorty.js";

function printarCards(dados) {
  document.getElementById("container-dos-cards").innerHTML = dados //innerHTML para escrever o resultado no doc hmtl. Adiciona html (as tags abaixo) e texto.
    .map(
      (item) => ` 
   
      <div class="card-info">
        <img src="${item.image}">
        <div class="info-lista">
            <p><strong>Nome: </strong>${item.name}</p>
            <p><strong>Gênero: </strong>${item.gender}</p>      
            <p><strong>Status: </strong>${item.status}</p>
            <p><strong>Espécie: </strong>${item.species}</p>
            <p><strong>Origem: </strong>${item.origin.name}</p>
            <p><strong>Localização: </strong>${item.location.name}</p>
            <p><strong>Aparece em: </strong>${item.episode.length} episódios</p>
        </div> 
     </div>
    
  ` 
  //pq tem essa aspa aqui e no começo? Chama-se "template string".
  //Template Strings são strings que permitem expressões embutidas. 
  //Você pode utilizar string multi-linhas e interpolação de string com elas.
  //Interpolação: A interpolação de strings é um ótimo recurso de linguagem de
  // programação que permite injetar variáveis, chamadas de funções e expressões aritméticas 
  //diretamente em uma string.
    )
    .join(''); //explicação abaixo
}
printarCards(dados.results); 
// esse dados.results - pegar os results que estao na lista (array) dados
// pq esse printarCards tá mandando pra tela? por conta do innerHtml? SIM.
// innerHtml e innerText sáo propriedades do OBjeto que selecionamos (dentro do getElementById)
// e o objeto é o elemento DOM que representa o elemento html

//entender o que é innerHtml [OK] - .map - esse ${} cria funcao?
//diferenca entre querySelector e getElementById?

//join() - é um método para inserir um array na página (minha array de dados de cada personagem) - o join()
//converte em uma só string para inserí-la na tela - retorna uma string com todos os itens do array
//concatenados e separados por vírgula. Entre parênteses vc especifica o argumento, por ex join('')
//aqui nada separa um item do outro. Ex: join('-') - aqui ficarão separados por travessão

// " => "isso sig funcao executada para cada item -> "arrow function" ->
// depois dela vem a funcao e/ou  scondicoes 
//o que é API? (consumo de api)
