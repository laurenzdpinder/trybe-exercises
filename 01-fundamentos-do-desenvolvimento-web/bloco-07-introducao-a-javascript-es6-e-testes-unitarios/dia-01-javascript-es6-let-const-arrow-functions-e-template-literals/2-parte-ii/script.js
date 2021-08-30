// Parte II

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// 1. Crie uma função que receba um número e retorne seu fatorial.

// * Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// * Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// Desenvolvimento
function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    let result = 1;
    for (let i = 0; i < n; i += 1) {
      result = result * (n - i);
    }
    return result;
  }
} 
console.log(factorial(4));


function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result = result * i;
  }
  return result;
}
console.log(factorial(1));

// Desenvolvimento

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}
console.log(factorial(2));


const factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5));

// Raciocínio

function understanding(n) {
  if (n > 0) {
    return n * understanding(n - 1);
  } else {
    return 1;
  }
}
console.log(understanding(4));

4 * understanding(3);
4 * (3 * understanding(2));
4 * (3 * (2 * understanding(1)));
4 * (3 * (2 * (1)))

// Raciocínio

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

let text = "Antônio foi no banheiro e não sabemos o que aconteceu";

const longestWord = text => {
  let arrayOfString = text.split(' ');
  let maxLength = 0;
  let result = '';
  
  for(const item of arrayOfString) {
    if (item.length > maxLength) {
      maxLength = item.length;
      result = item;
    }
  }
  return result;
}

console.log(longestWord(text));

// Outras possibilidades de for

// for(const item in arrayOfString) {
//   console.log(arrayOfString[item].length)
// }

// for(let item = 0; item < arrayOfString.length; item += 1) {
//   console.log(arrayOfString[item].length)
// }

text = "Antônio foi no banheiro e não sabemos o que aconteceu";

// function stringToArray(string) {
//   return string.split(' ');
// }

const stringToArray = string => string.split(' ');

console.log(stringToArray(text));

const oi = ['um', 'dois', 'dez']

// function wordsLengthCompare(wordA, wordB) {
//   return wordB.length - wordA.length;
// }

const wordsLengthCompare = (wordA, wordB) => wordB.length - wordA.length;

// function sortWordsLength(array) {
//   return array.sort(wordsLengthCompare);
// }

const sortWordsLength = array => array.sort(wordsLengthCompare);

function longestWord() {
  return sortWordsLength(oi)[0];
}

console.log(longestWord());

text = "Antônio foi no banheirooooo e não sabemos o que aconteceu";

// function longestWord(string) {
//   let result = string.split(' ');
//   result = result.sort((wordA, wordB) => wordB.length - wordA.length);
//   result = result[0];
//   return result;
// }

const longestWord = string => string.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord(text));
