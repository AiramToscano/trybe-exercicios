import Subject from './Subject';
import Teacher from './Teacher';

const math = new Subject('Matemática');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

console.log(marta);