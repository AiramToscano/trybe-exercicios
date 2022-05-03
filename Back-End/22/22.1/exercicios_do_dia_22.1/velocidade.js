const readlineSync = require('readline-sync');

const distInt = readlineSync.questionInt(['Digite a distancia em metros: ']);
const secInt = readlineSync.questionInt(['Digite a quantidade de segundos: ']);


const speedMedia = (distancia, tempo) => {
const medio = distancia / tempo;
console.log(`A velocidade média é de : ${medio} m/s`);
}

speedMedia(distInt, secInt);