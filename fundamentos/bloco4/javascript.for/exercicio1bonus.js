let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 0, 27];
let posiçao = [];

for ( let i = 1; i < numbers.length ; i ++){

    for ( let j = 0; j < i ; j ++){

       if ( numbers[i] < numbers[j]){

          posiçao = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = posiçao;
       }





    }

}

console.log (numbers);