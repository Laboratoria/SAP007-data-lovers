export const dataPokemon = () => {
  fetch("data/pokemon.json")
    .then((data) => data.json())
    .then((objectData) => {
      return objectData;
    });
  return false;
};

/*
<div class="card">
  <img class="pokedex-open" src="img/pokedex-open.png">
  <p class="poke-number">N° 001</p>
  <div class="card-box">
    <figure class="box-poke-img">
      <img class="poke-img" src="img/001.png" alt="Pokémon 001 Bulbasaur">
    </figure>
    <main class="box-poke-text">
      <h4 class="poke-title">Exemplo de nome grande</h4>
      <ul class="poke-items">
        <span class="poke-item-title">Tipo: </span>
        <li>Planta</li>
        <li>Venenoso</li>
      </ul>
      <ul class="poke-items">
        <span class="poke-item-title">Fraqueza:</span>
        <li>Fogo</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
      </ul>
    </main>
  </div>
</div>


document
  .getElementById("confirm-button")
  .addEventListener("click", showResults);

function showResults(event) {
  event.preventDefault();

  for (let i = 0; i < data.pokemon.length; i++) {
    let allDatas = data.pokemon[i];
    console.log(typeof allDatas);

    Primeira letra do nome maiuscula - deixar para fazer no final para nao atrapalhar o sort() 
    const alteredName = allDatas.name[0].toUpperCase() + allDatas.name.substring(1);

    // card dos pokemons string
    const pokemonCard = `
    <section class="show-the-cards">
      <div class="img-box">
        <img src= "${allDatas.img}" alt=${allDatas.name}>
      </div>
         
      <div class="text-box">
        <p class="poke-name">Nome ${allDatas.name} </p>
        <p class="poke-number">N° ${allDatas.num} </p>
        <p class="poke-type">Tipo ${allDatas.type}</p>
        <p class="poke-weaknesses">Fraqueza ${allDatas.weaknesses}</p>
      </div>
    </section>
    `;

    const sectionResults = document.createElement("section");
    document.getElementById("result").appendChild(sectionResults);
    sectionResults.innerHTML = pokemonCard;
  }
  */