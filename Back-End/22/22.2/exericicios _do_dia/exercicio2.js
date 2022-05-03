
function isNum(val){
    return !isNaN(val)
  }

const funcaoPromisse1 = (num1,num2,num3) => {
const verifica1 = isNum(num1);
const verifica2 = isNum(num2);
const verifica3 = isNum(num3);

return new Promise((resolve, reject) => {

    if(!verifica1 || !verifica2 || !verifica3) {
        reject(new Error('não é numero'))
      }
      const operacao = (num1 + num2) * num3;
    if (operacao < 50) return reject(new Error('Seu numero é valido, mas é valor muito baixo'));
    resolve(operacao);
})
}

function main() {
const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

funcaoPromisse1(num1,num2,num3).then(result => console.log(`Sucesso : ${result}`))
.catch(err => console.log(`erro: ${err.message}`));
// funcaoPromisse('b')

}

main();