class Subject {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    validname(name: string) {
        if(name.length < 3) {
            console.log("O nome da disciplina tem que ser no minimo 3 caracteres")
        }
        if(name.length > 3) {
          console.log(`o nome da disciplina é ${name}`)
        }
    }
}

export default Subject;