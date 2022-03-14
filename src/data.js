
export const selectType = (selectByType, pokemons) =>
pokemons.filter((select) => select.type.includes(selectByType));

export const calcType = (pokemons, selectByType) => {
  const type = pokemons.filter(search => search.type.includes(selectByType));
  return Math.round(((type.length * 100) / pokemons.length) * 100) / 100;
};


//filtro pra tipos calculo agregado
const filterSelectType = document.querySelector("#filter-type");

filterSelectType.addEventListener("change", () => {
    const filterType = filterSelectType.value;
    console.log(filterType)
    const arrayFiltered = selectType(filterType, pokemons);
    cardsPokemon(arrayFiltered);
    typePercent();
})

function showCalc() {
    document.getElementById("calculation").innerHTML = "";
    const filterType = document.getElementById("types-filters").value;
    let result = calcType(pokemons, filterType);


    document.getElementById("calculation").innerText += `Os pokémons desse tipo representam ${result}% do total.`;c
}









//botão pra limpar filtros
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)
