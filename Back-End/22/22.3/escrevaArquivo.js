const fs = require('fs');


const escreva = (nomeDoArquivo, conteudoDoArquivo) => {
    fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);
    return 'ok';
}

// const passarparamentro = () => {
//     escreva('arquivo.txt', '#vqv conteúdo');
// }

// passarparamentro()

module.exports = escreva;