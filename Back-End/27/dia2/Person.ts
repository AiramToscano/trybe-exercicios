class Person { 
    name: string;
    birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this.name = name;
        this.birthDate = birthDate;

    }

    getPerson(): void{
        console.log(`${this.name} faz aniversario em: ${this.birthDate} `)
    }
    validName(name: string): void {
          if(name.length <3) {
              console.log('o nome tem que ser no minimo 3 caracteres')
          }
          return;
    }
    validDate(date: number):void {
        const verifydate = 2022 - date
       if(verifydate < 0) {
           console.log('Não pode passar valores futuros')
       }
       if(verifydate > 122 ) {
           console.log('A pessoa não pode ter mais de 120 anos')
       }
       return;
    }
    }


const person1 = new Person('Airam Toscano' , new Date(1992,2,10));
// person1.validDate(new Date(1992,2,10).toLocaleString().substr(0, 9));
person1.validDate(1992);
person1.getPerson();

export default Person;