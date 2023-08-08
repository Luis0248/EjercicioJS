/**
 * 3.Leer un número determinar si es par o impar e imprimir el mensaje.
 */

'use strict'
let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " es un número impar.");
  }
}
