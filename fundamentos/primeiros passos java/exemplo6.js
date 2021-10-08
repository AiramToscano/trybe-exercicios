
let xadrez = "AIRAM";
xadrez = xadrez.toLowerCase();

switch (xadrez) {
    case "rainha":
        console.log("todos os lados")
        break;

    case "bispo":
        console.log("anda em diagonal")
        break;

    case "torre":
        console.log("somente vertical e orizontal")
        break;

    case "cavalo":
        console.log("em L")
         break;

    case "piao":
        console.log("só uma casa")
        break;

    default:
        console.log("peça nao indentificada")
}