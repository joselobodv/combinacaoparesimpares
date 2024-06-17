let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];
let todos = [];

for (let i = 0; i < numerosInteiros.length; i++) {
  if (numerosInteiros[i] % 2 == 0) {
    pares.unshift(numerosInteiros[i]);
  } else {
    impares.push(numerosInteiros[i]);
  }
}

console.log(todos)