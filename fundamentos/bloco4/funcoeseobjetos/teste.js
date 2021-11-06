    let n= 5;
    let n1= "*";
    let soma = [];
    let n2 = n;

for ( i = 0 ; i < n ; i ++) {

  for( let j = 0; j <= n ; j ++) {
         
    if ( j < n2) {
    
          soma += ' ';
         
   
        
    }

   else { 

       soma+= n1;
       
   }
      
     
  }
  console.log(soma);
  soma = [];
  n2 -= 1;
}







