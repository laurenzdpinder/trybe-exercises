const angleA = 90;
const angleB = -10;
const angleC = 100;

const sumOfAngles = angleA + angleB + angleC;
const validAngles = angleA > 0 && angleB > 0 && angleC > 0;

if (validAngles) {
  if (sumOfAngles === 180) {
    console.log("true");
  } else {
    console.log ("false");
  }
} else {
  console.log("Erro: ângulo inválido");
}
