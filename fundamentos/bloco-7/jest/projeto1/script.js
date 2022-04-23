function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const encode = (vet) => {

  let vetor1 = [];


  for (let i = 0; i < vet.length; i += 1) {
    if (vet[i] == 'a') {
      vetor1.push(1);
    } else if (vet[i] == 'e') {
      vetor1.push(2);
    } else if (vet[i] == 'i') {
      vetor1.push(3);
    } else if (vet[i] == 'o') {
      vetor1.push(4);
    } else if (vet[i] == 'u') {
      vetor1.push(5);
    } else {
      vetor1.push(vet[i]);
    }
  }

  let vetorfinal = vetor1.join('');
  return vetorfinal;
}
const techList = (arrayTechnologies, name) => {
 
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
};

const hydrate = (string) => {
  let vetor = /\d+/g;
  
  const result = string.match(vetor);
  let novovetor = [];
  soma = 0;
  
  
    for( let i = 0; i < result.length ; i += 1) {
            let convertido = parseInt(result[i])
            novovetor.push(convertido);
            soma += novovetor[i];
   }
    if ( soma > 1) {
      return `${soma} copos de água`;
    }
    else {
      return `${soma} copo de água`;
    }
   
  }


module.exports = {
  myRemove,
  myFizzBuzz,
  encode,
  techList,
  hydrate 
};