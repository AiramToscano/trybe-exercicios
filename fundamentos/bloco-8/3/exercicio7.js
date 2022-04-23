const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
const expectedResult = 'O Senhor dos Anéis';
// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
    return books.find((book) => (
        book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
      )).name;
}

const vet1 = [2,2,4,5,6];
// const filter1 = vet1.every((e) => e < 5);

const filter1 = (array) => {
  // console.log(array);
  const filter = vet1.every((e) => {
    if( e > 1) return array > 4;
  })

  return filter;
}

const filter2= vet1.filter(filter1);
console.log(filter2);

