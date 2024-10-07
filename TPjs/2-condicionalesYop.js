
//2. Operadores lógicos y condicionales
//ej 1
a = 4
b = 5

if (a > b) {
  c = a;
  console.log("El mayor es: " + c);
} else if (b > a) {
  c = b;
  console.log("El mayor es: " + c);
} else {
  console.log("Ambos números son iguales.");
}

// Ej 2
let numeroIngresado = prompt("Por favor, ingresa un número:");
numeroIngresado = parseInt(numeroIngresado);
if (numeroIngresado % 2 === 0) {
  console.log("El número " + numeroIngresado + " es par.");
} else {
  console.log("El número " + numeroIngresado + " es impar.");
}