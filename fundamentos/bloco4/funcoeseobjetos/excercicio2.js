function menorvetor(vetor) {


    let menor = 0;
    
    
    for ( let i = 0 ; i < vetor.length; i ++) {
    
    if ( vetor[i] < vetor[menor]) {
    
         menor = i;
    
         
    }
    
    }
    
    return menor;
    
    }
    console.log(menorvetor([2, 4, 6, 7, 10, 0, -3]));