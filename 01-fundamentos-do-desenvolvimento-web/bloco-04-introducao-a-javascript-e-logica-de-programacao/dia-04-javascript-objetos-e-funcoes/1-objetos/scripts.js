//1
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}
//1

//2
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade')
//2

//3
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
//3

console.table(player);

player['fullName'] = player.name + ' ' + player.lastName;

console.table(player);

//4
console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');
//4

//5
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');
//5
