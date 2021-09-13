// Para os exercícios 2, 3 e 4 considere o seguinte array:

const assert = require('assert');
const { log } = require('console');

const books = [
  {
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

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  const authors = books.map((book) => book.author.name);
  const string = authors.reduce((acc, author) => `${acc}, ${author}`);
  const doteString = string.concat('.');
  return doteString;
};

// console.log(reduceNames());

// Gabarito:

// function reduceNames2() {
//   const names = books.reduce((acc, book, index, array) => {
//     if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//     return `${acc} ${book.author.name},`;
//   }, '');
//   return names.trim();
// };

// console.log(reduceNames2());

// assert.strictEqual(reduceNames2(), expectedResult2);
assert.strictEqual(reduceNames(), expectedResult2);

//.................................................................

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult3 = 43;

function averageAge() {
  // escreva seu código aqui
  const sumOfAges = books.reduce((acc, book) => {
    return acc + (book.releaseYear - book.author.birthYear)
  }, 0);
  return sumOfAges / books.length;
}

// console.log(averageAge());

assert.strictEqual(averageAge(), expectedResult3);

//.................................................................

// 4 - Encontre o livro com o maior nome.

const expectedResult4 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  const nameSize = books.reduce((acc, book) => {
    if (acc.name.length > book.name.length) {
      return acc;
    }
    return book;
  })
  return nameSize;
};

// console.log(longestNamedBook());

// Usando forEach:

// function longestNamedBook2() {
//   let nameBook;
//   books.forEach((book) => {
//     if (!nameBook || book.name.length > nameBook.name.length) {
//       return nameBook = book;
//     }
//   })
//   return nameBook;
// };

// console.log(longestNamedBook2());

// assert.deepStrictEqual(longestNamedBook2(), expectedResult4);
assert.deepStrictEqual(longestNamedBook(), expectedResult4);
