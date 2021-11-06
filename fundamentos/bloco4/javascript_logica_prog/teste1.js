let n = 5;
let vetorvazio = [];
let n1 = "*";
let n2 = n;
let base = (n +1) / 2;
let ladodireito = base;
let ladoesquerdo = base;

for ( let i = 0 ; i <= base ; i ++){

  for ( let j = 0 ; j <= n ; j ++){

     if( j > ladoesquerdo && j < ladodireito ){

      vetorvazio += n1;
     }
    

    else{      
      vetorvazio += " ";
    }

  }

  console.log(vetorvazio);
  vetorvazio = [];
  ladoesquerdo-= 1;
  ladodireito += 1;
}