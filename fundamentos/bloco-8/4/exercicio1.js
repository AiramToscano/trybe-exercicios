const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
//O método concat() retorna um novo array contendo todos 
//os arrays ou valores passados como parâmetro
const vetor1 = arrays.reduce((primeiro,vetor) => primeiro.concat(vetor));

  console.log(vetor1);