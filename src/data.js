//manipulação de dados através de arrays e objetos

//Exemplo filterData(data, condition)

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//data é onde estão os dados!! função pode ter 3 parâmetros
export const ordemAlfabetica = (data) =>{

  let ordemAZ = data.sort(function(a, z){
    if (a.name < z.name){
      return ;
    } 
    else {
      return ;
    }
  })
  return ordemAZ
};