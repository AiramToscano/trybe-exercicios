const readline = require('readline');
const fs = require('fs').promises;

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('qual arquivo voce deseja ler: ', (resposta) => {
  fs.readFile(resposta, 'utf8').then((data) => {
    const arquivos = JSON.parse(data);
    arquivos.map((e) => console.log(e));
}).catch((err) => { console.log(new Error(`Arquivo não encontrado ${err}`)) })

  input.close();
});