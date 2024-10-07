
//6. Arrays
//ej 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numeroMulti = numeros.map(numero => numero * 2)

console.log("Arreglo original: " + numeros)
console.log("Arreglo multiplicado por 2: " + numeroMulti)

//ej 2
const pares = [];
let contador = 0;

for (let i = 1; contador < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
    contador++;
  }
}
console.log(pares);