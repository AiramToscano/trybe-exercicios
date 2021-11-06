function numerorepete(teste) {
    let soma =0;
    let maior = 0;
    let indexrepetido = 0;
    for( let i = 0; i < teste.length ; i++){
       
        for ( let j = 0 ;j < i; j ++ ){

              if (teste[j] === teste[i]) {

                  soma += 1;
              }

            }
            if( soma > maior) {

                maior = soma;
                indexrepetido = i;
            }
        soma =0;
    }
 return teste[indexrepetido];
}
console.log(numerorepete([5, 2, 1, 5, 8, 5, 3]));

