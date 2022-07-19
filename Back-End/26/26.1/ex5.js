// ./length.ts
// lembrete: mudar o array units e a base para o cálculo em cada arquivo!
var readlineSync = require('readline-sync');
var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    console.log(fromIndex);
    var toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    var exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    var value = readlineSync.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    var fromUnitChoiceIndex = readlineSync.keyInSelect(units, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    var toUnitChoiceIndex = readlineSync.keyInSelect(units, "Escolha um número para a conversão:");
    var fromUnitChoice = units[fromUnitChoiceIndex];
    var toUnitChoice = units[toUnitChoiceIndex];
    var result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    var message = "".concat(value).concat(fromUnitChoice, " \u00E9 igual a ").concat(result).concat(toUnitChoice);
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
