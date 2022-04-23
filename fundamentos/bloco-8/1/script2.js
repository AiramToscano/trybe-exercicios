const check = (meuNumero, numero) => meuNumero === numero;

const sorteio = (meuNumero, action) => {
  
  const numeroSorteado=  Math.floor(Math.random() * 5 + 1);
  
   return action(meuNumero,numeroSorteado) ? 'parabéns voce ganhou' : ' tente novamente'
};


console.log(sorteio(3,check));