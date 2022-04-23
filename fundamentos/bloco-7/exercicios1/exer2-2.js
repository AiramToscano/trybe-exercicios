const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu e paralelepipedo';
let maior = [0];
const frase1 = frase.split(' ');


for ( let i = 0 ; i< frase1.length ; i += 1) {
   if( frase1[i].length > maior.length ) {
       maior = frase1[i];
   }
}
 console.log(maior);