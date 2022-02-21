export const buscarNome = (data, busca) => { 
    const resultadoNomes = data.filter((personagem) => personagem.name.toLowerCase().includes(busca.toLowerCase())); 
    return resultadoNomes; 
}; 


export const buscarEspecie = (data, especie) => { 
    const resultadoEspecie = data.filter((personagem) => personagem.species.toLowerCase() === especie.toLowerCase()); 
    return resultadoEspecie; 
}; 
