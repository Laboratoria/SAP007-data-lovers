//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemon = data.pokemon;

let cardSmall = document.getElementById('card-pokemon')

let showPokemonBig = document.getElementById('card-pokemon-big')

const smallCardPokemon = () => {
  let i = 0
  for (let onePokemon of pokemon) {
    let saveType = ""
    for (let oneTypePokemon of onePokemon.type) {
      saveType += (" " + oneTypePokemon.toUpperCase())
    }
    cardSmall.insertAdjacentHTML("beforeend", `<div class="card-pokemon" id="${i}">
    <img src="${onePokemon.img}" alt="Imagem Pokemon" class="img-pokemon">
    <p class="paragraph-card">${onePokemon.name.toUpperCase()}</p>
    <p class="paragraph-card">${onePokemon.num}</p> <p class="paragraph-card">${saveType}</p> </div>`)
    i += 1
  }
}

smallCardPokemon()

pokemon.forEach((value) => {
  if (value === pokemon[80]) {

    let resistantType = ""
    const resistantAtribute = value.resistant
    for (let resistantValue of resistantAtribute) {
      resistantType += (" " + resistantValue)
    }

    let weaknessesType = ""
    const weaknessesAtribute = value.weaknesses
    for (let weaknessesValue of weaknessesAtribute) {
      weaknessesType += (" " + weaknessesValue)
    }

    let pokemonType = ""
    const typeAtribute = value.type
    for (let eachTypeOfValue of typeAtribute) {
      pokemonType = "Type: " + eachTypeOfValue
    }

    showPokemonBig.insertAdjacentHTML('beforeend', `<img src="${value.img}" alt="Imagem Pokemon" class="image-big"> <p class="paragraph-big">About: ${value.about}</p> <p class="paragraph-big">Name: ${value.name.toUpperCase()}</p> <p class="paragraph-big">Number: ${value.num}</p> <p class="paragraph-big">Eggs: ${value.egg}</p> <p class="paragraph-big">${resistantType}</p> <p class="paragraph-big">${weaknessesType}</p> <p class="paragraph-big">${pokemonType}</p> <p class="paragraph-big">Pokemon rarity: ${value['pokemon-rarity']}</p> <p class="paragraph-big">Spawn Chance: ${value['spawn-chance']}</p> <p class="paragraph-big">Buddy distance km: ${value['buddy-distance-km']}</p>`)

    let quickMoveType = ""
    const quickMoveAtribute = value['quick-move']
    for (let eachQuickMoveOfValue of quickMoveAtribute) {
      showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Name: ${eachQuickMoveOfValue['name']}</p> <p class="paragraph-big">Type: ${eachQuickMoveOfValue['type']}</p> <p class="paragraph-big">Base damage: ${eachQuickMoveOfValue['base-damage']}</p> <p class="paragraph-big">Energy: ${eachQuickMoveOfValue['energy']}</p> <p class="paragraph-big">Move duration seg: ${eachQuickMoveOfValue['move-duration-seg']}</p>`)

    }

    const specialAttackAtribute = value['special-attack']
    for (let eachSpecialAttack of specialAttackAtribute) {
      showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Name: ${eachSpecialAttack['name']}</p> <p class="paragraph-big">Type: ${eachSpecialAttack['type']}</p> <p class="paragraph-big">Base damage: ${eachSpecialAttack['base-damage']}</p> <p class="paragraph-big">Energy: ${eachSpecialAttack['energy']}</p> <p class="paragraph-big">Move duration: seg${eachSpecialAttack['move-duration-seg']}</p>`)
    }

    showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big>Evolution: ${value.evolution.candy}</p>`)

    if (value.evolution['next-evolution']) {
      const nextEvolutionValue = value.evolution['next-evolution']
      for (let evolutionValue of nextEvolutionValue) {
        showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Number: ${evolutionValue['num']}</p> <p class="paragraph-big">Name: ${evolutionValue['name']}</p> <p class="paragraph-big">Candy cost: ${evolutionValue['candy-cost']}</p>`)
        if (evolutionValue["evolution-item"]) {
          showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Evolution item name: ${evolutionValue["evolution-item"].name}</p> <p class="paragraph-big">Evolution item image: ${evolutionValue["evolution-item"].img}</p>`)
        }

        if (evolutionValue['next-evolution']) {
          let secondNextEvolutionValue = evolutionValue['next-evolution']
          for (let evolutionValueTwo of secondNextEvolutionValue) {
            showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Number: ${evolutionValueTwo['num']}</p> <p class="paragraph-big">Name: ${evolutionValueTwo['name']}</p> <p class="paragraph-big">Candy cost: ${evolutionValueTwo['candy-cost']}</p>`)

            if (evolutionValueTwo["evolution-item"]) {
              showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Evolution item name: ${evolutionValueTwo["evolution-item"].name}</p> <p class="paragraph-big">Evolution item image: ${evolutionValueTwo["evolution-item"].img}</p>`)
            }
          }

        }
      }

    }
    if (value.evolution['prev-evolution']) {
      const prevEvolution = value.evolution['prev-evolution']
      for (let valuePrevEvolution of prevEvolution) {
        showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Number: ${valuePrevEvolution['num']}</p> <p class="paragraph-big">Name: ${valuePrevEvolution['name']}</p> <p class="paragraph-big">Candy cost: ${valuePrevEvolution['candy-cost']}</p>`)
        if (valuePrevEvolution["evolution-item"]) {
          showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Evolution item name: ${valuePrevEvolution["evolution-item"].name}</p> <p class="paragraph-big">Evolution item image: ${valuePrevEvolution["evolution-item"].img}</p>`)
        }
        if (valuePrevEvolution['prev-evolution']) {
          const prevPrevEvolution = valuePrevEvolution['prev-evolution']
          for (let valuePrevEvolutionTwo of prevPrevEvolution) {
            showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Number: ${valuePrevEvolutionTwo['num']}</p> <p class="paragraph-big">Name: ${valuePrevEvolutionTwo['name']}</p> <p class="paragraph-big">Candy cost: ${valuePrevEvolutionTwo['candy-cost']}</p>`)
            if (valuePrevEvolutionTwo["evolution-item"]) {
              showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Evolution item: ${valuePrevEvolutionTwo["evolution-item"].name}</p> <p class="paragraph-big">Evolution item image: ${valuePrevEvolutionTwo["evolution-item"].img}</p>`)
            }
          }
        }
      }

    }

    const generationPokemon = value.generation
    showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Number: ${generationPokemon['num']}</p> <p class="paragraph-big">Name: ${generationPokemon['name']}</p>`)

    const sizePokemon = value.size
    showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Height: ${sizePokemon['height']}</p> <p class="paragraph-big">Weight: ${sizePokemon['weight']}</p>`)

    const encounterPokemon = value.encounter
    showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Base flee rate: ${encounterPokemon['base-flee-rate']}</p> <p class="paragraph-big">Base capture rate: ${encounterPokemon['base-capture-rate']}</p>`)

    const statsPokemon = value.stats
    showPokemonBig.insertAdjacentHTML('beforeend', `<p class="paragraph-big">Base atack: ${statsPokemon['base-attack']}</p> <p class="paragraph-big">Base defense: ${statsPokemon['base-defense']}</p> <p class="paragraph-big">Base stamina: ${statsPokemon['base-stamina']}</p> <p class="paragraph-big">Max cp: ${statsPokemon['max-cp']}</p> <p class="paragraph-big">Max hp: ${statsPokemon['max-hp']}</p>`)
  }
})
