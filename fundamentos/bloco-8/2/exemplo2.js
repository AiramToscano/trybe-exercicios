const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const caixaAlta = (name,indice) => { 

 names[indice] = name.toUpperCase();
}

names.forEach(caixaAlta);

console.log(names);