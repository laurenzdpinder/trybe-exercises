// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let result = 0;
  const letters = names.join().toLowerCase().split('');
  return letters.reduce((_, cur) => {
    if (cur === 'a') {
      return result += 1;
    }
    return result;
  }, '')
};

// console.log(containsA());

//Gabarito

// function containsA() {
//   return names.reduce((acc, curr) =>
//      acc + curr.split('').reduce((acumulator, current) => {
//         if (current === 'a' || current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }

assert.deepStrictEqual(containsA(), 20);
