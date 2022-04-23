const readlineSync = require('readline-sync');

const numLuck = readlineSync.questionInt(['Digite o seu numero de 1 a 10 e boa sorte: ']);


const numSorteado = (num) => {
    const numero = Math.floor(Math.random() * 11);
    numero === num ? console.log("Parabéns, número correto!") : console.log(`Opa, não foi dessa vez. O número era ${numero}`)
    const userAltura = readlineSync.question('voce deseja jogar novamente? s/n: ');
   if (userAltura === 's') {
    const jogarNova =  readlineSync.questionInt(['Digite o seu numero de 1 a 10 e boa sorte: ']);
    numSorteado(jogarNova)
   }
}

numSorteado(numLuck);