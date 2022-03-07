export const filtroGenero = (data, condition) => {
    const generoFiltrado = data.filter((personagem) => personagem.gender.ToLowerCase() === condition.ToLowerCase());
    return generoFiltrado
}

