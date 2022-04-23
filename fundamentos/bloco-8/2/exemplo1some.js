const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };

  const retornaAprovado = (student) =>(
  
  Object.values(student).some((grade) => grade ==='Aprovado')

  );

console.log(retornaAprovado(grades));