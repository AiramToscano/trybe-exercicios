const fs = require('fs').promises;


function question(num) {
  return new Promise((resolve,reject) => {
      if(num > 0 && num % 5 === 0 && num % 3 === 0)
      resolve('FizzBuzz');
      if(num > 0 && num % 3 === 0)
      resolve('Fizz');
      if(num > 0 && num % 5 === 0)
      resolve('Buzz');
      if(num < 0) return reject(new Error(`${num} não é numero valido`))
     resolve(num)
  });
}

async function main() {
    try {
        await question(-5).then(result => console.log(`Sucesso : ${result}`))
        } catch (err) {     
            console.log(`erro: ${err.message}`);
        }
        
}
    
main();