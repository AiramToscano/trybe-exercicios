let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let posiçao = [];


for ( let i = 0; i < numbers.length ; i ++){

       if ( numbers[i+1] != null) {
        let sum = numbers[i] * numbers[i+1];
        posiçao.push(sum);  }

       else if ( numbers[i+1] == null) {

            let ultimo = numbers[9] * 2;
            posiçao.push(ultimo);
        }
        
          
}


console.log(posiçao);

