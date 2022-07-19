const readlineSync = require('readline-sync');

const vet = [`1-Velocidade , 2-sorteio , 3-imc`];
console.log(`esses são meus scripts disponiveis : ${vet}`)
const numLuck = readlineSync.questionInt(['Digite o numero do seu script: '])

const teste = (index) => {
 if(index == 1 ) { 
  return require('./velocidade');;
 }
 if(index == 2 ) { 
    return require('./sorteio');
 }
 if(index == 3 ) { 
    return require('./imc');
   }
 console.log('valor não encontrado');

}

teste(numLuck);

console.log(getHours());