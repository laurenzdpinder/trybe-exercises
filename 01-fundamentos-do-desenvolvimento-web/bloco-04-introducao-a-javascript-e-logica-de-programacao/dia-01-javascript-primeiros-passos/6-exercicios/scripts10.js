const cost = 1;
const tax =  cost * 0.2;

const totalCost = cost + tax;
const value = 3;

let product = 1000;

const earning = (value - totalCost) * product;

if (cost >= 0 && value >= 0) {
  console.log(earning);
} else {
  console.log('Erro');
}

// Gabarito

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
}