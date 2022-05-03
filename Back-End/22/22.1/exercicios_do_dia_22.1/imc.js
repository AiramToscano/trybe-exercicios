
const readlineSync = require('readline-sync');

const userPeso = readlineSync.questionFloat(['Digite seu peso com um valor válido: ']);
const userAltura = readlineSync.question('Qual a sua altura? ');

console.log(`Seu peso é ${userPeso}kg e sua altura é ${userAltura}m`);

const verifiedImc = (peso,altura) => {
    const imcno = peso/(altura * 2);
    const imc = parseFloat(imcno.toFixed(2));
    
    if(imc < 18.5) return console.log(`Seu imc é ${imc} e está abaixo do peso(magreza)`);
    if(imc > 18.5 && imc < 24.9) return console.log(`Seu imc é ${imc} e está com peso normal`);
    if(imc > 25 && imc < 29.9) return console.log(`Seu imc é ${imc} e está acima do peso normal(sobrepeso)`);
    if(imc > 30 && imc < 34.9) return console.log(`Seu imc é ${imc} e está com obesidade grau 1`);
    if(imc > 35 && imc < 29.9) return console.log(`Seu imc é ${imc} e está com obesidade grau 1`);
    if(imc > 40) return console.log(`Seu imc é ${imc} e está com obesidade grau 1`);
}

verifiedImc(userPeso,userAltura);