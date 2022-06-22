import Person from './Person';

class Student extends Person {
   enrollment: string;
   examsGrades: number[];
   worksGrades: number[];
   sumNotas: number;
   sumMedia: number;
    constructor(name: string, birthDate: Date, examsGrades: number[], worksGrades: number[]) {
        super(name, birthDate)
        this.enrollment = '';
        this.examsGrades = examsGrades;
        this.worksGrades = worksGrades;
        this.sumNotas = 0;
        this.sumMedia = 0;
    }
    sumGrades(examsGrades: number[], worksGrades: number[]) {
      const somaProva = examsGrades.reduce((elem: number, sum: number): number => {
         return elem + sum;
      }, 0)
      const somaTrabalho = worksGrades.reduce((elem: number, sum: number): number => {
        return elem + sum;
      }, 0)
      this.sumNotas = somaProva + somaTrabalho;
      console.log(`O aluno ${this.name} teve a soma das notas de ${this.sumNotas}`)
    }
    sumAverageGrade(examsGrades: number[], worksGrades: number[]) {
        const somalenght = examsGrades.length + worksGrades.length;
        const media = this.sumNotas / somalenght;
        this.sumMedia = media;
        console.log(`A media do aluno ${this.name} é igual a : ${media}`)
    }
    generateEnrollment() {
        let result1= Math.random().toString(36).substring(2,20);       
        console.log(`O aluno da matricula ${result1} teve media de : ${this.sumMedia}`)
    }
}

export default Student;