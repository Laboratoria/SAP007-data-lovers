//import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemon = data.pokemon;

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

const smallCardPokemon = () => {
    let i = 0
    for (let onePokemon of pokemon) {
        if (onePokemon === pokemon[0]) {
            image.insertAdjacentHTML('afterbegin', `<img src="${onePokemon.img}" alt="Imagem Pokemon" class="">`)
            namePokemon.textContent = onePokemon.name
            console.log(onePokemon)
        }
    }
}

pokemon.forEach((value) => {
    if (value === pokemon[2]) {
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

        console.log(value.evolution.candy)
        if (value.evolution['next-evolution']) {
            const nextEvolutionValue = value.evolution['next-evolution']
            for (let evolutionValue of nextEvolutionValue) {
                console.log(evolutionValue['num'], evolutionValue['name'], evolutionValue['candy-cost'])
                if (evolutionValue["evolution-item"]) {
                    console.log(evolutionValue["evolution-item"].name, evolutionValue["evolution-item"].img)
                }

                if (evolutionValue['next-evolution']) {
                    let secondNextEvolutionValue = evolutionValue['next-evolution']
                    for (let evolutionValueTwo of secondNextEvolutionValue) {
                        console.log(evolutionValueTwo['num'], evolutionValueTwo['name'], evolutionValueTwo['candy-cost'])

                        if (evolutionValueTwo["evolution-item"]) {
                            console.log(evolutionValueTwo["evolution-item"].name, evolutionValueTwo["evolution-item"].img)
                        }

                    }

                }
            }

        }
        if (value.evolution['prev-evolution']) {
            const prevEvolution = value.evolution['prev-evolution']
            for(let valuePrevEvolution of prevEvolution){
                console.log(valuePrevEvolution['num'],valuePrevEvolution['name'],valuePrevEvolution['candy-cost'])
                if (valuePrevEvolution["evolution-item"]) {
                    console.log(valuePrevEvolution["evolution-item"].name, valuePrevEvolution["evolution-item"].img)
                }
                if (valuePrevEvolution['prev-evolution']) {
                    const prevPrevEvolution = valuePrevEvolution['prev-evolution']
                    for(let valuePrevEvolutionTwo of prevPrevEvolution){
                        console.log(valuePrevEvolutionTwo['num'],valuePrevEvolutionTwo['name'],valuePrevEvolutionTwo['candy-cost'])
                        if (valuePrevEvolutionTwo["evolution-item"]) {
                            console.log(valuePrevEvolutionTwo["evolution-item"].name, valuePrevEvolutionTwo["evolution-item"].img)
                        }
                    }
                }
            }
            
        }
        //const prevEvolution = value.evolution['prev-evolution']
        //console.log(prevEvolution['num'])

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

/*console.log(nextEvolutionValue[0].num,nextEvolutionValue[0].name,nextEvolutionValue[0]['candy-cost'],nextEvolutionValue[0].name)//assim que transformar em array selecionar o elemento com colchetes, assim ele ira virar um objeto: sendo um objeto utilizar o . e o nome do valor que quer acessar.*/