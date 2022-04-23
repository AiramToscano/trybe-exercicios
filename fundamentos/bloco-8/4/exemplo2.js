const palavras = ['olaaarooooooooooooooooo','paralelepipedo' , 'oi'];

const maiorPalavra = palavras.reduce((maiorpalavra1,palavraAtual) => {

    if (palavraAtual.length > maiorpalavra1.length) {
       return palavraAtual;
  }
  return maiorpalavra1;
},'');

console.log(maiorPalavra);