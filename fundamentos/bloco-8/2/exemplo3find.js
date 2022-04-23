const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (parametro) => {
  if(parametro.length >= 5) {
      return parametro;
  }
  else {
      return undefined;
  }
}

const retorna = names.find(findNameWithFiveLetters)

console.log(retorna);