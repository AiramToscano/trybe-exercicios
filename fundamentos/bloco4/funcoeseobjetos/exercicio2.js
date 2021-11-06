function menorvetor(vetor) {


let maior = 0;


for ( let i = 0 ; i < vetor.length; i ++) {

if ( vetor[i] > vetor[maior]) {

     maior = i;

     
}

}

return maior;

}
console.log(menorvetor([2, 3, 6, 7, 10, 1]));