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



















