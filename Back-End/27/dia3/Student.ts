import Person from './Person';
import Enrollable from './Enrollable';


class Student extends Person implements Enrollable {
   examsGrades: number[];
   worksGrades: number[];
   sumexamesGrades: number;
   mediaexames: number;
   eroolment: string;
   constructor(name: string, birthDate: Date, examsGrades: number[], worksGrades: number[]) {
       super(name, birthDate);
       this.examsGrades = examsGrades;
       this.worksGrades = worksGrades;
       this.eroolment = this.generateEnrollment();
       this.sumexamesGrades = this.sumGrades(examsGrades, worksGrades);
       this.mediaexames = this.sumAverageGrade(examsGrades,worksGrades);
   }
   get enrollments() : string { return this.eroolment}
   set enrollments(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }
    this.eroolment = value;
  }
   generateEnrollment():string { 
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    if(randomStr.length < 16) {
        throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }
    return `AL${randomStr}`;
   }

   sumGrades(examsGrades: number[], worksGrades: number[]): number {
       if(examsGrades.length > 4) {
           throw new Error('O array não pode ser maior que 4')
       }
       if(worksGrades.length > 2) {
           throw new Error('A pessoa estudante deve possuir no máximo 2 nostas de trabalhos')
       }
    const somaProva = examsGrades.reduce((elem: number, sum: number): number => {
       return elem + sum;
    }, 0)
    const somaTrabalho = worksGrades.reduce((elem: number, sum: number): number => {
      return elem + sum;
    }, 0)
   return somaProva + somaTrabalho;
  }
   sumAverageGrade(examsGrades: number[], worksGrades: number[]): number {
    const somalenght = examsGrades.length + worksGrades.length;
    const media = this.sumexamesGrades / somalenght;
    return media;
}
}

export default Student;