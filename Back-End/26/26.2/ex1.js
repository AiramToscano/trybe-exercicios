var Color;
(function (Color) {
    Color["Black"] = "Preta";
    Color["White"] = "Branca";
    Color["red"] = "Vermelha";
    Color["Silver"] = "Prata";
})(Color || (Color = {}));
var Dor;
(function (Dor) {
    Dor["open"] = "Abriu a porta";
    Dor["close"] = "Fechou a porta";
})(Dor || (Dor = {}));
// usamos a palavra reservada class para definir uma classe
var Car = /** @class */ (function () {
    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    function Car(brand, dors, colorcar) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.brand = brand;
        this.dors = dors;
        this.colorcar = colorcar;
    }
    Car.prototype.honk = function () {
        console.log("O carro da marca ".concat(this.brand, " apertou a buzina bibibibibibi"));
    };
    Car.prototype.openTheDoor = function (dors) {
        console.log("".concat(dors));
    };
    Car.prototype.closeTheDoor = function (dors) {
        console.log("".concat(dors));
    };
    return Car;
}());
var car1 = new Car("ford", 1, Color.Black);
car1.honk();
car1.openTheDoor(Dor.open);
