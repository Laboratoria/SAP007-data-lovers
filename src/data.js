export const searchByName = (selectByName, pokemons) =>
    pokemons.filter((select) => select.name.includes(selectByName));



export const selectType = (selectByType, pokemons) =>
    pokemons.filter((select) => select.type.includes(selectByType));


export const calcType = (pokemons, selectByType) => {
    const type = pokemons.filter(search => search.type.includes(selectByType));
    return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};

export const sortAZ = (data, order) => {
    const sortaz = [...data]
    if (order === "A-Z") {
        return sortaz.sort((a, z) => a.name > z.name ? 1 : -1);
    } else {
        return sortaz.sort((a, z) => a.name > z.name ? -1 : 1);
    }
};


