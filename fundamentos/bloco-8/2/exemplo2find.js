const numbers = [19, 45, 31, 3, 2, 22, 15];

const findDivisibleBy3And5 = (numero) => {
  if ( numero % 15 == 0) {
      return numero;
  }
  else {
      return false;
  }
}


const verifica = numbers.find(findDivisibleBy3And5)

console.log(verifica);