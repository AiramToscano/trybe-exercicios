export default abstract class Person {
    private _name: string;
    private _birthDate: Date;
    constructor( name: string , birthDate: Date) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get getname(): string { return this._name; }
    set getname(value: string) {
        this._name = value; 
    }
    get getbirthdate(): Date {return this._birthDate}
    set getbirthdate(value: Date) { this._birthDate = value}
}
