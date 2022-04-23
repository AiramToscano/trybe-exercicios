const newEmployees = (callback) => {
    const employees = {
      id1: callback(' Pedro Guerra Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond Guerra'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva Guerra'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const vetor1 = (namecompleto) => {
  const email1 = ` ${namecompleto.replace(/\s/g,'_')}@trybe.com`
  return {name: namecompleto, email: email1} 
  }

    // console.log(vetor1('airam toscano toscano'));
  console.log(newEmployees(vetor1));