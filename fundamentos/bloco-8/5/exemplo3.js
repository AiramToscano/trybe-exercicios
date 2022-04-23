// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'manga', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite condesado', 'leite'];

const fruitSalad = (fruit, additional) => {
  const vetor = [...fruit,...additional]

  return vetor;
};

console.log(fruitSalad(specialFruit, additionalItens));