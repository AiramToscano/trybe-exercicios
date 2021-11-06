let salariobruto = 3000
let salariodescliquido1 = salariobruto * 0.11;
let salarioliquido1 = salariobruto - salariodescliquido1;
let salariodescliquido2 = salariobruto * 0.09;
let salarioliquido2 = salariobruto - salariodescliquido2;



if (salariobruto >= 2594.93 && salariobruto <= 5189.82 &&  salarioliquido1>= 2826.66 && salarioliquido1 <= 3751.05){
   
    
    let salarioliquido = salariobruto - salariodescliquido1;
    let salariodescontando = salarioliquido * 0.15;
    let salarioliquidodescontado = salariodescontando - 354.80;
    let salarioliquidoreal = salarioliquido - salarioliquidodescontado
     
    console.log(salarioliquidoreal);

}

else if (salariobruto >= 2594.93 && salariobruto <= 5189.82 &&  salarioliquido2>= 1903.99 && salarioliquido2 <= 2826.65){
   
    
    let salarioliquido2 = salariobruto - salariodescliquido1;
    let salariodescontando2 = salarioliquido2 * 0.075;
    let salarioliquidodescontado2 = salariodescontando2 - 142.80;
    let salarioliquidoreal2 = salarioliquido2 - salarioliquidodescontado2
     
    console.log(salarioliquidoreal2);

}
