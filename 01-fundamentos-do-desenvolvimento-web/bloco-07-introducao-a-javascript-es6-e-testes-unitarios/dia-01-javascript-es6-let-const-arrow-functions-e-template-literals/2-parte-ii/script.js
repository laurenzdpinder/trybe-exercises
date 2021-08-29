// Parte II

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// 1. Crie uma função que receba um número e retorne seu fatorial.

// * Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// * Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

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


