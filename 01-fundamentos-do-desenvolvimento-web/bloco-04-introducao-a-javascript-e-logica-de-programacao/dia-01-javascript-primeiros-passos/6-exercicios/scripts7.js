let grade1 = 110;
let validGrade = grade1 >= 0 && grade1 <= 100;

if (validGrade) {
  if (grade1 >= 90) {
    console.log('A');
  } else if (grade1 >= 80) {
    console.log('B');
  } else if (grade1 >= 70) {
    console.log('C');
  } else if (grade1 >= 60) {
    console.log('D');
  } else if (grade1 >= 50) {
    console.log('E');
  } else {
    console.log('F')
  }
} else {
  console.log('Erro, nota incorreta!')
}

// Gabarito

const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}