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

export default Person;