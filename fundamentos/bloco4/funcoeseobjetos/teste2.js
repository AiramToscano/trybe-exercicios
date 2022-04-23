const p1 = {
    name: 'joão',
    adress: {
        city: 'pessoa'
    },
    age: 32
};

const p2 = {
    sobrenome: 'almeida',
    gosto: 'cachorro'
}

const p3 = { ...p1 , ...p2};
//  p2.adress.city = 'são paulo';
 console.log(p3)
