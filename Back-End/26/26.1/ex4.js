"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var seasons = [
    {
        name: 'Outono',
        months: ['setembro', 'outubro', 'novembro', 'dezembro']
    },
    {
        name: 'Inverno',
        months: ['dezembro', 'janeiro', 'fevereiro']
    },
];
var userName = readlineSync.question('digite o mes para saber a estação: ');
var searchSeasons = function () {
    var teste = seasons.map(function (mouth) {
        var searchmouth = mouth.months.some(function (e) { return e === userName; });
        if (searchmouth) {
            return mouth.name;
        }
    });
    teste.forEach(function (e) {
        if (e !== undefined)
            console.log(e);
    });
    var teste2 = teste.every(function (e) { return e === undefined; });
    if (teste2)
        console.log('Estação não encontrada');
    process.exit();
};
console.log(searchSeasons());
