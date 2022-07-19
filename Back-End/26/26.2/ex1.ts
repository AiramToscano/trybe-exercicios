enum Color {
    Black = "Preta",
    White = "Branca",
    red = "Vermelha",
    Silver = "Prata",
}

enum Dor {
    open = "Abriu a porta",
    close = "Fechou a porta",
 
}

// usamos a palavra reservada class para definir uma classe
class Car {
    brand: string;
    dors: number;
    colorcar: Color; // na cor dos olhos usamos uma Enum com valores pré definidos

    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(brand: string, dors: number, colorcar: Color) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.brand  = brand;
        this.dors  = dors;
        this.colorcar  = colorcar;
    }

    honk(): void {
        console.log(`O carro da marca ${this.brand} apertou a buzina bibibibibibi`);
    }

    openTheDoor(dors: Dor): void {
        console.log(`${dors}`)
    }

    closeTheDoor(dors: Dor): void {
        console.log(`${dors}`)
    }
    turnOn(): void {
        console.log(`O carro da marca ${this.brand} ligou o carro`)
    }
}

const car1 = new Car("ford", 1, Color.Black);
car1.honk();
car1.openTheDoor(Dor.open);