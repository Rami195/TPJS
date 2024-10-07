// 4 Funciones de JavaScript
//Ej 1
function esPar(a) {
    if (a % 2 === 0) {
      return true
    } else { return false }
  }
  let paridad = prompt("Ingrese un numero para ver su paridad")
  paridad = parseInt(paridad);
  console.log("El numero " + paridad + " es par: " + esPar(paridad))
  
  
  //EJ 2
  function convertirCelsiusAFahrenheit(a) {
    let f = a * 1.8 + 32
    return f
  }
  let gradosC = prompt("Ingrese un grado Celsius")
  gradosC = parseInt(gradosC);
  console.log(gradosC + "C son equivalentes a: " + convertirCelsiusAFahrenheit(gradosC) + "F")
  