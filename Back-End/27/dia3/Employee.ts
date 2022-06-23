import Person from './Person';
import Enrollable from './Enrollable';


class Employee extends Person implements Enrollable {
      private _salary: number;
      private _admissionDate: Date;
      eroolment: string;
      constructor(name: string , birthDate: Date, salary: number, admissionDate: Date) { 
          super(name, birthDate)
          this._salary = salary;
          this.eroolment = this.generateEnrollment();
          this._admissionDate = admissionDate;
          
      }
    generateEnrollment():string { 
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        if(randomStr.length < 16) {
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
        }
        return `PRF${randomStr}`;
       }
    get getsalary() {
        return this._salary;
    }
    set getsalary(value : number) {
        if(value < 0) {
            throw new Error('O salario não pode ser negativo')
        }
         this._salary = value;
    }
    get getadimison() {
        return this._admissionDate;
    }
    set getadimison(value: Date) {
         this._admissionDate = value;
    }
}

export default Employee;