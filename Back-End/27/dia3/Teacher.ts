import Employee from './Employee';
class Teacher extends Employee {
    private _subject: string;
    constructor(name: string, birthDate: Date, salary: number, admissionDate: Date, subject: string,) {
        super(name, birthDate, salary, admissionDate);
        this._subject = subject
    }
    get getsubject() {
        return this._subject
    }
    set getsubject(value : string) {
     this._subject = value;
    }
}
// perguntar sobre o uso do private
export default Teacher;