
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const name1 = names.map((numero1)=> {
    return numero1.split('').reduce((vetor1,vetor) => {
        if(vetor === 'a' || vetor === 'A') return vetor1 += 1;
        return vetor1;
    },0)
  });
  console.log(name1); // consigo saber a quantidade de letra 'a' e 'A' em cada vetor

  const somaName = name1.reduce((vet1,vet) => {
     return vet1 += vet ;
  })
  console.log(somaName); // somo todos os valores do meu vetor mostrado anteriomente.


