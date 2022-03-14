//função para ordenar
export const sortHandler=(datasetToUse,pokemonFeature,way)=>{
  const copyDatasetToUse = [...datasetToUse];

  function sortName(pokemon1,pokemon2){
      return pokemon1[pokemonFeature].localeCompare(pokemon2[pokemonFeature]); 
  }

  let sortedData;
  if(way === "ASC"){
      sortedData = copyDatasetToUse.sort(sortName);
  }else{
      sortedData = copyDatasetToUse.sort(sortName).reverse();
  }

  return sortedData;
}

//filtro pra tripos
export const filtrarTipo = (tipo, Pokemons) => {
    return Pokemons.filter (pokemon => pokemon.type === type);
    }

//botão pra limpar filtros
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)



















