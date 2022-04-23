const multi = (multi) => {
    return (number) => {
        return   number *   multi;
    }
}

const double = multi(2);
const triple = multi(3);
const quadruple = multi(4);

console.log(quadruple(5));