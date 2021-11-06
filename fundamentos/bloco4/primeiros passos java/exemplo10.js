
let valorcusto = 1000;
let valordevenda = 2000;
let impostosobreocusto = (valorcusto * 0.2);
let valorcustototal = (valorcusto + impostosobreocusto)
let valorlucro = valordevenda - valorcustototal;

if (valorcusto <0 || valordevenda <0 ) {


    console.log(" Mensagem de error")
}

else {

    console.log( valorlucro);
}