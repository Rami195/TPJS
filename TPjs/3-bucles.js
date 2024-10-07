//3. Operadores de asignación y bucles
//ej1
a = 10
while (a >= 0) {
  console.log(a)
  a = a - 1
}

//ej2
let num

do {

  num = prompt("Por favor, ingresa un número mayor a 100:");

  num = parseInt(num);

} while (num <= 100 || isNaN(num));

console.log("Has ingresado el número: " + num);
