
function isNum(val){
    return !isNaN(val)
  }

const funcaoPromisse = (num1,num2,num3) => {
const verifica1 = isNum(num1);
const verifica2 = isNum(num2);
const verifica3 = isNum(num3);

return new Promise((resolve, reject) => {

    if(!verifica1 || !verifica2 || !verifica3) {
        reject(new Error('não é numero'))
      }
      const operacao = (num1 + num2) * num3;
    if (operacao < 50) return reject(new Error('Seu numero é valido, mas é valor muito baixo'));
    console.log(`Valor da operação é ${operacao}`);
    resolve();
})
}

function main() {
funcaoPromisse(1,2,100);
// funcaoPromisse('b')

}

main();