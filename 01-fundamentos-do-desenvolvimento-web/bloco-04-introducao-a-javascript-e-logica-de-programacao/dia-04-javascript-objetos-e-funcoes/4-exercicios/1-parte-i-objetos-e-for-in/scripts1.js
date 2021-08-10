let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1
console.log('Bem-vinda, ' + info.personagem);
//1

//2
info['recorrente'] = 'Sim';

console.log(info);
//2

//3
for (let properties in info) {
  console.log(properties);
}
//3

//4
for(let properties in info) {
  console.log(info[properties]);
}
//4

//5
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let properties in info) {
  if (properties === "recorrente" && info[properties] === "Sim" && info2[properties] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
//5