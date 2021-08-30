// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// * Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const string = 'Tryber x aqui!';
let nome = 'Laurenz';
let message = [];

const heloo = (parametro1, parametro2) => {
  for (let search of parametro1) {
    if (search === 'x') {
      search = parametro2;
    }
    message.push(search);
  }
  return message.join('');
}

// console.log(heloo(string, nome));

// * Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const array = ["JavaScrip", "CSS", "DOM", "HTML", "Python"];

const skills = () => {
  return `${heloo(string, nome)}

  Tudo bem?
  
  Minhas cinco principais habilidades são:

  ${array.sort()}

  #goTrybe
  `
}

console.log(skills())
