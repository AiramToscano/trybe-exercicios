let n=5;
let n1 = "*";
let soma =[];
let posicao = n;

for ( let i = 0; i < n ; i ++ ){

  for ( let j = 0; j <= n ; j ++){

   if ( j < posicao){
       soma+= " ";
   }
   else {
       soma+= n1;
   }
  }

console.log(soma);
soma = [];
posicao -= 1;


}