'use strict'

var numero = parseFloat(prompt("Ingrese un número:"));

if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es cero.");
}