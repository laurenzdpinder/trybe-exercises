// Parte II
// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const morningShift = (object, key, value) => object[key] = value;

morningShift(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keyList = object => Object.keys(object);

// console.log(keyList(lesson3));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectSize = object => Object.keys(object).length;

// console.log(objectSize(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueList = object => Object.values(object);

// console.log(valueList(lesson1));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// const allLessons = {}
// allLessons.lesson1 = Object.assign({}, lesson1);
// allLessons.lesson2 = Object.assign({}, lesson2);
// allLessons.lesson3 = Object.assign({}, lesson3);

// console.log(allLessons);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const students = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// console.log(students())

const getStudentsTotal = obj => {
  const keys = Object.keys(obj);

  let total = 0;

  for (let index in keys) {
    const currentKey = keys[index];
    total += obj[currentKey].numeroEstudantes;
  }
  return total;
}

// console.log(getStudentsTotal(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const keysValue = (obj, position) => Object.values(obj)[position];

// console.log(keysValue(lesson1, 3));
