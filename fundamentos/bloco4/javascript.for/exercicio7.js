let numbers = [0, 3, 99, 19, 70, 8, 100, 2, 35, 1];
let menor = numbers[0];

for ( let i=1 ; i < numbers.length; i++ ){

    if (  numbers[i] < menor ) {

        menor = numbers[i];
    }
    
      
}

console.log (menor);
