var readlineSync = require('readline-sync');

type season = {
    name: string;
    months: string[]
  };

const seasons: season[] = [
    {
        name: 'Outono',
        months: ['setembro' , 'outubro', 'novembro', 'dezembro'],

    },
    {
        name: 'Inverno',
        months: ['dezembro' , 'janeiro', 'fevereiro'],

    },
];

const userName = readlineSync.question('digite o mes para saber a estação: ');


const searchSeasons = () => {

   const teste = seasons.map((mouth) => {
        const searchmouth = mouth.months.some((e) => e === userName)
        if(searchmouth) {
            return mouth.name
        }
})
teste.forEach((e) => {
    if(e !== undefined) console.log(e)
})
const teste2 = teste.every((e) => e === undefined)
if(teste2) console.log('mes não encontrado')
process.exit();
}

console.log(searchSeasons());