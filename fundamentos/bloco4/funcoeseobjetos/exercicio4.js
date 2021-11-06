function nomesmaiores (nomes) {
   
   let maior = 0;
    
for ( let i = 0; i < nomes.length ; i ++ ){



if ( nomes[i].length > nomes[maior].length) {

      maior = i;

}


}
return nomes[maior];

}


console.log(nomesmaiores(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));