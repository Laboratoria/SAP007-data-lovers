let newDataPokemon = JSON.parse(JSON.stringify(datasetToUse));

    newDataPokemon.forEach((pokemonCharacter, index) => {
        let attack = parseInt(pokemonCharacter.stats['base-attack']);
        let defense = parseInt(pokemonCharacter.stats['base-defense']);
        let stamina = parseInt(pokemonCharacter.stats['base-stamina']);
        let sumStats = attack+defense+stamina;
        let meanStats = Math.round((attack+defense+stamina)/3);
        let newDataPokemonObject = {
            "sum-stats": sumStats,
            "mean-stats": meanStats,
        }
        newDataPokemon[index] = Object.assign(pokemonCharacter,newDataPokemonObject);
    });
    return newDataPokemon
}