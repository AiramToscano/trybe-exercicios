
const calculoIsNumber = (num) => {
  if(num < 0) return 'negativo';
  if(num > 0) return 'positivo';
  if(num === 0) return 'neutro';
  return 'o valor deve ser um número'
}

console.log(calculoIsNumber('b'));

module.exports = calculoIsNumber;
