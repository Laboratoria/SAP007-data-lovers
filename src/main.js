//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

let namePokemon = document.getElementById('name-pokemon')
let image = document.getElementById('img-pokemon')
let numPokemon = document.getElementById('num-pokemon')
let typePokemon = document.getElementById('type-pokemon')
let weaknessesPokemon = document.getElementById('weaknesses-pokemon')

let showPokemonBig = document.getElementById('card-pokemon-big')
let sectionImgBig = document.getElementById('img-pokemon-big')
let sectionNameBig = document.getElementById('name-pokemon-big')
let sectionNumBig = document.getElementById('num-pokemon-big')
let showTypeBig = document.getElementById('type-pokemon-big')
let sectionWeaknessesBig = document.getElementById('weaknesses-pokemon-big')

const pokemon = data.pokemon;

const smallCardPokemon = () => {
    let i = 0
    for (let onePokemon of pokemon) {
        if (onePokemon[0]) {
            image.insertAdjacentHTML(`<img src="${onePokemon.img}" alt="Imagem Pokemon" class="">`)
            namePokemon.insertAdjacentHTML(onePokemon.name)
        }
    }
}

pokemon.forEach((value) => {
    if (value === pokemon[0]) {
        console.log(value.name)
        const typeAtribute = value.type //com iterar
        for (let eachTypeOfValue of typeAtribute) {
            console.log(eachTypeOfValue)
        }

        const quickMoveAtribute = value['quick-move']
        for (let eachQuickMoveOfValue of quickMoveAtribute) {
            console.log(eachQuickMoveOfValue['name'], eachQuickMoveOfValue['type'], eachQuickMoveOfValue['base-damage'], eachQuickMoveOfValue['energy'], eachQuickMoveOfValue['move-duration-seg']
            )
        }

        const specialAttackAtribute = value['special-attack']
        for (let eachSpecialAttack of specialAttackAtribute) {
            console.log(eachSpecialAttack['name'], eachSpecialAttack['type'], eachSpecialAttack['base-damage'], eachSpecialAttack['energy'], eachSpecialAttack['move-duration-seg'])
        }


        const nextEvolutionValue = value.evolution['next-evolution']
        console.log(nextEvolutionValue[0].name) //assim que transformar 


        const generationPokemon = value.generation
        console.log(generationPokemon['num'])
        console.log(generationPokemon['name'])

        const sizePokemon = value.size
        console.log(sizePokemon['height'])
        console.log(sizePokemon['weight'])

        const encounterPokemon = value.encounter
        console.log(encounterPokemon['base-flee-rate'], encounterPokemon['base-capture-rate'])

        const statsPokemon = value.stats
        console.log(statsPokemon['base-attack'], statsPokemon['base-defense'], statsPokemon['base-stamina'], statsPokemon['max-cp'], statsPokemon['max-hp'])

        console.log(value.about)
        console.log(value.img)
        console.log(value['pokemon-rarity'])
        console.log(value['spawn-chance'])
        console.log(value.egg)
        console.log(value['buddy-distance-km'])
    }
})
