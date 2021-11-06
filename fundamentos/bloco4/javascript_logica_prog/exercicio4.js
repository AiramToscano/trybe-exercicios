
// primeiro passo desse algoritmo é encontrar a posição central da piramide
let n=5;
let n1 = "*";
let soma =[];
let posicaocentral = (n+1)/2;
let posicaoesquerda = posicaocentral;
let posicaodireita = posicaocentral;

for ( let i = 0; i <= posicaocentral ; i ++ ){

  for ( let j = 0; j <=n ; j ++){

   if ( j > posicaoesquerda && j < posicaodireita){
       soma+= n1;
   }
   else {
       soma+= " ";
   }
  }

console.log(soma);
soma = [];
posicaodireita += 1;
posicaoesquerda -= 1;


}
