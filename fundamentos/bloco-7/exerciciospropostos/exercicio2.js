const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
    
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
    
  };

  // questao 1, crie um função que adicione  um turno da noite na lesson2

//  const addLesson2 = (lesson2) => {

//      const add = {
//          turno: 'noite',
//      }
//  Object.assign(lesson2, add);

// //  console.log(lesson2);

// // const addNewKey = (obj, key, value) => {
// //     obj[key] = value;
// //   };
   
// //   addNewKey(lesson2, 'turno', 'noite');
// //   console.log(lesson2);

// };
// addLesson2(lesson2);

// questão 2, Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

//  const listObject = (obj) => Object.keys(obj);
//  console.log(listObject(lesson3));
 
// // questão 3 Crie uma função para mostrar o tamanho de um objeto.

// const tamObject = (tam) => Object.keys(tam).length;

// console.log(tamObject(lesson3));

// questão 4 Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.

// const test1 = (e) => Object.values(e);

// console.log(test1(lesson2))




// const listValue = (value1) => Object.values(value1);
// console.log(listValue(lesson3));

// questão 5 Crie um objeto de nome allLessons , 
// que deve agrupar todas as aulas através do Object.assign .
// Cada chave desse novo objeto será uma aula, 
// sendo essas chaves: lesson1 , lesson2 e lesson3 . 
// Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// // questão 6 sando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// const num = () => {
//     const soma = allLessons.lesson1.numeroEstudantes +allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes ;
//     return soma;
// }
// console.log(num());
// questao 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// const pegaValor = (valor1) => Object.entries(valor1);

// console.log(pegaValor(lesson2)[2][1]);

// questão 8  Crie uma função que verifique se o par (chave / valor) existe na função. 
//Essa função deve possuir três parâmetros, 
//sendo eles: o objeto, o nome da chave e o valor da chave.

const verifica = (obj, key, valor) => {
    
      const vetor1=  Object.entries(obj);
      let valor1 = false;
      for (let i in vetor1) {
        if ( vetor1[i][0] == key && vetor1[i][1] == valor) {
             valor1 = true;
             return valor1;
              
        }
      }     
         return valor1;
         
    };

     console.log(verifica(lesson3, 'turno', 'noite'));
   
  
   
